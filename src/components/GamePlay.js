import React,{ useContext,useEffect } from 'react'
import GameResult from './GameResult'
import { scoreContext } from './ScoreContext'

const GamePlay = (props) => {
    const [state,setState] = useContext(scoreContext)
    const id = props.match.params.id
    const arr = ['icon-paper','icon-scissors','icon-rock']
    const filteredArr = arr.filter(item => item !== id)
    const randomNum = Math.floor(Math.random() * 2)
    const img = filteredArr[randomNum]
    var won = ''
    if(id === 'icon-paper' && img === 'icon-rock'){
        won = 'You Won';
       // setState(state+1)
       // updateState(1)
    }else {
        won = 'You Lose'
    }
    return(
        <GameResult userSelected={props.match.params.id} imgSrc={img} isWon={won} />
    )
}

export default GamePlay