import {
  ProductType,
  CartType,
  ActionsWithNoPayload,
  FetchSuccess,
  AddToCartAction,
  ModifyCartActions,
  SetApiUrlType,
  StringType,
  SetCategories,
  CategoriesType,
} from "./types/types";

//prodcut action creators
export const fetchSuccess = (payload: ProductType[]): FetchSuccess => {
  return { type: "FETCH SUCCESS", payload: payload };
};

export const initFetch = (): ActionsWithNoPayload => {
  return { type: "INIT FETCH" };
};

export const fetchError = (): ActionsWithNoPayload => {
  return { type: "FETCH ERROR" };
};

export const setCategories = (payload: CategoriesType): SetCategories => {
  return { type: "SET CATEGORIES", payload };
};

export const setApiUrl = (payload: StringType): SetApiUrlType => {
  return { type: "SET API URL", payload: payload };
};

//cart action creators
export const addItem = (payload: CartType): AddToCartAction => {
  return { type: "ADD ITEM", payload: payload };
};

export const removeItem = (payload: number): ModifyCartActions => {
  return { type: "REMOVE ITEM", payload: payload };
};

export const increaseItem = (payload: number): ModifyCartActions => {
  return { type: "INCREASE ITEM", payload: payload };
};

export const decreaseItem = (payload: number): ModifyCartActions => {
  return { type: "DECREASE ITEM", payload: payload };
};
