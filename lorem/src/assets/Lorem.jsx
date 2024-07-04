import { useState } from "react";
import text from "./data";
import { nanoid } from "nanoid";

const Lorem = () => {
  const [count, setCount] = useState(1);
  const [loremText, setLoremText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    let numP = parseInt(count);

    let slicedText = text.slice(0, count);

    setLoremText(() => slicedText);
  };

  return (
    <>
      <section className="lorem-container">
        <h4>Random text generator</h4>

        <form className="lorem-form" onSubmit={handleSubmit}>
          <label htmlFor="numParagraphs" className="input-label">
            Number of paragraph
          </label>
          <input
            className="form-input"
            type="number"
            min="1"
            max="8"
            step="1"
            value={count}
            onChange={(e) => setCount(e.target.value)}
          />
          <button type="submit" className="btn">
            generate
          </button>
        </form>
        <article className="text-container">
          {loremText.map((textToDisplay) => {
            return (
              <p key={nanoid()} className="lorem-paragraph">
                {textToDisplay}
              </p>
            );
          })}
        </article>
      </section>
    </>
  );
};

export default Lorem;
