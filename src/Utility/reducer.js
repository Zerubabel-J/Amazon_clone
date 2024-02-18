import { useReducer } from "react";
import { Type } from "./action.type";
export const initialState = {
  basket: [],
  user: null,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case Type.ADD_TO_BASKET:
      const existingItem = state.basket.find(
        (item) => item.id === action.item.id
      );
      if (existingItem) {
        return {
          ...state,
          basket: state.basket.map((item) =>
            item.id === action.item.id
              ? { ...item, amount: item.amount + 1 }
              : item
          ),
        };
      } else {
        const updatedBasket = [...state.basket, { ...action.item, amount: 1 }];
        return {
          ...state,
          basket: updatedBasket,
        };
      }
    case Type.REMOVE_FROM_BASKET:
      const index = state.basket.findIndex((item) => item.id === action.id);
      let newBasket = [...state.basket];
      if (index >= 0) {
        if (newBasket[index].amount > 1) {
          newBasket[index] = {
            ...newBasket[index],
            amount: newBasket[index].amount - 1,
          };
        } else {
          newBasket.splice(index, 1);
        }
      }
      return {
        ...state,
        basket: newBasket,
      };
    case Type.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

// const [state, dispatch] = useReducer(reducer, initialState);

//     <exp>
//         ...state: This spreads all the properties of the current state object (state) into the new object. It ensures that all other properties of the state are preserved without mutation.

// basket: This property is updated to be a new array constructed by spreading all the existing items from the current state.basket array, and then appending the action.item to the end of this new array. This ensures that we're creating a new array for basket instead of modifying the original one.
//     </exp>

// case Type.ADD_TO_BASKET:
//   return {
//     ...state,
//     basket: [...state.basket, action.item],
//   };

// default:
//   return state;
// }
