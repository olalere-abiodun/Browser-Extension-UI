import React from "react";
import cardData from "../cardata";


// function Card() {
//   const cards = Array(6).fill({
//     src: "https://png.pngtree.com/png-clipart/20201208/original/pngtree-letter-vf-image-with-leaf-icon-vector-logo-design-idea-and-png-image_5539187.jpg",
//     alt: "DevLens logo",
//     title: "DevLens",
//     description: "Quickly inspect page layouts and visualize element boundaries.",
//   });

//   return (
//     <div className="card-container">
//       {cards.map((card, index) => (
//         <div className="card" key={index}>
//           <section className="row1">
//             <img src={card.src} alt={card.alt} />
//             <div>
//               <span>{card.title}</span>
//               <p>{card.description}</p>
//             </div>
//           </section>
//           <section className="row2">
//             <button>Remove</button>
//             <label className="switch">
//               <input type="checkbox" />
//               <span className="slider"></span>
//             </label>
//           </section>
//         </div>
//       ))}
//     </div>
//   );
// }
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