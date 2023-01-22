import { memo, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { useWhyDidYouUpdate } from "ahooks";

import { selectFilter } from "redux/slice/filter/slice";

import { selectCategory } from "redux/slice/category/slice";

import { AppDispatch } from "redux/store";

import { fetchСategories } from "redux/slice/category/asyncActions";

import { CategoriesProps } from "./type";

export const Categories: React.FC<CategoriesProps> = memo(({ getCategories, onChangeCategory }) => {
  useWhyDidYouUpdate("Categories", { getCategories, onChangeCategory });
  const dispatch = useDispatch<AppDispatch>();

  const { categories, status } = useSelector(selectCategory);

  const { categoryId } = useSelector(selectFilter);
  getCategories?.(categories);

  useEffect(() => {
    dispatch(fetchСategories());
  }, [dispatch]);

  return (
    <div className="categories">
      {status === "loading" ? (
        <h2>Loading...</h2>
      ) : (
        <ul>
          {categories.map((categoryName, i) => (
            <li key={i} onClick={() => onChangeCategory(i)} className={categoryId === i ? "active" : ""}>
              {categoryName}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
});
