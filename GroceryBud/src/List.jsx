import { nanoid } from "nanoid";
import SingleItem from "./SingleItem";

const List = (itemss) => {
  const { items, removeItem, editItem } = itemss;
  return (
    <section className="list-container">
      {items.map((item) => {
        return (
          <SingleItem
            it={item}
            key={nanoid()}
            removeItem={removeItem}
            editItem={editItem}
          />
        );
      })}
    </section>
  );
};

export default List;
