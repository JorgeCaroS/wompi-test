import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { products } from "../../backend/products";
import {
  getProductSelected,
  getAllProducts,
  getCart,
  showCart,
} from "../../redux/actions/product";

const Store = (props) => {
  const dispatch = useDispatch();
  const AllProducts = useSelector((state) => state.allProducts.allProducts);

  useEffect(() => {
    dispatch(getAllProducts(products));
  }, []);

  useEffect(() => {
    const cloneProducts = dispatch(getAllProducts(products)).payload;
    const localCart = JSON.parse(localStorage.getItem("MyCart"));

    if (localCart) {
      dispatch(getCart(localCart));
      let result = cloneProducts.map((product) => {
        let matching_result = localCart.filter((f) => f.name == product.name);
        return matching_result[0]
          ? { ...product, quantity: matching_result[0].quantity }
          : product;
      });
      dispatch(getAllProducts(result));
    }
  }, []);

  const handleProduct = (e) => {
    const productSelected = products.filter(
      (product) => product.name === e.target.alt
    );
    dispatch(getProductSelected(productSelected[0]));
    dispatch(showCart(false));
  };

  return (
    <div className="store-container">
      <div className="section-header">
        <div className="market-icon">
          <HiOutlineShoppingBag color="white" size={30} />
        </div>
        <h1>Store</h1>
      </div>
      <div className="store-gallery">
        {AllProducts.map((product) => (
          <div
            className="store-product"
            key={product.name}
            onClick={handleProduct}
          >
            <img
              alt={product.name}
              src={require(`../../../src/media/${product.name}.jpg`)}
            />

            {product.quantity ? (
              <div className="product-quantity-gallery">
                <p>{product.quantity}</p>{" "}
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Store;
