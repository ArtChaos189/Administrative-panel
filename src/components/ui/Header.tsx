import { Link, useLocation } from "react-router-dom";

import { useSelector } from "react-redux";

import { selectCategory } from "redux/slice/category/slice";

import Search from "./Search";

import LogoSvg from "assets/img/pizza-logo.svg";

export const Header = () => {
  const location = useLocation();

  const { pizzaId } = useSelector(selectCategory);

  const link = location.pathname !== "/add" && location.pathname !== `/pizza/${pizzaId}`;

  return (
    <div className="header">
      <div className="container">
        <div className="header__logo">
          <img width="38" src={LogoSvg} alt="Pizza logo" />
          <div>
            <Link to="/">
              <h1>React Pizza</h1>
            </Link>
            <p>Administrative panel</p>
          </div>
        </div>
        {link && <Search />}
      </div>
    </div>
  );
};
