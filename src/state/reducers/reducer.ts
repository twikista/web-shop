import { StateType, Action } from "./types/types";

export const reducer = (state: StateType, action: Action): StateType => {
  if (action.type === "INIT FETCH") {
    return { ...state, isLoading: true, isError: false };
  }
  /*
Handle success data fectch
*/
  if (action.type === "FETCH SUCCESS") {
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

  if (action.type === "SET API URL") {
    return { ...state, url: action.payload };
  }
  if (action.type === "ADD ITEM") {
    console.log("clicked", state.cart);
    const { id, quantity: quanty, price } = action.payload;
    console.log(action.payload);
    if (state.cart.find((item) => item.id === id) === undefined) {
      return {
        ...state,
        cart: [...state.cart, { id, quantity: quanty, price }],
      };
    } else {
      const newCart = state.cart.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + quanty };
        } else {
          return item;
        }
      });
      return { ...state, cart: newCart };
    }
  }
  //decrease cart
  if (action.type === "DECREASE ITEM") {
    const id = action.payload;
    const { cart } = state;
    if (cart.find((item) => item.id === id)?.quantity === 1) {
      const newCart = cart.filter((item) => item.id !== id);
      return { ...state, cart: newCart };
    } else {
      const newCart = state.cart.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      });
      return { ...state, cart: newCart };
    }
  }

  if (action.type === "REMOVE ITEM") {
    const id = action.payload;
    const { cart } = state;
    const newCart = cart.filter((item) => item.id !== id);
    return { ...state, cart: newCart };
  }

  if (action.type === "UPDATE CART TOTALS") {
    const { quantityTotal, priceTotal } = state.cart.reduce(
      (totalQuantity, item) => {
        const { quantity, price } = item;
        totalQuantity.quantityTotal += quantity;
        const amount = price * quantity;
        totalQuantity.priceTotal += amount;
        return totalQuantity;
      },
      { quantityTotal: 0, priceTotal: 0 }
    );
    console.log(quantityTotal, priceTotal);
    return {
      ...state,
      totalCartQuantity: quantityTotal,
      totalCartAmount: priceTotal,
    };
  }
  if (action.type === "TOGGLE CART") {
    console.log(!state.cartIsOpen);
    console.log(action.payload);
    return {
      ...state,
      cartIsOpen: !state.cartIsOpen,
      previousPath: action.payload,
    };
  }

  return state;
};
