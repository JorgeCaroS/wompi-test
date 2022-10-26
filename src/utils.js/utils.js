export const calculateTotal = (cart) => {
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    total = total + cart[i].price * cart[i].quantity;
  }
  return total;
};
