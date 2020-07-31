import React from "react";
import CustomButtom from "../custom-button/custom-button.component";
import "./collection-item.styles.scss";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions.js";

const CollectionItem = ({ item, addItem, cartItems }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className='collection-item'>
      <div className='image' style={{ backgroundImage: `url('${imageUrl}')` }} />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <CustomButtom onClick={() => addItem(item)} inverted>
        Add to cart
      </CustomButtom>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
});

const mapStateToProps = ({ cart }) => ({
  cartItems: cart.cartItems,
});

export default connect(mapStateToProps, mapDispatchToProps)(CollectionItem);
