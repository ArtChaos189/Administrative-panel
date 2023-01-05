import React from "react";

import { useSelector } from "react-redux";
import { selectFilter } from "redux/slice/filter/slice";
import { useWhyDidYouUpdate } from "ahooks";

type CategoriesProps = {
  getCategories?: (categories: string[]) => void;
  onChangeCategory: (id: number) => void;
};
const categories = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];

export const Categories: React.FC<CategoriesProps> = React.memo(({ getCategories, onChangeCategory }) => {
  useWhyDidYouUpdate("Categories", { getCategories, onChangeCategory });

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
