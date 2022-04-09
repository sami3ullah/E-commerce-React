import React from "react";

// css
import "./custom-button.styles.scss";

const CustomButton = ({ children, isGoogleSignIn, ...otherButtonProps }) => {
  return (
    <button
      className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
      {...otherButtonProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;