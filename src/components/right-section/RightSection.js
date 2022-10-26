import { useSelector } from "react-redux";
import { BsCart4 } from "react-icons/bs";
import Product from "../product/Product";
import Cart from "../cart/Cart";
import { useDispatch } from "react-redux";
import { showCart } from "../../redux/actions/product";
import { calculateTotal } from "../../utils.js/utils";

function RightSection() {
  const product = useSelector((state) => state.productSelected.productSelected);
  const displayCart = useSelector((state) => state.showCart.showCart);
  const cart = useSelector((state) => state.cartProducts.cartProducts);
  const dispatch = useDispatch();

  const cartTotal = calculateTotal(cart);

  const handleCart = () => {
    dispatch(showCart(true));
  };

  const closeCart = () => {
    dispatch(showCart(false));
  };
  return (
    <div className="right-section">
      <div className="section-header-right">
        <div className="market-icon-right" onClick={handleCart}>
          <BsCart4 color="white" size={30} />
          <p>${cartTotal}</p>
        </div>
        {product && !displayCart ? (
          <h1>Product</h1>
        ) : displayCart ? (
          <h1>Shopping Cart</h1>
        ) : null}
      </div>
      {product && !displayCart ? (
        <Product />
      ) : displayCart ? null : (
        <label>Please choose a product on the left.</label>
      )}
      {displayCart ? <Cart /> : null}
    </div>
  );
}

export default RightSection;
