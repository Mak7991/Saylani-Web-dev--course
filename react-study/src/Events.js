import React, { Component } from 'react';
import Counter from "./Counters"

class Event extends Component{

    constructor(props){
        super(props);
            this.state = {
                counter: 0
            }

            this.incrementNumber = this.incrementNumber.bind(this);
            this.decrementNumber = this.decrementNumber.bind(this); 

        
    }

  

    // clickMe(){
    //     console.log('Click is triggerd');
    // }

    incrementNumber(){

        // console.log('increment')

        if (this.state.counter < 11){
            this.setState({counter: this.state.counter +1})
        }
        
        else{
            console.log('already reached maximum num')
        }
    }

    decrementNumber(){

        // console.log('decrement')
        if (this.state.counter === 0){
            console.log('already reached minimum num')
        }

       else{
            this.setState({
                counter: this.state.counter - 1
            })

       }
    }

    render(){
        return(
            <div>
                {/* <h1>Event handler</h1>
                <button onClick={this.incrementNumber}> + </button>
                <span>{this.state.counter} </span> */}

                <Counter counter={this.state.counter} increment={this.incrementNumber} decrement={this.decrementNumber} />


            </div>

        )
    }

}
export default Event

