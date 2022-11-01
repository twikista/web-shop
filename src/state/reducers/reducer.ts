import { StateType, Action } from "./types/types";

export const reducer = (state: StateType, action: Action): StateType => {
  if (action.type === "INIT FETCH") {
    return { ...state, isLoading: true, isError: false };
  }
  /*
Handle success data fectch
*/
  if (action.type === "FETCH SUCCESS") {
    console.log(state);
    return {
      ...state,
      isLoading: false,
      isError: false,
      products: action.payload,
    };
  }
  /*
Hanadle data fetch error
*/
  if (action.type === "FETCH ERROR") {
    return { ...state, isLoading: false, isError: true };
  }

  if (action.type === "SET CATEGORIES") {
    return { ...state, categories: ["all", ...action.payload] };
  }

  return state;
};
