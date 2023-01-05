import axios from "axios";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Skeleton } from "components/ui";

export const FullPizza = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pizza, setPizza] = React.useState<{
    imageUrl: string;
    name: string;
    price: number;
  }>();

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get("https://63a746c37989ad3286edc1b1.mockapi.io/items/" + id);
        setPizza(data);
      } catch (error) {
        alert("Ошибка при получении пиццы!");
        navigate("/");
      }
    }

    fetchPizza();
  }, [id, navigate]);

  if (!pizza) {
    return <Skeleton />;
  }

  const del = () => {
    axios.delete("https://63a746c37989ad3286edc1b1.mockapi.io/items/" + id);
  };

  return (
    <div className="container">
      <img src={pizza.imageUrl} alt="pizza" />
      <button onClick={() => del()}>удалить</button>
      <h2>{pizza.name}</h2>
      <h4>{pizza.price} ₽</h4>
    </div>
  );
};
