import { useReducer, createContext, useContext, useEffect } from "react";
import {
  initFetch,
  fetchSuccess,
  fetchError,
  setCategories,
} from "../reducers/actionCreators";
import {
  ContextType,
  ContextProviderProps,
  StateType,
  StringType,
} from "../reducers/types/types";
import { reducer } from "../reducers/reducer";

const GlobalContext = createContext({} as ContextType);
const initialState: StateType = {
  url: "https://fakestoreapi.com/products",
  products: [],
  categories: [],
  cart: [],
  isLoading: false,
  isError: false,
};

export const GlobalContextProvider = ({ children }: ContextProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
