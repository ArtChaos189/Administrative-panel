export enum Status {
  LOADING = "loading",
  SUCCESS = "completed",
  ERROR = "error",
}

export type CategorySliceState = {
  categories: string[];
  сategoryIndex: number;
  typeNames: string[];
  activeType: number[];
  sizes: number[];
  status: Status;
};
