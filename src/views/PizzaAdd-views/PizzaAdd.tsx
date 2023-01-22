import axios from "axios";

import React, { useEffect } from "react";

import cn from "classnames";

import { useSelector, useDispatch } from "react-redux";

import { selectCategory, setActiveCategoryes } from "redux/slice/category/slice";

import { AppDispatch } from "redux/store";

import { fetchSizes, fetchTypeNames, fetchСategories } from "redux/slice/category/asyncActions";

import styles from "./PizzaAdd.module.scss";

export const PizzaAdd = () => {
  const [nameValue, setNameValue] = React.useState("");
  const [priceValue, setPriceValue] = React.useState("");
  const [activeType, setACtiveType] = React.useState<number[]>([]);
  const [activeSize, setACtiveSize] = React.useState<number[]>([]);
  const [isDisabled, setIsDisabled] = React.useState<boolean>(false);
  const [isDisabledTwo, setIsDisabledTwo] = React.useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();
  const { categories, сategoryIndex, typeNames, sizes, status } = useSelector(selectCategory);

  const editСategories = categories.slice(1);

  const add = () => {
    axios.post("https://63a746c37989ad3286edc1b1.mockapi.io/items", {
      imageUrl:
        "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/30367198-f3bd-44ed-9314-6f717960da07.jpg",
      name: nameValue,
      types: activeType,
      sizes: activeSize,
      price: +priceValue,
      category: сategoryIndex + 1,
      rating: 5,
    });
  };

  const onClickType = (index: number) => {
    if (activeType.includes(index)) {
      setACtiveType((prev) => prev.filter((_index) => _index !== index));
    } else {
      setACtiveType((prev) => [...prev, index]);
    }
  };

  const onClickSize = (size: number) => {
    if (activeSize.includes(size)) {
      setACtiveSize((prev) => prev.filter((_size) => _size !== size));
    } else {
      setACtiveSize((prev) => [...prev, size]);
    }
  };

  const isButtonAvailable =
    nameValue && priceValue && сategoryIndex >= 0 && activeType.length >= 1 && activeSize.length > 0;

  useEffect(() => {
    dispatch(fetchTypeNames());
    dispatch(fetchSizes());
    dispatch(fetchСategories());
  }, [dispatch]);

  return (
    <div className="container">
      {status === "error" ? (
        <div className="content__error-info">
          <h2>Произошла ошибка 😕</h2>
          <p>К сожалению, не удалось получить питсы. Попробуйте повторить попытку позже.</p>
        </div>
      ) : (
        <>
          {status === "loading" ? (
            <h2> Loading...</h2>
          ) : (
            <>
              <h2 className={styles.header}>Название</h2>
              <form>
                <input
                  disabled={isDisabled}
                  onChange={(event) => setNameValue(event.target.value)}
                  className={styles.input}
                  type="text"
                  placeholder="назавание..."
                />
                <button type="button" onClick={() => setIsDisabled(false)}>
                  Отменить
                </button>
                <button type="button" onClick={() => setIsDisabled(true)}>
                  Сохранить
                </button>
              </form>
              <h2 className={styles.header}>Цена</h2>
              <form>
                <input
                  onChange={(event) => setPriceValue(event.target.value)}
                  className={styles.input}
                  disabled={isDisabledTwo}
                  type="number"
                  placeholder="цена..."
                />
                <button type="button" onClick={() => setIsDisabledTwo(false)}>
                  Отменить
                </button>
                <button type="button" onClick={() => setIsDisabledTwo(true)}>
                  Сохранить
                </button>
              </form>
              <h2 className={styles.header}>Категории</h2>
              <div className="categories">
                <ul className={styles.list}>
                  {editСategories.map((categories: string, index: number) => (
                    <li
                      key={index}
                      onClick={() => dispatch(setActiveCategoryes(index))}
                      className={cn({ active: сategoryIndex === index })}
                    >
                      {categories}
                    </li>
                  ))}
                </ul>
              </div>
              <h2 className={styles.header}>Тесто</h2>
              <div className="pizza-block__selector">
                <ul className={styles.list}>
                  {typeNames.map((type, index) => (
                    <li
                      key={index}
                      onClick={() => onClickType(index)}
                      className={cn({ active: activeType.includes(index) })}
                    >
                      {type}
                    </li>
                  ))}
                </ul>
              </div>
              <h2 className={styles.header}>Размеры</h2>
              <div className="pizza-block__selector">
                <ul className={styles.list}>
                  {sizes.map((size, index) => (
                    <li
                      key={index}
                      onClick={() => onClickSize(size)}
                      className={cn({ active: activeSize.includes(size) })}
                    >
                      {size}см.
                    </li>
                  ))}
                </ul>
              </div>
              {isButtonAvailable && (
                <button className={styles.btn} onClick={() => add()}>
                  <span>добавить</span>
                </button>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};
