import { useState } from "react";
import { nanoid } from "nanoid";
import List from "./List";
import Form from "./Form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const _DATA = "DATA";

const setLocalStorage = (dataName, data) => {
  localStorage.setItem(dataName, JSON.stringify(data));
};

const fetchedList = JSON.parse(localStorage.getItem(_DATA) || []);

const GroceryBud = () => {
  const [list, setList] = useState(fetchedList);

  const addItem = (itemName) => {
    if (!itemName) {
      toast.error("Please enter a value");
      return;
    }

    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    };

    const newList = [...list, newItem];

    setList(() => newList);
    setLocalStorage(_DATA, newList);
    toast.success("Item added to the list");
  };

  const removeItem = (id) => {
    const newArray = list.filter((item) => item.id !== id);
    setList(() => newArray);
    setLocalStorage(_DATA, newArray);
    toast.success("Item removed");
  };

  const editItem = (id) => {
    const newArray = list.map((item) => {
      if (item.id == id) {
        const newItem = { ...item, completed: !item.completed };
        return newItem;
      }
      return item;
    });
    setList(() => newArray);
    setLocalStorage(_DATA, newArray);
  };

  return (
    <section className="parent-container">
      <Form add={addItem} />
      <List items={list} removeItem={removeItem} editItem={editItem} />
      <ToastContainer position="top-center" />
    </section>
  );
};

export default GroceryBud;
