import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Emojis = ({emojis}) => {

 const [userSelect, setUserSelect] = useState(null)
    const [computerEmoji, setComputerEmoji] = useState(null)
    const [winner,setWinner] = useState(null)


    const computer = () =>{
        const randomIndex = Math.floor(Math.random() * emojis.length)
        const randomEmoji = emojis[randomIndex]
        setComputerEmoji(randomEmoji);
       
    }

    const handleEmojiClick = e=>{
        console.log(e.target.id)
        const userEmoji = emojis.filter((ele)=>ele.name===e.target.id)
        setUserSelect(userEmoji[0])
        computer()
       
    }


    

  
    const checkWinner = () => {
        if (userSelect && computerEmoji) {
          if (userSelect.beats === computerEmoji.name) {
            setWinner("User wins");
          } else if (computerEmoji.beats === userSelect.name) {
            setWinner("Computer wins");
          } else if (computerEmoji.name === userSelect.name) {
            setWinner("It's a draw");
          } else {
            setWinner(null);
          }
        } else {
          setWinner(null);
        }
      };
      

    useEffect(()=>{
        checkWinner()
    }, [userSelect, computerEmoji])

    
  return (
      <>
          <div className='emoji_container' style={{ "display": "flex", "justifyContent": "space-between" }}>
            
              {
                  emojis.map((e, i) =>
                      <button key={i} className='emoji' id={e.name} style={{ "fontSize": "70px" }}
                          onClick={e => handleEmojiClick(e)}
                      >{e.emoji}</button>
                  )}
          </div>
          <div className="computer">
              {
                  computerEmoji &&
                  <div id={computerEmoji.name} className='computerEmoji' style={{ "fontSize": "70px", "display" : "grid", "placeItems" : "center" }}>{computerEmoji.emoji}</div>
              }
          </div>
          {/* <button id="reset" onClick={resetGame}>Play Again</button> */}
          {winner && <h3 className='winner-title'>{winner}</h3>}
   </>
  )
}

export default Emojis
