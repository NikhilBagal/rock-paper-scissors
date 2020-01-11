import React from 'react'

function GamePlay(props){
    const id = props.match.params.id
    const arr = ['icon-paper','icon-scissors','icon-rock']
    const filteredArr = arr.filter(item => item !== id)
    const randomNum = Math.floor(Math.random() * 2)
    const img = filteredArr[randomNum]
    
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
    return(
        <div className="game-play-sec ">
            <div className="user-selected">
                <h1>You Picked</h1>
                <img src={require(`../images/${props.match.params.id}.svg`)} alt="" className={`${props.match.params.id} icon`}/>
            </div>
            <div className="decision-sec ">
                <h1>You</h1>
                <button className="play-again-btn">
                    Play again
                </button>
            </div>
            <div className="system-selected">
                <h1>The House Picked</h1>
    { /* <span className="bg-circle"></span> */}
              {  <img src={require(`../images/${img}.svg`)} alt="" className={`${img} icon`}/> }
            </div>
        </div>
    )
}

export default GamePlay