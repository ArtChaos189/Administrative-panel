import axios from "axios";
import React from "react";
import styles from "./PizzaAdd.module.scss";

export const PizzaAdd = () => {
  const [nameValue, setNameValue] = React.useState("");
  const [priceValue, setPriceValue] = React.useState("");

  const categories = ["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];
  const typeNames = ["тонкое", "традиционное"];

  const add = () => {
    axios.post("https://63a746c37989ad3286edc1b1.mockapi.io/items", {
      imageUrl:
        "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/30367198-f3bd-44ed-9314-6f717960da07.jpg",
      name: nameValue,
      types: [0, 1],
      sizes: [26, 30, 40],
      price: +priceValue,
      category: 5,
      rating: 7,
    });
  };

  return (
    <div className="container">
      <input
        onChange={(event) => setNameValue(event.target.value)}
        className={styles.input}
        type="text"
        placeholder="Назавание"
      />
      <input
        onChange={(event) => setPriceValue(event.target.value)}
        className={styles.input}
        type="text"
        placeholder="цена"
      />
      <h2 className={styles.header}>Категории</h2>
      <ul className={styles.list}>
        {categories.map((categories) => (
          <li key={categories}>{categories}</li>
        ))}
      </ul>
      <h2 className={styles.header}>Тесто</h2>
      <ul className={styles.list}>
        {typeNames.map((type) => (
          <li key={type}>{type}</li>
        ))}
      </ul>

      <button onClick={() => add()}>добавить</button>
    </div>
  );
};
