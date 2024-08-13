import React from 'react'
import './GameOver.css'

const GameOver = ({ retry, score }) => {
  return (
    <div className='gameOver'>
      <h1>Fim do jogo!</h1>
      <h2>A sua pontuação foi: <span>{score}</span></h2>
      <button onClick={retry}>Resetar jogo</button>
    </div>
  )
}

export default GameOver;
