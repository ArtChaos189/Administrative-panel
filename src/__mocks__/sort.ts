import { SortItem } from "components/ui/Sort/type";

import { sortPropertyEnum } from "redux/slice/filter/types";

export const list: SortItem[] = [
  { name: "↑популярности", sortProperty: sortPropertyEnum.RATING_DESC },
  { name: "↓популярности", sortProperty: sortPropertyEnum.RATING_ASC },
  { name: "↑цене", sortProperty: sortPropertyEnum.PRICE_DESC },
  { name: "↓цене", sortProperty: sortPropertyEnum.PRICE_ASC },
  { name: "↑алфавиту", sortProperty: sortPropertyEnum.NAME_DESC },
  { name: "↓алфавиту", sortProperty: sortPropertyEnum.NAME_ASC },
];
