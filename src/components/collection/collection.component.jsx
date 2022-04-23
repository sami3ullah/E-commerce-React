import React from "react";
import CollectionItem from "../collection-item/collection-item.component";

// css
import "./collection.styles.scss";

const Collection = ({ title, items }) => {
  return (
    <div className="collection">
      <h3 className="collection-title">{title.toUpperCase()}</h3>
      <div className="item-box">
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default Collection;
