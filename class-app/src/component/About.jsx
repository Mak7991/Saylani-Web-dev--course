import React from 'react';

const About = (props) => {
    console.log(props);
  return (
    <div>
      This is About page
      <br/>
      <button onClick={() =>{props.history.push ('/')}} >Goto home</button>
          <button onClick={() => { props.history.push('/contact') }} >Goto Contact</button>
    </div>
  );
}

export default About;
