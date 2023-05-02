/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import DescountBar from "../../components/DescountBar/index.jsx";
import Footer from "../../components/Footer/index.jsx";
import Header from "../../components/Header/index.jsx";
import {
  ContainerCart,
  ContainerCartPage,
  ContainerLeft,
  ContainerRight,
  ContainerSubtotal,
  ContainerToCheckout,
  ContainerTotal,
  Coupon,
  Product,
  SectionBreak,
  TableDescriptions
} from "./style.jsx";
import { IoClose } from "react-icons/io5";
import { CartContext } from "../../contexts/cartContext.js";
import closetChicApi from "../../service/closetChic.api.js";
import { UserContext } from "../../contexts/userContext.js";
import coupons from "../../constants/coupons.js";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function CartPage() {
  const { cart, setCart, coupon, setCoupon } = useContext(CartContext);
  const { token } = useContext(UserContext);
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    async function fetchData() {
      if (token && cart?.length === 0) {
        const { products } = await closetChicApi.getCartProducts(token);
        setCart(products);
        setSubtotal(getSubtotal(products));
      } else {
        setSubtotal(getSubtotal(cart));
      }
    }
    fetchData();
  }, []);

  async function handleChangeCart(e, index) {
    const newCart = [...cart];
    const newQuantity = Number(e.target.value);
    newCart[index].quantity = newQuantity;

    setCart(newCart);

    if (newQuantity >= 1) {
      setSubtotal(getSubtotal(newCart));
      await closetChicApi.postCartProducts(newCart, token);
    }
  }

  function handleChangeCoupon(e) {
    const newObj = { ...coupon };
    newObj.name = e.target.value;
    setCoupon(newObj);
  }

  function handleDiscount() {
    if (coupons.includes(coupon.name)) {
      const obj = { ...coupon };
      obj.value = subtotal * 0.2;
      setCoupon(obj);
    }
  }

  function getSubtotal(arr) {
    let total = 0;
    arr?.forEach(prod => total += (prod.quantity * prod.price));
    return total;
  }

  function deleteItem(index) {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
    setSubtotal(getSubtotal(newCart));
    closetChicApi.postCartProducts(newCart, token);
  }

  return (
    <>
      <DescountBar />
      <Header />
      <motion.div
        initial={{
          opacity: 0,
          duration: 0.5,
          ease: [0.43, 0.13, 0.23, 0.96]
        }}
        animate={{
          opacity: 1,
          transition: {
            delay: 0.1,
            duration: 0.5,
            ease: [0.43, 0.13, 0.23, 0.96]
          }
        }}
        exit={{
          opacity: 0,
          duration: 0.5,
          ease: [0.43, 0.13, 0.23, 0.96]
        }}>
        <ContainerCartPage>
          <ContainerLeft>
            <h1>Carrinho de compras</h1>
            <SectionBreak />
            <TableDescriptions>
              <h2 style={{ width: "25px" }}></h2>
              <h2 style={{ width: "172px" }}></h2>
              <h2 style={{ width: "150px" }}>Produto</h2>
              <h2 style={{ width: "80px", textAlign: "center" }}>Preço</h2>
              <h2 style={{ width: "63px" }}>Quantidade</h2>
              <h2 style={{ width: "63px", textAlign: "end" }}>Subtotal</h2>
            </TableDescriptions>
            <SectionBreak />
            <ContainerCart>
              {cart && cart.length !== 0 ? cart.map((product, index) => (
                <Product key={index}>
                  <IoClose size={"25px"} style={{ cursor: "pointer" }} onClick={() => deleteItem(index)} />
                  <img src={product.image} alt={product.name} />
                  <strong>
                    <p>{product.name}</p>
                    <p style={{ width: "30px" }}>&nbsp;&nbsp;&nbsp;{product.size.toUpperCase()}</p>
                  </strong>
                  <p>
                    {product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                  </p>
                  <input
                    type="number"
                    name="quantity"
                    value={product.quantity}
                    min={1}
                    onChange={e => handleChangeCart(e, index)} />
                  <span>
                    {(product.quantity * product.price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                  </span>
                </Product>
              )) : "Você não tem produtos no seu carrinho :("}
            </ContainerCart>
          </ContainerLeft>
          <ContainerRight>
            <h1>Total do carrinho</h1>
            <SectionBreak />
            <ContainerSubtotal>
              <h2>Subtotal</h2>
              <h2>{subtotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h2>
            </ContainerSubtotal>
            <SectionBreak />
            <Coupon>
              <input type="text" name="coupon" placeholder="Código do cupom" value={coupon.name} onChange={handleChangeCoupon} />
              <button onClick={handleDiscount}>Aplicar Cupom</button>
            </Coupon>
            <SectionBreak />
            <ContainerToCheckout>
              <ContainerTotal>
                <p>Total</p>
                <div>
                  <p>{subtotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                  <p style={{ color: "#FF0E0E" }}>{`- ${(coupon.value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`}</p>
                  <p>{(subtotal - coupon.value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                </div>
              </ContainerTotal>
              <Link to={'/checkout'}><button>Prosseguir para o check-out</button></Link>
            </ContainerToCheckout>
          </ContainerRight>
        </ContainerCartPage>
      </motion.div>
      <Footer />
    </>
  );
}