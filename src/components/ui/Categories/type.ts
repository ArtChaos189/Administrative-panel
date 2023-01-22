export type CategoriesProps = {
  getCategories?: (categories: string[]) => void;
  onChangeCategory: (id: number) => void;
};
