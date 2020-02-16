import React, { Component } from 'react';
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      items:[],
      isloaded: false, 
    }
  }

  componentDidMount(){

    fetch('https://jsonplaceholder.typicode.com/users')
    
    .then( res => res.json())
    .then( json => { 
      this.setState({
        isloaded: true,
        items: json,
      })
    }); 

  }

  render(){
    var { isloaded, items} = this.state;

    if(!isloaded){
      return <div>loading...</div>;
    }
    else{

    return(
      <div className="App">

        <ul>
          {items.map( item => (

              <li key={item.id}>
               Nmae: {item.name} | Email: {item.email}

              </li>
          ))};
            
        </ul>

      </div> 
    );

   }

  }
}

export default App;
