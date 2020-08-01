import React from "react";
import "./total-price.styles.scss";

const TotalPrice = ({ items }) => (
  <div className='total-price'>
    <h2>Totals :</h2>
    <span>${items.reduce((total, item) => total + item.price * item.quantity, 0)}</span>
  </div>
);

export default TotalPrice;
