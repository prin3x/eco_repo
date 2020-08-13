import React from "react";
import CustomButtom from "../custom-button/custom-button.component";
import "./cart-dropdown.styles.scss";
import { connect } from "react-redux";
import CartItem from "../cart-item.component/cart-item.component";
import TotalPrice from "../total-price.component/total-price.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import {
  CartDropdownContainer,
  EmptyMessage,
  CartItemContainer,
  ButtonContainer,
} from "./cart-dropdown.styles";

const CartDropdown = ({
  cartItems,
  history,
  dispatch,
}) => (
  <CartDropdownContainer>
    <CartItemContainer>
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem
            key={cartItem.id}
            item={cartItem}
          />
        ))
      ) : (
        <EmptyMessage>
          Your Cart Is Empty
        </EmptyMessage>
      )}
    </CartItemContainer>
    <div className='total'>
      <TotalPrice />
    </div>
    <ButtonContainer>
      <CustomButtom
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        {" "}
        GO TO CHECKOUT
      </CustomButtom>
    </ButtonContainer>
  </CartDropdownContainer>
);

const mapStateToProps = createStructuredSelector(
  {
    cartItems: selectCartItems,
  }
);

export default withRouter(
  connect(mapStateToProps)(CartDropdown)
);
