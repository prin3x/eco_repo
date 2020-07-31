import React from "react";
import { ReactComponent as ShoppingIcon } from "../../asset/shopping-bag.svg";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import "./cart-icon.styles.scss";

const CartIcon = ({ cartItems, toggleCartHidden }) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>{cartItems.reduce((count, item) => count + item.quantity, 0)}</span>
  </div>
);
const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = ({ cart }) => ({
  cartItems: cart.cartItems,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
