import React from 'react'

function ScoreSec(props) {
    return(
        <header>
            <div className="text-sec">
                <img src={require('../images/logo.svg')} alt=""/>
            </div>
            <div className="score-sec">
                <p>score</p>
                <h2>{props.Score}</h2>
            </div>
        </header>
    )
}


export default ScoreSec