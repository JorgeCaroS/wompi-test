import * as type from "../reducers/types";

export const getProductSelected = (product) => ({
  type: type.PRODUCT_SELECTED,
  payload: product,
});

export const getAllProducts = (products) => ({
  type: type.ALL_PRODUCTS,
  payload: products,
});

export const getCart = (product) => ({
  type: type.GET_CART,
  payload: product,
});

export const showCart = (product) => ({
  type: type.SHOW_CART,
  payload: product,
});
