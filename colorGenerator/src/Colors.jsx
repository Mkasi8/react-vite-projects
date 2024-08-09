import { nanoid } from "nanoid";
import SingleColor from "./SingleColor";
const Colors = ({ colors }) => {
  return (
    <section className="colors-container">
      {colors.map(({ hex, weight }, index) => {
        return (
          <SingleColor key={nanoid()} hex={hex} weight={weight} ind={index} />
        );
      })}
    </section>
  );
};

export default Colors;
