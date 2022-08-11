import { CreateContext, useState, useContext, createContext } from "react";

const ShopContext = createContext();

export const StateContext = ({ children }) => {
  //Add data for our state
  const [quantity, setQuantity] = useState(1);

  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  //Increase product quantity
  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  //Decrease product quantity
  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => {
      if (prevQuantity - 1 < 1) return 1;
      return prevQuantity - 1;
    });
  };

  return (
    <ShopContext.Provider
      value={{
        quantity,
        increaseQuantity,
        decreaseQuantity,
        showCart,
        setShowCart,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useStateContext = () => useContext(ShopContext);
