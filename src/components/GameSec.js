import React from 'react'


function GameSec(){
    return(
        <div className="wrapper">
            <div className="game-sec">
                <img src={require('../images/bg-triangle.svg')} alt=""/>
                <div className="img-sec">
                    <div className="paper icon">
                        <img src={require('../images/icon-paper.svg')} alt=""/>
                    </div>
                    {/* <img src={require('../images/bg-triangle.svg')} alt=""/> */}
                    <div className="scissors icon">
                        <img src={require('../images/icon-scissors.svg')} alt=""/>
                    </div>
                    <div className="rock icon">
                        <img src={require('../images/icon-rock.svg') } alt=""/>
                    </div>
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