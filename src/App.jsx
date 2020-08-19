import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Service from './Service';
import Navbar from './Navbar';
import Footer from './Footer';
import { Switch, Redirect, Route } from "react-router-dom";


const App =() =>   {
    return (
        <>
        <Navbar />
           <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/about" component={About} />
                <Route exact path="/service" component={Service} />
                <Redirect to="/" />
            </Switch>
        <Footer />
        </>
    );
};


export default App;