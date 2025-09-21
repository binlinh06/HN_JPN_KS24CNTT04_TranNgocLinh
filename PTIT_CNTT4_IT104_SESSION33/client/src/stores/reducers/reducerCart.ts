import type { Product } from "../../interface/interface";

type Action =
  | { type: "INCREMENT"; payload: { id: number } }
  | { type: "DECREMENT"; payload: { id: number } }
  | { type: "DELETE"; payload: { id: number } }
  | { type: "ADD_TO_CART"; payload: Product }
  | { type: "UPDATE"; payload: { id: number; quantity: number } };

const initialState = {
  cart: [
    { id: 1, title: "cake", price: 10, quantity: 1 },
    { id: 2, title: "Hamburger", price: 15, quantity: 1 },
  ],
};

export const reducerCart = (state = initialState, action: Action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };

    case "DECREMENT":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: Math.max(1, item.quantity - 1) }
            : item
        ),
      };

    case "DELETE":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };

    case "ADD_TO_CART": {
      const product = action.payload;
      const exist = state.cart.find((item) => item.id === product.id);

      if (exist) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...product, quantity: 1 }],
        };
      }
    }

    case "UPDATE": {
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === action.payload.id) {
            // validate vượt kho
            if (item.stock && action.payload.quantity > item.stock) {
              alert("Số lượng sản phẩm vượt quá số lượng trong kho");
              return item; // giữ nguyên không update
            }
            return { ...item, quantity: action.payload.quantity };
          }
          return item;
        }),
      };
    }

    default:
      return state;
  }
};
