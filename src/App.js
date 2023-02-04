import React from "react"
import './App.css';
import formInfo from './formInfo'
import meme from "./meme"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import FormsContainer from './components/FormsContainer/FormsContainer';
import html2canvas from "html2canvas";
import { collection, addDoc } from "firebase/firestore";
import {db} from './firebase';
import axios from "axios";

function App() 
{
	//State info is used to track down the different input boxes and its data.
	//State memeData is used for the image information along with its dimension as well.
	const [info, setInfo] = React.useState(formInfo);
	const [memeData, setMemeData] = React.useState(meme);
	const [userData, setUserData] = React.useState(null);
	const getData = async () => {
		const res = await axios.get('https://geolocation-db.com/json/')
		setUserData({"IP": res.data.IPv4, "City": res.data.city, "State": res.data.state, "Country": res.data.country_name});
	}
	React.useEffect( () => {
		getData();
	}, []);

	//The allMemeData fetches and tracks the data receieved and stores it for further processing. useEffect is used to prevent React falling to the trap of the 'Out'side problems. ==> Infinte loop problem. 
	const [allMemeData, setAllMemeData] = React.useState([]);  
	React.useEffect(()=>{
	fetch("https://api.imgflip.com/get_memes")
		.then(res => res.json())
		.then(data => setAllMemeData(data.data.memes))
	},[])

	//This function finds a random integer and then uses it to the extract a random image from the API-derived data.
	function getRandomMemeImage() {
	const randomNumber = Math.floor(Math.random() * allMemeData.length)
	const url = allMemeData[randomNumber].url
	setMemeData(prevMeme => ({
		...prevMeme,
		image: url
	}))}

	//Most important function of the entire code. It handles the entire input and its associated fields. There are plenty of ifs and else's solely depending on the input types and props recieved form the lower components. 
	function handleChange(name, value, type)
    {
        let eventinfo = name.split(' ');
        var copy = JSON.parse(JSON.stringify(info));
        if(eventinfo.length==2)
        {   
            let loc = eventinfo[0], prop = eventinfo[1];
            copy[loc][prop] = value;
            setInfo(copy);
        }
        else
        {
            let loc = eventinfo[0], prop = eventinfo[2];
            if(prop=="opacity")
            {
              	copy[loc].style[prop] = value;
            }
            else if(type=="number" && prop!="shadowBlur" && prop!="shadowBlur")
              	copy[loc].style[prop] = value + "px";
            else if(type=="checkbox" && eventinfo[3]=="isBold")
            {
				copy[loc].style[eventinfo[3]] = !info[loc].style[eventinfo[3]];
				copy[loc].style[prop] = (copy[loc].style[eventinfo[3]]==true)?"bold":"normal";
            }
            else if(type=="checkbox" && eventinfo[3]=="isItalic")
            {
				copy[loc].style[eventinfo[3]] = !info[loc].style[eventinfo[3]];
				copy[loc].style[prop] = (copy[loc].style[eventinfo[3]]==true)?"italic":"normal";
            }
            else if(prop=="shadowBlur")
            {
				copy[loc].style.shadowBlur = value+"px";
				copy[loc].style.textShadow = "0px 0px "+value+"px "+copy[loc].style.shadowColor;
            }
            else if(prop=="shadowColor")
            {
				copy[loc].style.shadowColor = value;
				copy[loc].style.textShadow = "0px 0px "+copy[loc].style.shadowBlur+" "+value;
            }
            else 
              	copy[loc].style[prop] = value;
            setInfo(copy);
        }
    }

	// This state function updates and handles the meme-image parts. 
	function handleMemeData(event)
	{
      	const {name, value} = event.target;
      	if(name=="image")
      	{
			setMemeData({
			...memeData,
			[name] : [value]
			})
      	}
		else if(name=="imageUpload")
		{	
			setMemeData({
				...memeData,
				image : URL.createObjectURL(event.target.files[0])
			})
		}
		else
		{
			setMemeData({
			...memeData,
			[name] : [value]+"px"
			})
		}
 	 }

  	// This function adds more form boxes.
	function addMore()
	{
		if(info.length==1)
			alert("Swipe/Scroll horizontally to navigate through different boxes.")
		const obj =
		{
			id: 0,
			content: "",
			style: 
			{
				fontSize: "20px",
				fontStyle: "",
				color: "black",
				top: "0px",
				left: "0px",
				fontWeight: "normal",
				isBold: false,
				isItalic: false,
				width: "auto",
				textAlign: "left",
				textShadow: "none",
				shadowColor: "black",
				shadowBlur: "0px",
				letterSpacing: "0px",
				opacity: 1
        	}
    	}
		obj.id = info.length;
		const copy = [...info];
		copy.push(obj);
		setInfo(copy)
  	}

  	//This function handles the delete change.
  	function handleDelete(id)
  	{
		if(id==info.length-1)
		{
			const copy = [...info];
			copy.splice(id,1);
			setInfo(copy);
    	}
    	else
      	alert("Removing boxes from between not allowed.");
  	}

  	//This is html2canvas code. Used for snapping the div box.
  	function downloadImage(data, filename='meme.jpeg')
	{
		var a = document.createElement('a');
		a.href = data;
		a.download = filename;
		console.log(a);
		try {
            const docRef = addDoc(collection(db, "memes"), {
              URL: data,  
			  details: userData,
			  time: new Date()  
            });
          } catch (e) {
            console.error("Error uploading ", e);
        }
		a.click();
  	}
  	const download = () => {
		html2canvas(document.querySelector('#meme-image-id'),{allowTaint: true, useCORS: true}).then(canvas => {
		var dataURL = canvas.toDataURL("image/jpeg", 1.0);
		downloadImage(dataURL, 'my-canvas.jpeg');
	})}

	//to reference the content and the styles of the text on the image.
	const styles={height: memeData.height, width: memeData.width};

	//Mapping paras with respect to the number of the form boxes.
	const paraEle = info.map(item=>{
		return item.content && <p id={"p"+item.id} style={item.style}>{item.content}</p>
	})

	//Printing section.
	return (
		<div className="App">
		<Navbar/>
		<div className="AppContainer">
			<FormsContainer id="formsContainer" info={info} handle={handleChange} handleMeme={handleMemeData} addMore={addMore} handleDelete={handleDelete} getRandomMemeImage = {getRandomMemeImage} memeInfo={memeData}/>
			<div className="meme-display-container" id="meme-display-id">
				<div className="meme-image" id="meme-image-id">
					{paraEle}
					<img id="meme-image-img"style={styles} src={memeData.image}/>
				</div>
			</div>
		</div>
		<div className="downloadButton">
			<button onClick={download}>Click here to download</button>
		</div>
		<Footer/>
		</div>
	);
}

export default App;
