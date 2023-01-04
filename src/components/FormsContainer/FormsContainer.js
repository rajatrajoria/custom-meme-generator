import React from "react"
import Form from "../Form/Form"
import "./formsContainer.css"

export default function FormsContainer(props)
{

    return(
        <div className="forms-container">
            <div className="text-designer">
                <Form info={props.info} handle={props.handle} id="1"/>
                <Form info={props.info} handle={props.handle} id="2"/>
            </div>
            <div className="meme-image-link">
                <label htmlFor="memeurl">URL :</label>
                <input 
                    type="text" 
                    placeholder="Enter Meme image URL here" 
                    name="image" 
                    id="memeurl"
                    onChange={props.handleMeme}
                />
                <input 
                    type="number" 
                    placeholder="Width" 
                    name="width" 
                    defaultValue={500}
                    min={5}
                    onChange={props.handleMeme}
                    id="img-width"
                />
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
    );
}