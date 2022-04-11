import React from "react";
import SignIn from "../../components/signin/signin.component";
import SignUp from "../../components/signup/signup.component";

// css
import "./account.styles.scss";

const AccountPage = () => (
  <div className="account">
    <SignIn />
    <SignUp />
  </div>
);

export default AccountPage;
