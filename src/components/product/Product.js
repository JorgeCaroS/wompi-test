import { useSelector } from "react-redux";
import { useEffect } from "react";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { FiMinusSquare } from "react-icons/fi";
import { useDispatch } from "react-redux";
import {
  getAllProducts,
  getProductSelected,
  getCart,
} from "../../redux/actions/product";

function Product() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.productSelected.productSelected);
  const products = useSelector((state) => state.allProducts.allProducts);
  const cart = useSelector((state) => state.cartProducts.cartProducts);

  const handleQuantity = (e) => {
    const counter = Number(e.currentTarget.id);
    const updatedArray = products.map((item) =>
      product.name === item.name
        ? {
            ...item,
            quantity: item.quantity ? item.quantity + counter : 1,
          }
        : item
    );
    dispatch(getAllProducts(updatedArray));
    const productSelected = updatedArray.filter(
      (item) => item.name === product.name
    );
    dispatch(getProductSelected(productSelected[0]));
    const cartItems = updatedArray
      .map((item) => (item.quantity > 0 ? item : null))
      .filter((item) => item);
    dispatch(getCart(cartItems));
    localStorage.setItem("MyCart", JSON.stringify(cartItems));
  };

  return (
    <div className="product-container" key={product}>
      {product.quantity ? (
        <div className="product-quantity">
          <p>{product.quantity}</p>
        </div>
      ) : null}

      <img
        alt={product}
        src={require(`../../../src/media/${product.name}.jpg`)}
      />
      <div className="product-info">
        <div className="product-labels">
          <h3>{product.name}</h3>
          <h3 className="product-price">${product.price}</h3>
        </div>
        <div className="product-buttons">
          <FiMinusSquare
            color="purple"
            size={36}
            onClick={handleQuantity}
            id={-1}
          />
          <BsFillPlusSquareFill
            color="purple"
            size={30}
            onClick={handleQuantity}
            id={1}
          />
        </div>
      </div>
      <div className="product-description">
        <p>{product.description}</p>
      </div>
    </div>
  );
}

export default Product;
