import React from 'react'
import { Link } from 'react-router-dom'


function GameSec(props){
    function handler(){
        var imgSelector = document.querySelector('.rule-img-sec')
        imgSelector.classList.add('active')
    }
    function clickHandler(){
        var imgSelector = document.querySelector('.rule-img-sec')
        imgSelector.classList.remove('active')
    }
    return(
        <div className="wrapper">
            <div className="game-sec">
                <img src={require('../images/bg-triangle.svg')} alt="" id="bg-img"/>
                <div className="img-sec">
                    <Link to="/gameplay/icon-paper">
                        <div className="paper icon" >
                            <img src={require('../images/icon-paper.svg')} alt="" />
                        </div>
                    </Link>
                    <Link to="/gameplay/icon-scissors" >
                        <div className="scissors icon" >                        
                            <img src={require('../images/icon-scissors.svg')} alt="" />                                        
                        </div>
                    </Link>
                    <Link to="/gameplay/icon-rock">
                        <div className="rock icon" >
                            <img src={require('../images/icon-rock.svg') } alt="" />
                        </div>
                    </Link>
                    
                </div>
            </div>
            <div className="rule-sec"> 
                <button className="rule-btn" onClick={handler}>
                    Rules
                </button>
            </div>
            <div className='rule-img-sec'>
                <h3 className="rule-head">Rules
                    <button className="cancel-btn" onClick={clickHandler}></button>
                </h3>
                <img src={require('../images/image-rules.svg')} alt="" className="rule-img" />
                
            </div>
            
        </div>
        
    )
}

export default GameSec