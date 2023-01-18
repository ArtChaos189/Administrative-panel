import React from "react";

import axios from "axios";

import { useNavigate, useParams } from "react-router-dom";

import { Skeleton } from "components/ui";

export const FullPizza = () => {
  const [open, setOpen] = React.useState<boolean>(false);

  const [openTwo, setOpenTwo] = React.useState<boolean>(false);

  const [nameValue, setNameValue] = React.useState<string>("");

  const [priceValue, setPriceValue] = React.useState<string>("");

  const navigate = useNavigate();

  const { id } = useParams();

  const [pizza, setPizza] = React.useState<{
    imageUrl: string;
    name: string;
    price: number;
  }>();

  const Delete = () => {
    axios.delete("https://63a746c37989ad3286edc1b1.mockapi.io/items/" + id);
    navigate("/");
  };

  const change = () => {
    axios.put("https://63a746c37989ad3286edc1b1.mockapi.io/items/" + id, {
      name: nameValue,
      price: priceValue,
    });
  };

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

  return (
    <div className="container">
      <img src={pizza.imageUrl} alt="pizza" />
      {open ? (
        <>
          <input type="text" onChange={(event) => setNameValue(event.target.value)} placeholder="Название..." />
          <button onClick={() => setOpen(false)}>Сохранить</button>
        </>
      ) : (
        <h2>
          {nameValue === "" ? pizza.name : nameValue}
          <button onClick={() => setOpen(true)}>Изменить</button>
        </h2>
      )}
      {openTwo ? (
        <>
          <input type="number" onChange={(event) => setPriceValue(event.target.value)} placeholder="Название..." />
          <button onClick={() => setOpenTwo(false)}>Сохранить</button>
        </>
      ) : (
        <h4>
          {priceValue === "" ? pizza.price : priceValue}₽ <button onClick={() => setOpenTwo(true)}>Изменить</button>
        </h4>
      )}
      {priceValue || nameValue ? <button onClick={() => change()}>изменить пиццу</button> : ""}
      <button onClick={() => Delete()}>удалить пиццу</button>
    </div>
  );
};
