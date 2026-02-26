// ==================== Context (src/context/CartWishlistContext.jsx) ====================
import React, { createContext, useContext, useReducer, useEffect } from 'react';

// Initial state
const initialState = {
  cart: [],
  wishlist: [],
  compared: [] // optional
};

// Load from localStorage on init
const loadState = () => {
  if (typeof window !== 'undefined') {
    const savedCart = localStorage.getItem('cart');
    const savedWish = localStorage.getItem('wishlist');
    return {
      cart: savedCart ? JSON.parse(savedCart) : [],
      wishlist: savedWish ? JSON.parse(savedWish) : [],
      compared: []
    };
  }
  return initialState;
};

const store = createContext();
const { Provider } = store;

const reducer = (state, action) => {
  let newState;
  switch (action.type) {
    case 'ADD_TO_CART':
      const existing = state.cart.find(item => item.id === action.payload.id);
      if (existing) {
        newState = {
          ...state,
          cart: state.cart.map(item =>
            item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
          )
        };
      } else {
        newState = { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
      }
      break;
    case 'REMOVE_FROM_CART':
      newState = { ...state, cart: state.cart.filter(item => item.id !== action.payload) };
      break;
    case 'UPDATE_QTY':
      newState = {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload.id ? { ...item, qty: action.payload.qty } : item
        )
      };
      break;
    case 'TOGGLE_WISHLIST':
      const inWish = state.wishlist.find(item => item.id === action.payload.id);
      newState = {
        ...state,
        wishlist: inWish
          ? state.wishlist.filter(item => item.id !== action.payload.id)
          : [...state.wishlist, action.payload]
      };
      break;
    case 'CLEAR_CART':
      newState = { ...state, cart: [] };
      break;
    default:
      newState = state;
  }
  // Persist to localStorage
  if (typeof window !== 'undefined') {
    localStorage.setItem('cart', JSON.stringify(newState.cart));
    localStorage.setItem('wishlist', JSON.stringify(newState.wishlist));
  }
  return newState;
};

export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState, loadState);
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export const useStateContext = () => useContext(store);