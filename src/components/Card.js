import React from "react";

function Card({ title, category, price, img, desc }) {
  console.log(img);
  return (
    <div className="card">
      <img src={img} alt={title} />
      <div className="card-info">
        <h3>{title}</h3>
        <p>{desc}</p>
        <p>Category: {category}</p>
        <p>Price: ${price}</p>
      </div>
    </div>
  );
}

export default Card;
