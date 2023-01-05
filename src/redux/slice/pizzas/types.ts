export type Pizzas = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
};

export interface PizasSliceState {
  items: Pizzas[];
}
