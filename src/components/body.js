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
            systemSelected : '',
        }
    }
   
    handleClick = (e) => {
        const id = e.target.id
        const arr = ['icon-paper','icon-scissors','icon-rock']
        const filteredArr = arr.filter(item => item !== id)
       /* this.setState({
            systemSelected: [...this.state.systemSelected,...filteredArr]
        })*/
        const randomNum = Math.floor(Math.random() * 2)
        this.setState({
           systemSelected: filteredArr[randomNum]
       })
      /*  const selector = document.querySelector('.game-play-sec')
        const decisionSelector = document.querySelector('.decision-sec')
        const headSelector = document.querySelector('.decision-sec h1')*/
       /* if(id === 'icon-paper' && this.state.systemSelected === 'icon-rock'){
           /* selector.classList.add('active')
            decisionSelector.classList.add('active')
            headSelector.innerHTML = 'You Won'*/
          /*  this.setState({
                score : this.state.score + 1
            })
       }*/
    }
    updateState = () => {
        this.setState({
            score: this.state.score + 1
        })
    }
    
    render(){
        
        return (
            <Router>
                <div className="container">
                    <ScoreSec Score={this.state.score}/>
                    <Switch>
                        <Route path='/' exact render={(props) => <GameSec {...props} handler={this.handleClick}/>}/>
                        <Route path="/gameplay/:id"  render={(props) => <GamePlay {...props} update={this.updateState}/>} /> 
                    </Switch>
                    
                </div>
            </Router>
            
        )
    }
}

export default Body