import memesData from './memesData.js'
import React from 'react'

export default function Meme() {

//  const [memesData, setMemesData] = React.useState()

  const randomImage = () => memesData[Math.floor(Math.random()*memesData.length)].url
/*
  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(data => setMemesData(data.data.memes))
  }, [])

  React.useEffect(() => {
    async function getMemes() {
      const res = await fetch("https://api.imgflip.com/get_memes")
      const data = await res.json()
      setMemesData(data.data.memes)
    }
    getMemes()
  }, [])
*/

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: randomImage()
  })

  const handleChange = (event) => {
    const {name, value} = event.target
    console.log(name, value)
    setMeme(previousMeme => (
        {
          ...previousMeme,
          [name]: name==='randomImage' ? randomImage() : value
        }
      )
    )
  }

  return (
    <>
      <div id="meme-form">
        <div>
          <input type="text" name="topText" placeholder="Top Text" onChange={handleChange} value={meme.topText} />
          <input type="text" name="bottomText" placeholder="Bottom Text" onChange={handleChange} value={meme.bottomText} />
        </div>
        <button name="randomImage" onClick={handleChange}>Get a new image</button>
        <div id="image-holder">
          <h1 id="top-text">{meme.topText}</h1>
          <img src={meme.randomImage} alt="Meme" className="meme-image" />
          <h1 id="bottom-text">{meme.bottomText}</h1>
        </div>
      </div>
    </>
  )
}