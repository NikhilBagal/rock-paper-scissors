import React, { useContext } from 'react'
import { scoreContext } from './ScoreContext'

function ScoreSec(props) {
    const [state,setState] = useContext(scoreContext)
    console.log(state)
    return(
        <header>
            <div className="text-sec">
                <img src={require('../images/logo.svg')} alt=""/>
            </div>
            <div className="score-sec">
                <p>score</p>
                <h2>{state}</h2>
            </div>
        </header>
    )
}


export default ScoreSec