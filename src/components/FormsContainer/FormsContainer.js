import React from "react"
import Form from "../Form/Form"
import "./formsContainer.css"

export default function FormsContainer(props)
{

    const formEle = props.info.map(item=>{
        return <Form info={props.info} handle={props.handle} id={item.id} handleDelete={props.handleDelete}/>
    })

    function addMoreBoxes(){
        props.addMore();
    }

    return(
        <div className="forms-container">

            <div className="text-designer">
                {formEle}
            </div>

            <div className="addMoreFormButton">
                <button onClick={addMoreBoxes}>Add Box</button>
            </div>

            <div className="meme-image-link">
                <div className="meme-links">
                    <div className="meme-image-link-url">
                        <input 
                            type="text" 
                            placeholder="Meme image URL" 
                            name="image" 
                            id="memeurl"
                            onChange={props.handleMeme}
                        />
                    </div>
                    <span style={{fontStyle:"bold", fontSize: "20px"}}>or</span>
                    <button className="getRandomImage" onClick={props.getRandomMemeImage}>Random Meme</button>
                </div>
                <div className="meme-image-link-dimensions">
                    <label htmlFor="img-width">Width: </label>
                    <input 
                        type="number" 
                        placeholder="Width" 
                        name="width" 
                        defaultValue={375}
                        min={5}
                        onChange={props.handleMeme}
                        id="img-width"
                    />
                    <label htmlFor="img-height">Height: </label>
                    <input 
                        type="number" 
                        placeholder="Height" 
                        name="height"
                        defaultValue={300}
                        min={5}
                        onChange={props.handleMeme}
                        id="img-height"
                    />
                </div>
            </div>
        </div>
    );
}