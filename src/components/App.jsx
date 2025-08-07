import React from "react";
import ReactDOM from "react-dom"
import Header from "./Header.jsx";
import Title from "./Title.jsx";
import Button from "./Button.jsx";
import logo from '../assets/images/logo.svg';
import themeIcon from '../assets/images/icon-sun.svg';
import buttonMode from "../mode.js";
import Card from "./card.jsx";



function App(){
    return (
        <div>
            <Header 
             logo={logo}
             theme ={themeIcon}
            />
            <Title />
            <Card />
            
            
        </div>
    );
}

export default App;