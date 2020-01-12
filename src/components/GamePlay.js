import React,{ useContext,useEffect } from 'react'
import GameResult from './GameResult'
import { scoreContext } from './ScoreContext'

const GamePlay = (props) => {
    console.log(id,img)
    const [state,setState] = useContext(scoreContext)
    var id = props.match.params.id
    var arr = ['icon-paper','icon-scissors','icon-rock']
    var filteredArr = arr.filter(item => item !== id)
    console.log(filteredArr)
    
    var randomNum = Math.floor(Math.random() * 2)
    console.log(filteredArr[randomNum])
    var img = filteredArr[randomNum]
    var won = ''
    console.log(id,img)
    if(id === 'icon-paper' && img === 'icon-rock'){
        won = 'You Won';
        console.log(id,img)
        console.log(id === 'icon-paper' && img === 'icon-rock')
       // setState()
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