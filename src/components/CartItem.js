import React, { useContext } from "react";
import { Context } from "../Context";
import PropTypes from "prop-types";
import useHover from "../hooks/useHover";

function CartItem({ item }) {
  const [hovered, ref] = useHover();
  const { removeFromCart } = useContext(Context);
  const iconClassName = hovered ? "fill" : "line";
  return (
    <div className="cart-item">
      <i
        className={`ri-delete-bin-${iconClassName}`}
        onClick={() => removeFromCart(item.id)}
        ref={ref}
      />
      <img src={item.url} width="130px" alt={item} />
      <p>5.99€</p>
    </div>
  );
}
CartItem.propTypes = {
  item: PropTypes.shape({
    url: PropTypes.string.isRequired
  })
};
export default CartItem;
