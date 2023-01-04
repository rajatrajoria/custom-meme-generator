import React from "react";
import "./form.css";

export default function Input(props)
{
    //The function handleChange is triggered when any chnage is made to the React Form Component.
    function handleChange(event)
    {
        props.handle(event.target.name, event.target.value, event.target.type);
    }

    return(
        <div className="design-container">
            <form>
                <fieldset>
                    <label htmlFor={"text"+props.id+"content"}>Enter text {props.id} : </label>
                    <input
                        type="text"
                        placeholder={"Text #"+props.id}
                        name={"text"+props.id+" content"}
                        onChange={handleChange}
                        value={props.info["text"+props.id].content}
                        id={"text"+props.id+"content"}
                    />
                    <br/>

                    <label htmlFor={"text"+props.id+"fontSize"}>Font Size : </label>
                    <input
                        type="number"
                        className="number-input"
                        placeholder="Font Size"
                        min={5}
                        defaultValue={20}
                        id={"text"+props.id+"fontSize"}
                        name={"text"+props.id+" style fontSize"}
                        value={props.info["text"+props.id].fontSize}
                        onChange={handleChange}
                    />

                    <label htmlFor={"text"+props.id+"fontFamily"}>Font Style : </label>
                    <select
                        id={"text"+props.id+"fontFamily"}
                        name={"text"+props.id+" style fontFamily"}
                        onChange={handleChange}
                        className="font-family-input"
                    >   
                        <option value="">--Choose--</option>
                        <option value="Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif" style={{fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif"}}>Impact</option>
                        <option value="Arial, Helvetica, sans-serif" style={{fontFamily: "Arial, Helvetica, sans-serif"}}>Arial</option>
                        <option value="'Indie Flower', cursive;" style={{fontFamily: "'Indie Flower', cursive;"}}>Indie Flower</option>
                        <option value="'Times New Roman', Times, serif" style={{fontFamily: "'Times New Roman', Times, serif"}}>Times New Roman</option>
                        <option value="Courier New', Courier, monospace" style={{fontFamily: "Courier New', Courier, monospace"}}>Courier New</option>
                        <option value="Courier, monospace" style={{fontFamily: "Courier, monospace"}}>Courier</option>
                        <option value="Verdana, Geneva, Tahoma, sans-serif" style={{fontFamily: "Verdana, Geneva, Tahoma, sans-serif"}}>Verdana</option>
                        <option value="Georgia, 'Times New Roman', Times, serif" style={{fontFamily: "Georgia, 'Times New Roman', Times, serif"}}>Georgia</option>
                        <option value="'Archivo Black', sans-serif;" style={{fontFamily: "'Archivo Black', sans-serif;"}}>Archivo Black</option>
                        <option value="'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" style={{fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif"}}>Trebuchlet MS</option>
                        <option value="'Lekton', sans-serif" style={{fontFamily: "'Lekton', sans-serif"}}>Lekton</option>
                        <option value="'Poppins', sans-serif" style={{fontFamily: "'Poppins', sans-serif"}}>Poppins</option>
                        <option value="'Space Mono', monospace" style={{fontFamily: "'Space Mono', monospace"}}>Space Mono</option>
                    </select><br/>


                    <label htmlFor={"text"+props.id+"color"}>Font-Color : </label>
                    <input type="color" id={"text"+props.id+"color"} name={"text"+props.id+" style color"} value={props.info["text"+props.id].style.color} onChange={handleChange}></input>


                    <label htmlFor={"text"+props.id+"textAlign"}>Align : </label>
                    <select
                        id={"text"+props.id+"textAlign"}
                        name={"text"+props.id+" style textAlign"}
                        onChange={handleChange}
                    >
                        <option value="left">Left</option>
                        <option value="center">Center</option>
                        <option value="right">Right</option>
                    </select><br/>


                    <label htmlFor={"text"+props.id+"top"}>T/D: </label>
                    <input
                        type="number"
                        step={3}
                        className="number-input"
                        placeholder="Top"
                        min={0}
                        defaultValue={0}
                        id={"text"+props.id+"top"}
                        name={"text"+props.id+" style top"}
                        value={props.info["text"+props.id].top}
                        onChange={handleChange}
                    />

                    <label htmlFor={"text"+props.id+"left"}> L/R: </label>
                    <input
                        type="number"
                        step={3}
                        className="number-input"
                        placeholder="Left"
                        min={0}
                        defaultValue={0}
                        id={"text"+props.id+"left"}
                        name={"text"+props.id+" style left"}
                        value={props.info["text"+props.id].left}
                        onChange={handleChange}
                    />

                    <label htmlFor={"text"+props.id+"left"}> Width: </label>
                    <input
                        type="number"
                        step={3}
                        className="number-input"
                        placeholder="Width"
                        min={0}
                        defaultValue={100}
                        id={"text"+props.id+"width"}
                        name={"text"+props.id+" style width"}
                        value={props.info["text"+props.id].paraWidth}
                        onChange={handleChange}
                        style={{textAlign:"left", width: "50px"}}
                    /><br/>

                    <input 
                        type="checkbox" 
                        id="isBold" 
                        className="input-type-checkbox"
                        checked={props.info["text"+props.id].style.isBold}
                        onChange={handleChange}
                        name={"text"+props.id+" style fontWeight isBold"}
                    />
                    <label htmlFor="isBold" style={{fontWeight: "bold"}}>BOLD</label>

                    <input 
                        type="checkbox" 
                        id="isItalic" 
                        className="input-type-checkbox"
                        checked={props.info["text"+props.id].style.isItalic}
                        onChange={handleChange}
                        name={"text"+props.id+" style fontStyle isItalic"}
                    />
                    <label htmlFor="isItalic" style={{fontStyle: "italic"}}>Italic</label><br/>

                    {/* Text Shadow Color and Text Shadow Blur Radius ==> Text Shadow*/}
                    <label htmlFor={"text"+props.id+"textShadow"}> Blur Rad : </label>
                    <input
                        type="number"
                        className="number-input"
                        placeholder="0"
                        min={0}
                        defaultValue={0}
                        id={"text"+props.id+"shadowBlur"}
                        name={"text"+props.id+" style shadowBlur"}
                        value={props.info["text"+props.id].shadowBlur}
                        onChange={handleChange}
                    />

                    <label htmlFor={"text"+props.id+"textShadow"}> Blur Color : </label>
                    <input type="color" id={"text"+props.id+"shadowColor"} name={"text"+props.id+" style shadowColor"} value={props.info["text"+props.id].style.shadowColor} onChange={handleChange}></input>


                </fieldset>
            </form>
        </div>
    );
}