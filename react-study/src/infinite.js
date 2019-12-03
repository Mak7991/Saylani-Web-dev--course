import React, { Component } from 'react';

class Infinte extends Component{
    constructor(props){
        super(props);
        this.state={
            iceCapsAreMelting: 'true',

        }
    }

    // Set a condition to true
   
    


// Initiate infinite loop
while (Infinte) { 
    let polarBears = 5;
    // const iceCapsAreMelting = true;
    console.log(`There are ${polarBears} polar bears.`);
    polarBears--;
    // Terminate infinite loop when following condition is true
    if (polarBears === 0) {
        console.log("There are no polar bears left.");
        
    }
}


    render(){
        return(
            <div>
                <button onClick={this.Infinte} >start infinite button</button>
            </div>
        )
    }
}
export default Infinte;