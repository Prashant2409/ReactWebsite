import React from 'react';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Service from './Service';
import {Switch, Route, Redirect} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./NavBar"
import Footer from "./Footer";


const App =() =>{
  return(
    <>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route excat path="/about" component={About} />
      <Route excat path="/service" component={Service} />
      <Route excat path="/contact" component={Contact} /> 
      <Redirect to="/"/>
    </Switch>
    <Footer />
    </>
  );
}

   export default App;