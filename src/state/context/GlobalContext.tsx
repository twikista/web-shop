import { useReducer, createContext, useContext, useEffect } from "react";
import {
  initFetch,
  fetchSuccess,
  fetchError,
  setCategories,
  updateCartTotals,
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
  totalCartQuantity: 0,
  totalCartAmount: 0,
  isLoading: false,
  isError: false,
  cartIsOpen: false,
  previousPath: "",
};

export const GlobalContextProvider = ({ children }: ContextProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchProducts = async () => {
      dispatch(initFetch());
      try {
        const response = await fetch(state.url);
        const products = await response.json();
        dispatch(fetchSuccess(products));
      } catch (error) {
        dispatch(fetchError());
      }
    };
    fetchProducts();
  }, [state.url]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
      const categories = await response.json();
      dispatch(setCategories(categories));
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    dispatch(updateCartTotals());
    console.log("cart total ran");
  }, [state.cart]);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
