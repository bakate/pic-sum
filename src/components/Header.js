import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context";

function Header() {
  const { cartItems } = useContext(Context);

  const cartName = cartItems.length > 0 ? "fill" : "line";
  return (
    <header>
      <nav>
        <Link to="/">
          <h2>Pic Some</h2>
        </Link>
        <Link to="/cart">
          <i className={`ri-shopping-cart-${cartName} ri-fw ri-2x`} />
          <i className={`ri-shopping-cart-l${cartName} ri-fw ri-2x`} />
        </Link>
      </nav>
    </header>
  );
}

export default Header;
