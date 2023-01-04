import React from "react"
import './App.css';
import formInfo from './formInfo'
import meme from "./meme"
// import html2canvas from './html2canvas'
import FormsContainer from './components/FormsContainer/FormsContainer';

function App() 
{
  //State info is used to track down the different input boxes and its data.
  //State memeData is used for the image counterparts. Its dimensions as well.
  const [info, setInfo] = React.useState(formInfo);
  const [memeData, setMemeData] = React.useState(meme);  
  console.log(Object.keys(info).length);

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
      console.log(name, value);
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

  const styles={height: memeData.height, width: memeData.width};

  return (
    <div className="App">
		  <FormsContainer id="formsContainer" info={info} handle={handleChange} handleMeme={handleMemeData}/>
      <hr/>
      <div className="meme-display-container">
        <div className="meme-image" id="meme-image-id">
          {info.text1.content && <p style={info.text1.style}>{info.text1.content}</p>}
          {info.text2.content && <p style={info.text2.style}>{info.text2.content}</p>}
          <img style={styles} src={memeData.image}/>
        </div>
        <div id="meme-save-button">
          {/* <button onClick={doCapture}>Save Meme</button> */}
        </div>
      </div>
    </div>
  );
}

export default App;
