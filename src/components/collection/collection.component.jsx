import React from "react";
import CollectionItem from "../collection-item/collection-item.component";

// css
import "./collection.styles.scss";

const Collection = ({ title, items }) => {
  return (
    <div className="collection">
      <h1 className="collection-title">{title.toUpperCase()}</h1>
      <div className="item-box">
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...otherItemProps }) => (
            <CollectionItem key={id} {...otherItemProps} />
          ))}
      </div>
    </div>
  );
};

export default Collection;
