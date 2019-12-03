import React, { Component } from 'react';

class Logger extends Component{

    constructor(props){
        super(props);
        console.log('constructer running')

    }
    
    componentWillMount() {
        console.log('next props')
        
    }

    componentDidMount() {
        console.log('next props')
        
    }
    
    
    
    render(){
        console.log(this.props.time);
        return(
            <h1>{this.props.time}</h1>
        )
    }
}

export default Logger;