import { useState } from "react";

const ColorGenerator = () => {
  const [color, setColor] = useState("#5DE2E7");
  return (
    <>
      <section className="parent-container">
        <h4>Color Generator</h4>
        <form className="color-form">
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
          <button type="onSubmit">Generate</button>
        </form>
      </section>
    </>
  );
};

export default ColorGenerator;
