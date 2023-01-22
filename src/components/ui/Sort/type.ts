import { Sort, sortPropertyEnum } from "redux/slice/filter/types";

export type SortItem = {
  name: string;
  sortProperty: sortPropertyEnum;
};

export type PopupClick = MouseEvent & {
  path: Node[];
};

export type SortProps = {
  sort: Sort;
};
