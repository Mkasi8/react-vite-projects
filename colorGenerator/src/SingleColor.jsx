import { toast } from "react-toastify";
const SingleColor = ({ hex, weight, ind }) => {
  const saveToClipBoard = async (val) => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(val);
        toast.success("color copied to clipboard");
      } catch (error) {
        toast.error("color not copied to clipboard");
      }
    }
  };
  return (
    <article
      style={{ background: `#${hex}` }}
      onClick={() => saveToClipBoard(`#${hex}`)}
    >
      <p className="%value" className={ind > 10 ? "toggle" : "none"}>
        {weight}%
      </p>
      <p className="color-value" className={ind > 10 ? "toggle" : "none"}>
        #{hex}
      </p>
    </article>
  );
};

export default SingleColor;
