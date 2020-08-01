import React from "react";
import CustomButtom from "../custom-button/custom-button.component";
import "./cart-dropdown.styles.scss";
import { connect } from "react-redux";
import CartItem from "../cart-item.component/cart-item.component";
import TotalPrice from "../total-price.component/total-price.component";

const CartDropdown = ({ cartItems }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <div className='total'>
      <TotalPrice items={cartItems} />
    </div>
    <CustomButtom> GO TO CHECKOUT</CustomButtom>
  </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default connect(mapStateToProps)(CartDropdown);
