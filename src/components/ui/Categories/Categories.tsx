import axios from "axios";

import { memo, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { useWhyDidYouUpdate } from "ahooks";

import { selectFilter } from "redux/slice/filter/slice";

import { selectCategory, setCategoryes } from "redux/slice/category/slice";

import { CategoriesProps } from "./type";

export const Categories: React.FC<CategoriesProps> = memo(({ getCategories, onChangeCategory }) => {
  useWhyDidYouUpdate("Categories", { getCategories, onChangeCategory });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { categories } = useSelector(selectCategory);
  useEffect(() => {
    async function fetchСategories() {
      try {
        const { data } = await axios.get("https://63a746c37989ad3286edc1b1.mockapi.io/category");
        dispatch(setCategoryes(data));
      } catch (error) {
        alert("Ошибка при получении категории!");
        navigate("/");
      }
    }

    fetchСategories();
  }, [dispatch, navigate]);

  const { categoryId } = useSelector(selectFilter);
  getCategories?.(categories);

  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, i) => (
          <li key={i} onClick={() => onChangeCategory(i)} className={categoryId === i ? "active" : ""}>
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
});
