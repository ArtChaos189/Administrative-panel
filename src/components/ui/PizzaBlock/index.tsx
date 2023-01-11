import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { selectCategory, setSizes, setTypeNames } from "redux/slice/category/slice";

type PizzaProps = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
};

export const PizzaBlock: React.FC<PizzaProps> = ({ id, name, price, imageUrl, sizes, types }) => {
  const [activeType, setACtiveType] = React.useState(0);
  const [activeSize, setACtiveSize] = React.useState(0);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { typeNames } = useSelector(selectCategory);

  React.useEffect(() => {
    async function fetchTypeNames() {
      try {
        const { data } = await axios.get("https://63a746c37989ad3286edc1b1.mockapi.io/typeNames");
        dispatch(setTypeNames(data));
      } catch (error) {
        alert("Ошибка при получении теста!");
        navigate("/add");
      }
    }

    fetchTypeNames();
  }, [dispatch, navigate]);

  React.useEffect(() => {
    async function fetchSizes() {
      try {
        const { data } = await axios.get("  https://63a746c37989ad3286edc1b1.mockapi.io/sizes");
        dispatch(setSizes(data));
      } catch (error) {
        alert("Ошибка при получении размера!");
        navigate("/add");
      }
    }

    fetchSizes();
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
