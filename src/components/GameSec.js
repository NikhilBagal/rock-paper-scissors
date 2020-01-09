import React from 'react'
import { Link } from 'react-router-dom'

function GameSec(){
    return(
        <div className="wrapper">
            <div className="game-sec">
                <img src={require('../images/bg-triangle.svg')} alt="" id="bg-img"/>
                <div className="img-sec">
                    <Link to="/gameplay/icon-paper">
                        <div className="paper icon">
                            <img src={require('../images/icon-paper.svg')} alt=""/>
                        </div>
                    </Link>
                    <Link to="/gameplay/icon-scissors">
                        <div className="scissors icon">                        
                            <img src={require('../images/icon-scissors.svg')} alt=""/>                                        
                        </div>
                    </Link>
                    <Link to="/gameplay/icon-rock">
                        <div className="rock icon">
                            <img src={require('../images/icon-rock.svg') } alt=""/>
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