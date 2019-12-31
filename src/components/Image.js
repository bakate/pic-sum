import React, { useContext } from "react";
import { Context } from "../Context";
import PropTypes from "prop-types";
import useHover from "../hooks/useHover";

function Image({ className, image }) {
  const [hovered, ref] = useHover();
  const { toggleFavorite, addItem, cartItems, removeFromCart } = useContext(
    Context
  );

  const handleItems = () => {
    addItem(image);
  };

  function heartIcon() {
    if (image.isFavorite) {
      return (
        <i
          className="ri-heart-fill favorite"
          onClick={() => toggleFavorite(image.id)}
        />
      );
    } else if (hovered) {
      return (
        <i
          className="ri-heart-line favorite"
          onClick={() => toggleFavorite(image.id)}
        />
      );
    }
  }

  function shoppingIcon() {
    const alreadyIncart = cartItems.some(item => item.id === image.id);

    if (alreadyIncart) {
      return (
        <i
          className="ri-shopping-cart-fill cart"
          onClick={() => removeFromCart(image.id)}
        />
      );
    } else if (hovered) {
      return <i className="ri-add-circle-line cart" onClick={handleItems} />;
    }
  }

  return (
    <div ref={ref} className={`${className} image-container`}>
      <img src={image.url} className="image-grid" alt="" />
      {heartIcon()}
      {shoppingIcon()}
    </div>
  );
}

Image.propTypes = {
  className: PropTypes.string,
  image: PropTypes.shape({
    url: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool
  })
};

export default Image;
