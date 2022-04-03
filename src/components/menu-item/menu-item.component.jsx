import React from "react";

// CSS stylesheets
import "./menu-item.component.scss";

const MenuItem = ({ title, subtitle = "Shop Now", imageURL, size }) => (
  <div className={`${size} menu-item`}>
    <div
      className="background-image"
      style={{ backgroundImage: `url(${imageURL})` }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">{subtitle}</span>
    </div>
  </div>
);

export default MenuItem;
