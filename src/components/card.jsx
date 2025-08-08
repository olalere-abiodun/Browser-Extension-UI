import React from "react";
import cardData from "../cardata";

function Card(props) {
  return (
    <div className="card">
      <section className="row1">
        <img src={props.logo} alt={`${props.name} logo`} />
        <div>
          <span>{props.name}</span>
          <p>{props.description}</p>
        </div>
      </section>
      <section className="row2">
        <button>Remove</button>
        <label className="switch">
          <input type="checkbox" checked={props.isActive} readOnly />
          <span className="slider"></span>
        </label>
      </section>
    </div>
  );
}



export default Card;