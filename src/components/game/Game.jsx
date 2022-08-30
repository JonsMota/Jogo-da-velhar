import styles from './Game.module.css'
import Gameoption from '../gameOption/GameOption'
import { useState } from 'react'

function Game () {
  const [gameState, setGameState ] = useState(Array(9).fill(0))
  return (
    <div className={styles.game}>
      {
        gameState.map((value, pos) => 
          <Gameoption
            key={`game-option-pos-${pos}`
            }
            status = {value}
          />
        )
      }  
    </div>
  )  
}

export default Game