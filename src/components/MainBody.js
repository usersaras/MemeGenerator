import React from 'react'

import memesData from '../data/memesData';

export default function MainBody() {


     let [meme, setMeme] = React.useState({topText: "", bottomText: "", randomImg: "https://i.imgflip.com/3vzej.jpg"});

    let [allMemeImages, setAllMemeImages] = React.useState(memesData);

    function wasClicked(){
        const memesImage = allMemeImages.data.memes;
        const randomNum = Math.floor(Math.random()*100);
        setMeme(function(oldVal){
            return{
                ...oldVal,
                randomImg: memesImage[randomNum].url
            }
        })

    
    } 

    function handleChange(event){
        console.log(event.target.name)

        var {name, value} = event.target;
        setMeme(function(oV){
            return{
                ...oV,
                [name]: value
            }
        })

        console.log(meme.topText)

    }

    console.log(meme);

    function handleSubmit(event){
        event.preventDefault();
    }

    return (
        <div className="width-wrapper">
            <form className="formdiv" onSubmit={handleSubmit}>  
                <input type="text" name="topText" placeholder="top-text" onChange={handleChange} value={FormData.topText}/> 
                <input type="text" name="bottomText" placeholder="bottom-text" onChange={handleChange} value={FormData.bottomText}/>

                <button type="submit" onClick={wasClicked}>Sub</button>

                <div className="meme">
                {meme.randomImg && <img src={meme.randomImg} />}

                <div className="meme-text">
                    <h2 id="t1">{meme.topText}</h2>
                    <h2 id="t2">{meme.bottomText}</h2>
                </div>
                </div>
            </form>
           
        </div>
    )
}
