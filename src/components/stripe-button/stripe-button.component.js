import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({
  price,
}) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HBthzEg1p1f2txTphGwUmInjVLSDIYvnMrCOHI5lFMdKyYi63JT8G6wJJs8DkJlY0DP0061zsP6oHcM00h6DIiF0045WC6WX1";
  const onToken = token => {
    console.log(token);
    alert("Payment Successfull");
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='Crown Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
