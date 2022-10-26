import { combineReducers } from "redux";
import {
  productReducer,
  allProductsReducer,
  getCartReducer,
  showCart,
} from "./product";

const rootReducer = combineReducers({
  allProducts: allProductsReducer,
  productSelected: productReducer,
  cartProducts: getCartReducer,
  showCart: showCart,
});

export default rootReducer;
