import React from 'react'

class ScoreSec extends React.Component {
    constructor(){
        super()
        this.state = {
            score:0,
        }
    }
    render(){
        return(
            <header>
                <div className="text-sec">
                    <p>Rock</p>
                    <p>Paper</p>
                    <p>Scissors</p>
                </div>
                <div className="score-sec">
                    <button className="score-btn">
                        <p>score</p>
                        <h2>{this.state.score}</h2>
                    </button>
                </div>
            </header>
        )
    }
}

export default ScoreSec