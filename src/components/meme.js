import React from "react";
import "../App.css"

export default function Meme(){
    
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    imgurl: "http://i.imgflip.com/1bij.jpg",
  });
  const[allmemeimg,setmemeimg]= React.useState([]);
  
  React.useEffect(()=>{
      
    fetch("https://api.imgflip.com/get_memes")
    .then(res=>res.json())
    .then(data=>setmemeimg(data.data.memes))
  },[])

    function getmemeimg(){
        
        let randNum = Math.floor(Math.random()* allmemeimg.length);
        const url = allmemeimg[randNum].url
        setMeme(meme=>{
          return {...meme , 
              imgurl:url
          }
        });
        
    }
    function handlechange(event){
        const {name,value} = event.target;
        setMeme(prev=>{
          return{
            ...prev,
            [name]:value
          }
        })
    }
    

    
    return (
      <main>
        <div className="form">
          <input
            type="text"
            name="topText"
            onChange={handlechange}
            value={meme.topText}
            placeholder="Header text"
            className="top-text"
          />

          <input
            type="text"
            name="bottomText"
            onChange={handlechange}
            value={meme.bottomText}
            placeholder="Bottom text"
            className="bottom-text"
          />
          <br></br>

          <button className="submit-btn" onClick={getmemeimg}>
            Get new Meme Image 👻
          </button>

          <img src={meme.imgurl} className="memeImg" />
          <h2 className="meme--text">{meme.topText}</h2>
          <h2 className="meme--text">{meme.bottomText}</h2>
        </div>
      </main>
    );
}