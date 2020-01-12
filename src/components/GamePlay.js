import React from 'react'
import GameResult from './GameResult'

class GamePlay extends React.Component {
    constructor(){
        super()
        this.state = {
            
        }
        
    }
    
    
   /* if(id === 'icon-paper' && img === 'icon-rock'){
        const selector = document.querySelector('.game-play-sec')
        const decisionSelector = document.querySelector('.decision-sec')
        const headSelector = document.querySelector('.decision-sec h1')
         selector.classList.add('active')
         decisionSelector.classList.add('active')
         headSelector.innerHTML = 'You Won'
        /* this.setState({
             score : this.state.score + 1
         })
    }*/
   // console.log(props.systemImg)
   
   render(){
    const id = this.props.match.params.id
    const arr = ['icon-paper','icon-scissors','icon-rock']
    const filteredArr = arr.filter(item => item !== id)
    const randomNum = Math.floor(Math.random() * 2)
    const img = filteredArr[randomNum]
    var won = ''
    if(id === 'icon-paper' && img === 'icon-rock'){
        won = 'You Won'
       // this.props.update()
    }
    return(
       <GameResult userSelected={this.props.match.params.id} imgSrc={img} isWon={won} />
       )
   } 
}

export default GamePlay