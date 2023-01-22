import ReactPaginate from "react-paginate";

import { useDispatch } from "react-redux";

import { setCurrentPage } from "redux/slice/filter/slice";

import styles from "./Pagination.module.scss";

export const Pagination = () => {
  const dispatch = useDispatch();

  const onChangePage = (number: number) => {
    dispatch(setCurrentPage(number));
  };

  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={3}
      previousLabel="<"
    />
  );
};
