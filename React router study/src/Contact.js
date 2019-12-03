import React, { Component } from 'react';
import './App.css';


class Contact extends Component{


  
    
    render(){
   
        
    let users=  {

    2243: {
        name: 'Arsalan',
            class: 'A'
        },

    2244: { 
        name: 'Tahir',
            class: 'B'
        },

    2245: { 
        name: 'Waseem',
            class: 'C'
        },
    
    }

        let requiredUser = users[this.props.match.params.id]

        return(
            <div className='Contact'>
            <h1 > Contact Us </h1>

            Name ={requiredUser.name}
            <br/>
            Class ={requiredUser.class}

        </div>
        )
    }
}

export default Contact;