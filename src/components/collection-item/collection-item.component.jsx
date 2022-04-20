import React from "react";
import CustomButton from "../custom-button/custom-button.component";

// css
import "./collection-item.styles.scss";

const CollectionItem = ({ id, name, imageURL, price }) => (
  <div className="collection-item">
    <div className="image" style={{ backgroundImage: `url(${imageURL})` }} />
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">{price}</span>
    </div>
    <CustomButton inverted>ADD TO CART</CustomButton>
  </div>
);

export default CollectionItem;
