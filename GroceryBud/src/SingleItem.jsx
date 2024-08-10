import { useState } from "react";

const SingleItem = (item) => {
  const { removeItem, it, editItem } = item;
  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={it.completed}
        onChange={() => editItem(it.id)}
      />
      <p
        style={{
          textTransform: "capitalize",
          textDecoration: it.completed && "line-through",
        }}
      >
        {it.name}
      </p>
      <button type="button" className="btn" onClick={() => removeItem(it.id)}>
        Delete
      </button>
    </div>
  );
};

export default SingleItem;
