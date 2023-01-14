import React from "react";
import axios from "axios";

import { useSelector, useDispatch } from "react-redux";

import { Categories, SortPopup, PizzaBlock, Skeleton, Pagination } from "components/ui";

import { selectPizzas, setItems } from "redux/slice/pizzas/slice";
import { selectFilter, setCategoryId } from "redux/slice/filter/slice";
import { Link } from "react-router-dom";

export const Home = () => {
  const dispatch = useDispatch();
  const { categoryId, currentPage, sort, searchValue } = useSelector(selectFilter);
  const { items } = useSelector(selectPizzas);

  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const axiosPizzas = async () => {
      setIsLoading(true);
      const category = categoryId > 0 ? `category=${categoryId}` : "";
      const order = sort.sortProperty.includes("-") ? "asc" : "desc";
      const sortBy = sort.sortProperty.replace("-", "");

      try {
        const { data } = await axios.get(
          `https://63a746c37989ad3286edc1b1.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}`
        );
        dispatch(setItems(data));
      } catch (error) {
        alert("Ошибка при получении пицц");
        dispatch(setItems([]));
      } finally {
        setIsLoading(false);
      }
      window.scrollTo(0, 0);
    };

    axiosPizzas();
  }, [categoryId, sort, searchValue, currentPage, dispatch]);

  const onChangeCategory = React.useCallback(
    (id: number) => {
      dispatch(setCategoryId(id));
    },
    [dispatch]
  );

  return (
    <div className="container">
      <div className="content__top">
        <Categories onChangeCategory={onChangeCategory} />
        <SortPopup sort={sort} />
      </div>
      <h2 className="content__title">
        Все пиццы
        <Link to={"/add"}>
          <button className="button button--outline button--add">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
          </button>
        </Link>
      </h2>

      <div className="content__items">
        {isLoading
          ? [...new Array(4)].map((_, index) => <Skeleton key={index} />)
          : items
              .filter((obj: { name: string }) => obj.name.toLowerCase().includes(searchValue.toLowerCase()))
              .map((obj: any) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
      <Pagination />
    </div>
  );
};
