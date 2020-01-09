import React from 'react'
import ScoreSec from './ScoreSec'
import GameSec from './GameSec'
import GamePlay from './GamePlay'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class Body extends React.Component {
    constructor() {
        super()
        this.state = {
            score : 0,
        }
    }
    render(){
        return (
            <Router>
                <div className="container">
                    <ScoreSec Score={this.state.score}/>
                    <Switch>
                        <Route path='/' exact component={GameSec} />
                        <Route path="/gameplay/:id" component={GamePlay} /> 
                    </Switch>
                    
                </div>
            </Router>
            
        )
    }
}

export default Body