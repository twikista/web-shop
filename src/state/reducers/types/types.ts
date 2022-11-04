import { Dispatch, ReactNode } from "react";

export type StringType = string;

export type NumberType = number;

export type CategoriesType = string[];

export type ProductType = {
  id: NumberType;
  title: StringType;
  price: NumberType;
  description: StringType;
  category: StringType;
  image: StateType;
  rating: {
    rate: NumberType;
    count: NumberType;
  };
};

export type FetchSuccess = {
  type: "FETCH SUCCESS";
  payload: ProductType[];
};
export type AddToCartAction = {
  type: "ADD ITEM";
  payload: CartType;
};

export type ActionsWithNoPayload = {
  type: "INIT FETCH" | "FETCH ERROR" | "CLEAR CART";
};
export type ModifyCartActions = {
  type: "REMOVE ITEM" | "INCREASE ITEM" | "DECREASE ITEM";
  payload: NumberType;
};

export type SetApiUrlType = {
  type: "SET API URL";
  payload: StringType;
};
export type SetCategories = {
  type: "SET CATEGORIES";
  payload: CategoriesType;
};

export type Action =
  | ActionsWithNoPayload
  | FetchSuccess
  | AddToCartAction
  | ModifyCartActions
  | SetApiUrlType
  | SetCategories;

export type CartType = {
  id?: NumberType;
  quantity: NumberType | StringType;
};

export type StateType = {
  url: StringType;
  cart: CartType[];
  totalCartQuantity: number;
  totalCartAmount: number;
  products: ProductType[];
  categories: CategoriesType;
  isLoading: boolean;
  isError: boolean;
};

export type ContextType = {
  state: StateType;
  dispatch: Dispatch<Action>;
};

export type ContextProviderProps = {
  children: ReactNode;
};
