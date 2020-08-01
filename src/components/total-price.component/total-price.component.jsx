import React from "react";
import "./total-price.styles.scss";
import { selectCartTotal } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

const TotalPrice = ({ total }) => (
  <div className='total-price'>
    <h2>Totals :</h2>
    <span>${total}</span>
  </div>
);

const mapStateToProps = createStructuredSelector({
  total: selectCartTotal,
});

export default connect(mapStateToProps)(TotalPrice);
