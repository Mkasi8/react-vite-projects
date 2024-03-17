import { FaAngleDoubleRight } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";

const Duties = ({ duties }) => {
  return (
    <div>
      {duties.map((item) => {
        const id = uuidv4();
        return (
          <div key={id} className="container">
            <FaAngleDoubleRight className="symbol"></FaAngleDoubleRight>
            <p>{item}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Duties;
