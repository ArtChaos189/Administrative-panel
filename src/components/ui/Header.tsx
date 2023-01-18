import { Link, Route, Routes } from "react-router-dom";

import Search from "./Search";

import LogoSvg from "assets/img/pizza-logo.svg";

export const Header = () => {
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
        <Routes>
          <Route path="/" element={<Search />} />
        </Routes>
      </div>
    </div>
  );
};
