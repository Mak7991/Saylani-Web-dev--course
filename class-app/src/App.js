// import React, { useState } from 'react';
// import Signin from "./component/Signin/Signin";
// import Signup from "./component/Signup/Signup";
// import './App.css';
// // import { isPipelineTopicExpression, isJSXSpreadChild } from '@babel/types';

// function App() {
//   const [isLogin, setIsLogin] = useState(true);
//   return (
//     <div className="App">
//       <header className="App-header">
//         <div className="header-btn" onClick={() => { setIsLogin(true) }}>LOGIN</div>
//         <div className="header-btn" onClick={() => { setIsLogin(false) }}>SIGNUP</div>
//       </header>
//       <section>
//         {isLogin ? <Signin /> : <Signup />}
//       </section>
//     </div>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter , Route, Link ,Redirect} from 'react-router-dom';

import About from './component/About';
import Contact from './component/Contact';
import Details from './component/Details';
import Home from './component/Home';
import './App.css';
// import Navigation from './component/Navigation';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Link className="link1" to="/">Home</Link>
        <Link className="link2" to="/contact">Contact</Link>
        <Link className="link3" to="/about">About</Link>
        <hr/>

        {/* <Navigation /> */}
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/detail/:id" component={Details} />
        { <Redirect to='/' /> }
      </div>
    </BrowserRouter>
  );
}
export default App;







// ............class 5-10-19 topics........................... 


// * install react router 'npm install react-router-dom'
// * browser router need single child
// * "/" hoga tu basic comp chale ga
// * import karye ge jab koi naya comp use kare ge
// * About router 
// * router se page refresh nai hota wahi rhta or is se server pe load nai parta
// *import { BrowserRouter , Route, Link} from 'react-router-dom' ye parent he yha se child ko component dege
// componentDidmount and compWillmount parha he
// {/* The following line can be included in your src/index.js or App.js file*/}
// import 'bootstrap/dist/css/bootstrap.min.css';
// 