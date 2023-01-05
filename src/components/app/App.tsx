import { Route, Routes } from "react-router-dom";

import { Header } from "../ui/Header";

import { Home } from "views/home-views/home-views";

import { NotFound } from "views/not-found-views/not-found-views";

import { FullPizza } from "views/full-pizza-views/full-pizza-views";

import { PizzaAdd } from "views/PizzaAdd-views/PizzaAdd";

//https://637c882872f3ce38eaa4fa33.mockapi.io/items

export function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pizza/:id" element={<FullPizza />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/add" element={<PizzaAdd />} />
        </Routes>
      </div>
    </div>
  );
}
