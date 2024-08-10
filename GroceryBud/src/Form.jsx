import { useState } from "react";

const Form = ({ add }) => {
  const [item, setItem] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    add(item);
    setItem("");
  };

  return (
    <form className="grocery-form" onSubmit={handleSubmit}>
      <h4>Grocery Bud</h4>
      <div className="form-control">
        <input
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          className="form-input"
        />
        <button type="Submit" className="btn">
          Add item
        </button>
      </div>
    </form>
  );
};

export default Form;
