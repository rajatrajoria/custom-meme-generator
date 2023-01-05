import React from "react"
import './App.css';
import formInfo from './formInfo'
import meme from "./meme"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import FormsContainer from './components/FormsContainer/FormsContainer';
import html2canvas from "html2canvas";

function App() 
{
  //State info is used to track down the different input boxes and its data.
  //State memeData is used for the image counterparts. Its dimensions as well.
  const [info, setInfo] = React.useState(formInfo);
  const [memeData, setMemeData] = React.useState(meme);

  const [allMemeData, setAllMemeData] = React.useState([]);  
  React.useEffect(()=>{
  	fetch("https://api.imgflip.com/get_memes")
    	.then(res => res.json())
        .then(data => setAllMemeData(data.data.memes))
  },[])

  function getRandomMemeImage() {
	const randomNumber = Math.floor(Math.random() * allMemeData.length)
	const url = allMemeData[randomNumber].url
	console.log(url);
	setMemeData(prevMeme => ({
		...prevMeme,
		image: url
	}))
}

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
            // console.log(name,value,type);
            if(type=="number" && prop!="shadowBlur" && prop!="shadowBlur")
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
      else
      {
        setMemeData({
          ...memeData,
          [name] : [value]+"px"
        })
      }
  }

  function addMore()
  {
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
            shadowBlur: "0px"
        }
    }
    obj.id = info.length;
	const copy = [...info];
	copy.push(obj);
	setInfo(copy)
  }

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

  function downloadImage(data, filename='untitled.jpeg'){
	var a = document.createElement('a');
	a.href = data;
	a.download = filename;
	a.click();
  }
  const download = () => {
	html2canvas(document.querySelector('#meme-image-id'),{allowTaint: true, useCORS: true}).then(canvas => {
		var dataURL = canvas.toDataURL("image/jpeg", 1.0);
		downloadImage(dataURL, 'my-canvas.jpeg');
	})
  }

  const styles={height: memeData.height, width: memeData.width};

  const paraEle = info.map(item=>{
      return item.content && <p style={item.style}>{item.content}</p>
  })

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
