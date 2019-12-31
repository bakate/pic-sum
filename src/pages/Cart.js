import React, { useContext, useState } from "react";
import { Context } from "../Context";
import CartItem from "../components/CartItem";

function Cart() {
  const [buttontext, setButtonText] = useState("Place Order Papi");
  const { cartItems, emptyCart } = useContext(Context);
  const cartItemElements = cartItems.map(item => (
    <CartItem key={item.id} item={item} />
  ));

  function placeOrder() {
    setButtonText("Ordering Papi ...");
    setTimeout(() => {
      console.log("Ordering placed");
      setButtonText("Place Order papi");
      emptyCart();
    }, 3000);
  }

  const total = cartItems.length * 5.99;
  const totalDisplay = total.toLocaleString("fr", {
    style: "currency",
    currency: "EUR"
  });

  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {cartItemElements}
      <p className="total-cost">Total: {totalDisplay} </p>
      {cartItems.length ? (
        <div className="order-button">
          <button type="button" onClick={placeOrder}>
            {buttontext}
          </button>
        </div>
      ) : (
        <h3 style={{ textAlign: "center" }}>Your cart is Empty For Now</h3>
      )}
    </main>
  );
}

export default Cart;
