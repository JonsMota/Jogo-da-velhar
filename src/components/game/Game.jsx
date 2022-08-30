import styles from './Game.module.css'
import Gameoption from '../gameOption/GameOption'

function Game () {
  return (
    <div className={styles.game}>
      <Gameoption/>
      <Gameoption/>
      <Gameoption/>
      <Gameoption/>
      <Gameoption/>
      <Gameoption/>
      <Gameoption/>
      <Gameoption/>
      <Gameoption/>
    </div>
  )  
}

export default Game