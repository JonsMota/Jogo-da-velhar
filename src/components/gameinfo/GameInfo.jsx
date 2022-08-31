import Icon from '../icon/Icon'
import styles from './GameInfo.module.css'
import Button from '../button/Button'

function GameInfo ({ currentPlayer, winner, onReset }) {

  const shoudEnableButton = () => {
    if (winner !== 0) return true
  }

  return(
    <div className={styles.gameInfo}>
      {
        winner === 0 &&
          <>
            <h4>Próximo a jogar:</h4>
            {
              currentPlayer === 1 && <Icon iconName="circle" />
            }
            {
              currentPlayer === -1 && <Icon iconName="x" />
            }
          </>
      }  
      {
        winner !== 0 &&
          <>
            <h4>Fim de jogo! campeão:</h4>
            {
              winner === 1 && <Icon iconName="circle" />
            }
            {
              winner === -1 && <Icon iconName="x" />
            }
          </> 
      }
      <Button 
        onClick={onReset}
        disabled={!shoudEnableButton()}
      >
        Reiniciar
      </Button>
    </div>
  )  
}

export default GameInfo