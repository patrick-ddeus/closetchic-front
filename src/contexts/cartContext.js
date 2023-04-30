import { createContext, useContext, useEffect, useState } from "react";
import closetChicApi from "../service/closetChic.api.js";
import { UserContext } from "./userContext.js";

export const CartContext = createContext();

export default function CartContextProvider({ children }) {
  const initValue = JSON.parse(localStorage.getItem("cart")) || []
  const [cart, setCart] = useState(initValue);
  const [coupon, setCoupon] = useState({ name: "", value: 0 });
  const { token } = useContext(UserContext);

  useEffect(() => {
    async function fetchData() {
      if (token) {
        if (cart && cart.length === 0) {
          const products = await closetChicApi.getCartProducts(token);
          setCart(products);
        } else {
          closetChicApi.postCartProducts(cart, token);
        }
      }
    }
    fetchData();
  }, [token]);

  return (
    <CartContext.Provider value={{ cart, setCart, coupon, setCoupon }}>
      {children}
    </CartContext.Provider>
  );

}