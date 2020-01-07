import React from 'react'
import ScoreSec from './ScoreSec'
import GameSec from './GameSec'

class Body extends React.Component {
    constructor() {
        super()
        this.state = {
            score : 0,
        }
    }
    render(){
        return (
            <div className="container">
                <ScoreSec Score={this.state.score}/>
                <GameSec />
            </div>
        )
    }
}

export default Body