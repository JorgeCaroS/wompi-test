import * as type from "./types";

const initialState = {
  productSelected: [],
  allProducts: [],
  cartProducts: [],
};

export function productReducer(state = initialState, action) {
  switch (action.type) {
    case type.PRODUCT_SELECTED:
      return {
        ...state,
        productSelected: action.payload,
      };
    default:
      return state;
  }
}

export function allProductsReducer(state = initialState, action) {
  switch (action.type) {
    case type.ALL_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload,
      };
    default:
      return state;
  }
}

export function getCartReducer(state = initialState, action) {
  switch (action.type) {
    case type.GET_CART:
      return {
        ...state,
        cartProducts: action.payload,
      };
    default:
      return state;
  }
}

export function showCart(state = initialState, action) {
  switch (action.type) {
    case type.SHOW_CART:
      return {
        ...state,
        showCart: action.payload,
      };
    default:
      return state;
  }
}
