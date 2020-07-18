import React from 'react';

import Home from "./components/Home";
import {Switch, Route, Redirect} from "react-router-dom";
import About from "./components/About";
import Service from "./components/Service";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
    return (
        <>

            <Navbar/>
            <main>
                <Switch>
                    <Route exact path={"/"} component={Home}/>
                    <Route exact path={"/about"} component={About}/>
                    <Route exact path={"/service"} component={Service}/>
                    <Route exact path={"/contact"} component={Contact}/>
                    <Redirect to={"/"}/>
                </Switch>
            </main>
            <Footer/>

        </>
    );
};

export default App;
