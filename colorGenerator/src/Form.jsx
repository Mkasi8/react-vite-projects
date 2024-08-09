import { nanoid } from "nanoid";
import { useState } from "react";
const Form = ({ addColor }) => {
  const [color, setColor] = useState("#f15025");

  const handleSubmit = (e) => {
    e.preventDefault();
    addColor(color);
  };

  return (
    <form className="color-form" onSubmit={handleSubmit}>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <input
        type="text"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        placeholder="#5DE2E7"
      ></input>
      <button type="submit" style={{ background: `${color}` }}>
        Generate
      </button>
    </form>
  );
};
export default Form;
