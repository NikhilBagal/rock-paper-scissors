import React from 'react'
import { Link } from 'react-router-dom'

function GameResult(props){
    return(
        <div className="game-play-sec ">
            <div className="user-selected">
                <h1>You Picked</h1>
                <img src={require(`../images/${props.userSelected}.svg`)} alt="" className={`${props.userSelected} icon`}/>
            </div>
            <div className="decision-sec ">
                <h1>{props.isWon}</h1>
                <Link to="/home" >
                    <button className="play-again-btn">
                        Play again
                    </button>
                </Link>               
            </div>
            <div className="system-selected">
                <h1>The House Picked</h1>
    { /* <span className="bg-circle"></span> */}
              {  <img src={require(`../images/${props.imgSrc}.svg`)} alt="" className={`${props.imgSrc} icon`}/> }
            </div>
        </div>
    )
}

export default GameResult