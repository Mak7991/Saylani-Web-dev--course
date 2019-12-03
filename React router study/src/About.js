import React, {Component} from 'react';
import './App.css';
import { Link } from 'react-router-dom';


class About extends Component{

   home(){
       console.log('operation');
       this.props.history.push('./');
   }
   
   contact(){
        this.props.history.push('./Contact/1234')
   }

// .............................................................
  
render(){

    return (
        <div className="About">
            <h1 >About page</h1>

            <button onClick={this.home.bind(this)} className='Send'> Operation </button>
            <button onClick={this.contact.bind(this)} className='Send'> Contact Us </button>
            <br/>
<hr />
            <ul>
                <li><Link to='/Contact/2243'> 2243 </Link></li>
                <li><Link to='/Contact/2244'> 2244 </Link></li>
                <li><Link to='/Contact/2245'> 2245 </Link></li>

            </ul>



 
        </div>
    );
}
}
export default About;
