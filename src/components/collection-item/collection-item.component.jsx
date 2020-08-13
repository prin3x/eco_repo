import React from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions.js";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import {
  CollectionItemContainer,
  ImageContainer,
  CustomButtonContainer,
  CollectionFooter,
} from "./collection-item.styles";

const CollectionItem = ({ item, addItem, cartItems }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer>
      <ImageContainer imageUrl={imageUrl} />
      <CollectionFooter>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </CollectionFooter>

      <CustomButtonContainer onClick={() => addItem(item)} inverted>
        Add to cart
      </CustomButtonContainer>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
});

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps, mapDispatchToProps)(CollectionItem);
