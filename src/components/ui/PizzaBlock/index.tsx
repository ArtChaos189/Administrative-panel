import { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { Link, useNavigate } from "react-router-dom";

import { fetchSizes, fetchTypeNames } from "redux/slice/category/asyncActions";

import { selectCategory } from "redux/slice/category/slice";

import { AppDispatch } from "redux/store";

import { PizzaProps } from "./type";

export const PizzaBlock: React.FC<PizzaProps> = ({ id, name, price, imageUrl, sizes, types }) => {
  const [activeType, setACtiveType] = useState(0);
  const [activeSize, setACtiveSize] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { typeNames } = useSelector(selectCategory);

  useEffect(() => {
    dispatch(fetchTypeNames());
    dispatch(fetchSizes());
  }, [dispatch, navigate]);

  return (
    <div className="pizza-block-wraper">
      <div className="pizza-block">
        <Link key={id} to={`/pizza/${id}`}>
          <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
          <h4 className="pizza-block__title">{name}</h4>
        </Link>
        <div className="pizza-block__selector">
          <ul>
            {types.map((type) => (
              <li key={type} onClick={() => setACtiveType(type)} className={activeType === type ? "active" : ""}>
                {typeNames[type]}
              </li>
            ))}
          </ul>
          <ul>
            {sizes.map((size, i) => (
              <li key={size} onClick={() => setACtiveSize(i)} className={activeSize === i ? "active" : ""}>
                {size} см.
              </li>
            ))}
          </ul>
        </div>
        <div className="pizza-block__bottom">
          <div className="pizza-block__price">от {price} ₽</div>
        </div>
      </div>
    </div>
  );
};
