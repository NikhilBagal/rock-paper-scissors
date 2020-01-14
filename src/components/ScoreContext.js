import React,{ createContext } from 'react'


export const scoreContext = createContext();

export class Score extends React.Component{
    constructor(){
        super()
        this.state = {
            score:0
        }
    }
    updateState = (n) => {
        this.setState({
            score: this.state.score + n
        })
    }
    render(){
        return(
            <scoreContext.Provider value={[this.state.score,this.updateState]}>
                {this.props.children}
            </scoreContext.Provider>
        ) 
    }
}