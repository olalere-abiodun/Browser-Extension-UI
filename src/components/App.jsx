import React from "react";
import ReactDOM from "react-dom"
import Header from "./Header.jsx";
import Title from "./Title.jsx";
import Card from "./card.jsx";
import cardData from "../cardata.js";

function createCard(data) {
    return (
        <Card 
            key = {data.id}
            logo = {data.logo}
            name = {data.name}
            description = {data.description}
            isActive = {data.isActive}
        />
    );
}

function App(){
    return (
        <div>
            <Header 
                logo="/assets/images/logo.svg" 
                theme="/assets/images/icon-sun.svg"
            />
            <Title />
            {/* <Card /> */}
            <div className="card-container">
              {cardData.map(createCard)}

            </div>


            
            
        </div>
    );
}

export default App;