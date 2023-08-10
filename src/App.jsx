import React from 'react'
import { useState } from 'react'
import Emojis from './components/Emojis'

const App = () => {
  const SELECTIONS = [
    {
      name: 'rock',
      emoji: '✊',
      beats: 'scissors'
    },
    {
      name: 'paper',
      emoji: '✋',
      beats: 'rock'
    },
    {
      name: 'scissors',
      emoji: '✌',
      beats: 'paper'
    }
  ]

  // const [userSelect, setUserSelect] = useState(null)

  return (
    <div className='app'>
      <h1>Rock Paper Scissors</h1>
      
      {/* <Emojis emojis={SELECTIONS} setUserSelect={setUserSelect} userSelect={userSelect} /> */}

      <Emojis emojis={SELECTIONS}  />
      
    </div>
  )
}

export default App
