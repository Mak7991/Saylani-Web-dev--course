import React, { Component } from 'react';

class Counter extends Component{
    
    
    render(){
        return(
            <div>
                <h1>My Counter App</h1>
                <button onClick={this.props.increment}> + </button>
                
                <span>{this.props.counter }</span>

                <button onClick={this.props.decrement}> - </button>
            </div>
        )

    }



}
export default Counter;


// flex in react native set default to coloumns 

// andriod studio steps
// touchable opacity is use as button in react native
// native study tutorial