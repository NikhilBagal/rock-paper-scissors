import React from 'react'
import { Link } from 'react-router-dom'


function GameSec(props){
    return(
        <div className="wrapper">
            <div className="game-sec">
                <img src={require('../images/bg-triangle.svg')} alt="" id="bg-img"/>
                <div className="img-sec">
                    <Link to="/gameplay/icon-paper">
                        <div className="paper icon" id="icon-paper" onClick={props.handler}>
                            <img src={require('../images/icon-paper.svg')} alt="" id="icon-paper" onClick={props.handler}/>
                        </div>
                    </Link>
                    <Link to="/gameplay/icon-scissors" >
                        <div className="scissors icon" id="icon-scissors" onClick={props.handler}>                        
                            <img src={require('../images/icon-scissors.svg')} alt="" id="icon-scissors" onClick={props.handler}/>                                        
                        </div>
                    </Link>
                    <Link to="/gameplay/icon-rock">
                        <div className="rock icon" id="icon-rock" onClick={props.handler}>
                            <img src={require('../images/icon-rock.svg') } alt="" id="icon-rock" onClick={props.handler}/>
                        </div>
                    </Link>
                    
                </div>
            </div>
            <div className="rule-sec">
                <button className="rule-btn">
                    Rules
                </button>
            </div>
        </div>
        
    )
}

export default GameSec