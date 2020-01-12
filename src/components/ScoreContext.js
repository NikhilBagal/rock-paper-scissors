import React,{ useState,createContext } from 'react'


export const scoreContext = createContext();

/*export const Score = (props) => {
    const [state,setState] = useState(0)
    
    return(
        <scoreContext.Provider value={[state,setState]}>
            {props.children}
        </scoreContext.Provider>
    )   
}
*/
export class Score extends React.Component{
    constructor(){
        super()
        this.state = {
            score:0
        }
    }
    updateState = () => {
        this.setState({
            score: this.state.score + 1
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