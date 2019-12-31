import React, { useState, useEffect } from "react";
const Context = React.createContext();

function ContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [pix, setPix] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const url =
    "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";
  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then(res => res.json())
      .then(data => setPix(data));
    setLoading(false);
  }, []);

  function toggleFavorite(id) {
    const updatedArr = pix.map(photo => {
      if (photo.id === id) {
        return { ...photo, isFavorite: !photo.isFavorite };
      }
      return photo;
    });
    setPix(updatedArr);
  }

  function addItem(newItem) {
    setCartItems(prevItems => [...prevItems, newItem]);
  }

  function removeFromCart(id) {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  }
  function emptyCart() {
    setCartItems([]);
  }

  return (
    <Context.Provider
      value={{
        pix,
        toggleFavorite,
        addItem,
        cartItems,
        removeFromCart,
        emptyCart,
        loading
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
