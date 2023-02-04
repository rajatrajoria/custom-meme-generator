import React from "react"
import Form from "../Form/Form"
import "./formsContainer.css"

export default function FormsContainer(props)
{
    //Mapping the total number of forms in the formsInfo.js file. The function delete and add will directly reflect to this js file upon their triggering.
    const formEle = props.info.map(item=>{
        return <Form info={props.info} handle={props.handle} id={item.id} handleDelete={props.handleDelete}/>
    })

    //Triggered when more boxes are to be added. Reflects directly on the info present in the props field.
    function addMoreBoxes(){
        props.addMore();
    }

    //Printing Section
    return(
        <div className="forms-container">

            {/* Prints the mapped form elements. */}
            <div className="text-designer">
                {formEle}
            </div>

            {/* Add more boxes trigger point */}
            <div className="addMoreFormButton">
                <button onClick={addMoreBoxes}>Add Box</button>
            </div>
            <div style={{borderBottom: "1px dotted black"}}></div>
            {/* Taking the URL of the image concerned - Both random and the imported URL. */}
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
                <div className="uploadButtonContainer">
                    <span style={{fontStyle:"bold", fontSize: "20px"}}>or</span>
                    <input className="uploadButton" type="file" name="imageUpload" onChange={props.handleMeme} accept="image/jpeg, image/png, image/jpg"></input>
                </div>

                <div style={{borderBottom: "1px dotted black"}}></div>

            {/* The dimensions of the image uploaded. */}
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
                        defaultValue={400}
                        min={5}
                        onChange={props.handleMeme}
                        id="img-height"
                    />
                </div>
            </div>
        </div>
    );
}