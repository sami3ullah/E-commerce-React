import React from "react";
import "./homepage.component.scss";
import "../../components/directory/directory.component.scss";
import Directory from "../../components/directory/directory.component";

const Homepage = () => (
  <div className="homepage">
    <Directory />
  </div>
);

export default Homepage;
