import axios from "axios";
import React from "react";

import { useNavigate, useParams } from "react-router-dom";

import { Skeleton } from "components/ui";
import { useDispatch } from "react-redux";
import { setPizzaId } from "redux/slice/category/slice";

export const FullPizza = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [open, setOpen] = React.useState<boolean>(false);

  const [openTwo, setOpenTwo] = React.useState<boolean>(false);

  const [nameValue, setNameValue] = React.useState<string>("");

  const [priceValue, setPriceValue] = React.useState<string>("");

  dispatch(setPizzaId(id));

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

  const change = () => {
    axios.put("https://63a746c37989ad3286edc1b1.mockapi.io/items/" + id, {
      name: nameValue,
      price: priceValue,
    });
  };

  if (!pizza) {
    return <Skeleton />;
  }

  const del = () => {
    axios.delete("https://63a746c37989ad3286edc1b1.mockapi.io/items/" + id);
    navigate("/");
  };

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
      <button onClick={() => del()}>удалить пиццу</button>
    </div>
  );
};
