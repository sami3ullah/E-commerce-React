import React from "react";

// css
import "./collection-item.styles.scss";

const CollectionItem = ({ id, name, imageURL, price }) => (
  <div className="collection-item">
    <div className="image" style={{ backgroundImage: `url(${imageURL})` }} />
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">{price}</span>
    </div>
  </div>
);

export default CollectionItem;
