import React from 'react'
class App extends React.Component{
    constructor(props){
        this.state = {
            lamnn:'ahihi'
        }
    }
    handle = ()=>{
        this.setState({
            lamnn:'jsjjs'
        })
    }
    
    render(){
        return(
            <div>
                <h1>{this.state.lamnn}</h1>
                <h1>{this.props.lam}</h1>
                <button onClick={this.handle}>click</button>
            </div>
        )
    }
}
export default App