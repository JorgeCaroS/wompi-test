import { useSelector } from "react-redux";
import { calculateTotal } from "../../utils.js/utils";

function Cart() {
  const cart = useSelector((state) => state.cartProducts.cartProducts);

  const cartTotal = calculateTotal(cart);

  return (
    <div className="cart-container">
      {cart.map((item) => (
        <div className="cart-item" key={item.name}>
          <div className="cart-quantity">
            <p>{item.quantity}</p>
          </div>
          <img
            alt={item.name}
            src={require(`../../../src/media/${item.name}.jpg`)}
          />
        </div>
      ))}
      <div className="cart-total">
        <h2 className="total-label">Total: </h2>
        <h2 className="total-value">${cartTotal}</h2>
      </div>

      <form
        action="https://checkout.wompi.co/p/"
        method="GET"
        target="framename"
      >
        <input
          type="hidden"
          name="public-key"
          value="pub_test_JvohDqaePXFJm6PtXHAfr1ZMWX384d5p"
        />
        <input type="hidden" name="currency" value="COP" />
        <input type="hidden" name="amount-in-cents" value={cartTotal * 100} />
        <input type="hidden" name="reference" value="REFERENCIA_DE_PAGO" />
        <button type="submit" className="wompi-button">
          Paga con Wompi
        </button>
      </form>

      {/* <form>
        <script
          src="https://checkout.wompi.co/widget.js"
          data-render="button"
          data-public-key="pub_test_JvohDqaePXFJm6PtXHAfr1ZMWX384d5p"
          data-currency="COP"
          data-amount-in-cents="4950000"
          data-reference="4XMPGKWWPKWQ"
          data-signature:integrity="37c8407747e595535433ef8f6a811d853cd943046624a0ec04662b17bbf33bf5"
        ></script>
      </form> */}
    </div>
  );
}

export default Cart;
