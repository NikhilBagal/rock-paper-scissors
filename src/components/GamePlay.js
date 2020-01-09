import React from 'react'

function GamePlay({ match }){
    return(
        <div className="game-play-sec ">
            <div className="user-selected">
                <h1>You Picked</h1>
                <img src={require(`../images/${match.params.id}.svg`)} alt="" className={`${match.params.id} icon`}/>
            </div>
            <div className="decision-sec ">
                <h1>You Lose</h1>
                <button className="play-again-btn">
                    Play again
                </button>
            </div>
            <div className="system-selected">
                <h1>The House Picked</h1>
                <span className="bg-circle"></span>
                <img src={require('../images/icon-scissors.svg')} alt="" className="icon-scissors icon"/>
            </div>
        </div>
    )
}

export default GamePlay