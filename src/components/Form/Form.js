import React from "react";
import "./form.css";

export default function Input(props)
{
    //The function handleChange is triggered when any change is made to the React Form Component. The function is held in the upper components for sake of truthfulness.
    function handleChange(event){
        props.handle(event.target.name, event.target.value, event.target.type);
    }

    //This function is called when the delete button is pressed. Again handleDelete function has descended from the higher level components.
    function del(event){
        props.handleDelete(event.target.name);
    }

    //This is basically the display section of the components. Contains the different components of the form inputs.
    return(
        <div className="design-container">
            <form>
                <fieldset><legend>Box {props.id+1} - Draggable</legend>

                    {/* Text Box input */}
                    <label htmlFor={props.id+"content"}>Enter text {props.id+1} : </label>
                    <input
                        type="text"
                        className="text-input"
                        placeholder={"Text #"+parseInt(props.id+1)}
                        name={props.id+" content"}
                        autoComplete="off"
                        onChange={handleChange}
                        value={props.info[props.id].content}
                        id={props.id+"content"}
                    />
                    <br/>

                    {/* Font Size input */}
                    <label htmlFor={props.id+"fontSize"}>Font Size : </label>
                    <input
                        type="number"
                        className="font-size-input"
                        placeholder="Font Size"
                        min={5}
                        defaultValue={20}
                        id={props.id+"fontSize"}
                        name={props.id+" style fontSize"}
                        value={props.info[props.id].fontSize}
                        onChange={handleChange}
                    />

                    {/* Font Family input */}
                    <label htmlFor={props.id+"fontFamily"}>Font Family : </label>
                    <select
                        id={props.id+"fontFamily"}
                        name={props.id+" style fontFamily"}
                        onChange={handleChange}
                        className="font-family-input"
                    >   
                        <option value="">--Choose--</option>
                        <option value="Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif" style={{fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif"}}>Impact</option>
                        <option value="Arial, Helvetica, sans-serif" style={{fontFamily: "Arial, Helvetica, sans-serif"}}>Arial</option>
                        <option value="'Indie Flower', cursive" style={{fontFamily: "'Indie Flower', cursive"}}>Indie Flower</option>
                        <option value="'Rubik Bubbles', cursive" style={{fontFamily: "'Rubik Bubbles', cursive"}}>Rubik</option>
                        <option value="'Times New Roman', Times, serif" style={{fontFamily: "'Times New Roman', Times, serif"}}>Times New Roman</option>
                        <option value="'Courier New', Courier, monospace" style={{fontFamily: "'Courier New', Courier, monospace"}}>Courier New</option>
                        <option value="cursive" style={{fontFamily: "cursive"}}>Cursive</option>
                        <option value="Verdana, Geneva, Tahoma, sans-serif" style={{fontFamily: "Verdana, Geneva, Tahoma, sans-serif"}}>Verdana</option>
                        <option value="Georgia, 'Times New Roman', Times, serif" style={{fontFamily: "Georgia, 'Times New Roman', Times, serif"}}>Georgia</option>
                        <option value="'Archivo Black', sans-serif" style={{fontFamily: "'Archivo Black', sans-serif"}}>Archivo Black</option>
                        <option value="'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" style={{fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif"}}>Trebuchlet MS</option>
                        <option value="'Lekton', sans-serif" style={{fontFamily: "'Lekton', sans-serif"}}>Lekton</option>
                        <option value="'Poppins', sans-serif" style={{fontFamily: "'Poppins', sans-serif"}}>Poppins</option>
                        <option value="'Space Mono', monospace" style={{fontFamily: "'Space Mono', monospace"}}>Space Mono</option>
                    </select><br/>


                    {/* Font Color Input */}
                    <label htmlFor={props.id+"color"}>Font-Color : </label>
                    <input type="color" className="font-color-input" id={props.id+"color"} name={props.id+" style color"} value={props.info[props.id].style.color} onChange={handleChange}></input>


                    {/* Font Alignment Input */}
                    <label htmlFor={props.id+"textAlign"}>Align : </label>
                    <select
                        id={props.id+"textAlign"}
                        name={props.id+" style textAlign"}
                        onChange={handleChange}
                    >
                        <option value="left">Left</option>
                        <option value="center">Center</option>
                        <option value="right">Right</option>
                    </select><br/>


                    {/* Top-Bottom input */}
                    <label htmlFor={props.id+"top"}>T/D: </label>
                    <input
                        type="number"
                        step={3}
                        className="tblr-input"
                        placeholder="Top"
                        min={0}
                        defaultValue={0}
                        id={props.id+"top"}
                        name={props.id+" style top"}
                        value={props.info[props.id].top}
                        onChange={handleChange}
                    />


                    {/* Left Right Input */}
                    <label htmlFor={props.id+"left"}> L/R: </label>
                    <input
                        type="number"
                        step={3}
                        className="tblr-input"
                        placeholder="Left"
                        min={0}
                        defaultValue={0}
                        id={props.id+"left"}
                        name={props.id+" style left"}
                        value={props.info[props.id].left}
                        onChange={handleChange}
                    />


                    {/* Width Input */}
                    <label htmlFor={props.id+"width"}> Width: </label>
                    <input
                        type="number"
                        step={3}
                        className="tblr-input-width"
                        placeholder="Width"
                        min={0}
                        defaultValue={100}
                        id={props.id+"width"}
                        name={props.id+" style width"}
                        value={props.info[props.id].paraWidth}
                        onChange={handleChange}
                        style={{textAlign:"left", width: "50px"}}
                    /><br/>


                    {/* Bold input checkbox */}
                    <input 
                        type="checkbox" 
                        id= {props.id + "isBold"}
                        className="input-type-checkbox"
                        checked={props.info[props.id].style.isBold}
                        onChange={handleChange}
                        name={props.id+" style fontWeight isBold"}
                    />
                    <label htmlFor={props.id + "isBold"} id="boldlabel" style={{fontWeight: "bold"}}>BOLD</label>


                    {/* Italic Checkbox */}
                    <input 
                        type="checkbox" 
                        id= {props.id + "isItalic"}
                        className="input-type-checkbox"
                        checked={props.info[props.id].style.isItalic}
                        onChange={handleChange}
                        name={props.id+" style fontStyle isItalic"}
                    />
                    <label htmlFor={props.id + "isItalic"} id="italiclabel" style={{fontStyle: "italic"}}>Italic</label>


                    {/* Letter Spacing input */}
                    <label htmlFor={props.id+"letterSpacing"} style={{marginLeft:"30px", marginBottom: "10px"}}>Spacing: </label>
                    <input
                        type="number"
                        step={0.1}
                        className="letter-spacing"
                        placeholder="Spacing"
                        min={0}
                        max={20}
                        defaultValue={0}
                        id={props.id+"letterSpacing"}
                        name={props.id+" style letterSpacing"}
                        value={props.info[props.id].letterSpacing}
                        onChange={handleChange}
                        style={{textAlign:"left", width: "50px"}}
                    /><br/>

                    {/* Slide Ranger input */}
                    <div className="slidecontainer">
                        <label htmlFor={props.id+"opacity"} style={{marginRight:"5px"}}>Opacity: </label>
                        <input type="range" onChange={handleChange} step={0.01} classname="opacity-slider" min={0} max={1} name={props.id+" style opacity"} defaultValue={1} value={props.info[props.id].opacity} class="slider" id={props.id+"opacity"}></input><br/>
                    </div>


                    {/* Text Shadow Color and Text Shadow Blur Radius ==> Text Shadow */}
                    <label htmlFor={props.id+"shadowBlur"}> Blur Rad : </label>
                    <input
                        type="number"
                        className="shadowblur-input"
                        placeholder="0"
                        min={0}
                        defaultValue={0}
                        id={props.id+"shadowBlur"}
                        name={props.id+" style shadowBlur"}
                        value={props.info[props.id].shadowBlur}
                        onChange={handleChange}
                    />

                    {/* Blur Color input type color */}
                    <label htmlFor={props.id+"shadowColor"}> Blur Color : </label>
                    <input type="color" id={props.id+"shadowColor"} className="shadowcolor-input" name={props.id+" style shadowColor"} value={props.info[props.id].style.shadowColor} onChange={handleChange}></input><br/>

                    {/* Delete Button */}
                    <button type="button" name={props.id} onClick={del}>Delete</button>
                </fieldset>
            </form>
        </div>
    );
}