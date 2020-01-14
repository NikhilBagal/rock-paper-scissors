import React,{ useContext,useEffect,useRef } from 'react'
import GameResult from './GameResult'
import { scoreContext } from './ScoreContext'

const GamePlay = (props) => {
    const [,setState] = useContext(scoreContext)
    var id = props.match.params.id
    var arr = ['icon-paper','icon-scissors','icon-rock']
    var filteredArr = arr.filter(item => item !== id)
    var randomNum = Math.floor(Math.random() * 2)
    const img = useRef(filteredArr[randomNum])
    var won = useRef()
    useEffect(() => {
        if(id === 'icon-paper' && img.current === 'icon-rock'){
            won.current = 'You Won';
            setState(1)
        }else if(id === 'icon-paper' && img.current === 'icon-scissors') {
            won.current = 'You Lose';
            setState(0)
        }else if(id === 'icon-rock' && img.current === 'icon-scissors'){
            won.current = 'You Won';
            setState(1)
        }else if(id === 'icon-rock' && img.current === 'icon-paper'){
            won.current = 'You Lose';
            setState(0)
        }else if(id === 'icon-scissors' && img.current === 'icon-paper'){
            won.current = 'You Won';
            setState(1)
        }else if(id === 'icon-scissors' && img.current === 'icon-rock'){
            won.current = 'You Lose';
            setState(0)
        }
    },[])
    return(
        <GameResult userSelected={props.match.params.id} imgSrc={img.current} isWon={won.current} />
    )
}

export default GamePlay