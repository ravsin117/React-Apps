import React from "react";
import "../App.css"
import "../memesdata";
import memesdata from "../memesdata";
export default function Meme(){
    
  const[memeurl , setmeme]= React.useState("https://i.imgflip.com/30b1gx.jpg");
    function handlesubmit(){
        let arr = memesdata.data.memes;
        let randNum = Math.floor(Math.random()* arr.length);
        setmeme(arr[randNum].url);
        console.log(arr[randNum].url);

    }
    
    return (
      <main>
        <div className="form">
          <input type="text" 
          placeholder="Header text" className="top-text" 
          />

          <input
            type="text"
            placeholder="Bottom text"
            className="bottom-text"
          />
          <br></br>

          <button className="submit-btn" 
          onClick={handlesubmit}>
            Get new Meme Image 👻</button>
          
          <img src={memeurl} className="memeImg"/>
        </div>
      </main>
    );
}