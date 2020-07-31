import React from "react";

import "./custom-button.styles.scss";

const CustomButtom = ({ children, isGoogleSignIn, inverted, ...otherProps }) => (
  <button {...otherProps} className={`${inverted ? "inverted" : ""} ${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}>
    {children}
  </button>
);

export default CustomButtom;
