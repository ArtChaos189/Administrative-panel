import React from "react";
import { Link } from "react-router-dom";

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

  const typeNames = ["тонкое", "традиционное"];

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
