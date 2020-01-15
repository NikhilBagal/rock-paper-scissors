import React from 'react'
import ScoreSec from './ScoreSec'
import GameSec from './GameSec'
import GamePlay from './GamePlay'
import {BrowserRouter as Router, Switch, Route, HashRouter} from 'react-router-dom';
import { Score } from './ScoreContext'

function Body() {    
        return (
            <Score>
                <HashRouter basename="/">
                    <div className="container">
                        <ScoreSec />
                        <Switch>
                            <Route path='/' exact render={(props) => <GameSec {...props} />}/>
                            <Route path="/gameplay/:id"  render={(props) => <GamePlay {...props} />} /> 
                        </Switch>
                    
                    </div>
                </HashRouter>
            </Score>
            
            
        )
    }

export default Body