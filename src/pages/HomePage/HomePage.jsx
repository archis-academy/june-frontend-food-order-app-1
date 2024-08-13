import Sidebar from "@/components/Sidebar/Sidebar";
import Header from "@/components/Header/Header";
import "./HomePage.scss";
import { useState, useEffect } from "react";
import img1 from "/pasta1.png"
import img2 from "/pasta2.png"
import Cart from "../../components/Cart/Cart";

import Payment from "../../components/Payment/Payment";

function HomePage() {
  const [openCart, setCartOpen] = useState(false);
  const [openPayment,setPaymentOpen] = useState(false);

  const [cartProducts, setCartProducts] = useState(
    JSON.parse(localStorage.getItem("cartProducts")) || []
  );


  //Add Cart Functions Start
  useEffect(() => {
    const hasQuantityProperty = cartProducts.every(product => product.quantity !== undefined);

    if (!hasQuantityProperty) {
      const updatedCartProducts = cartProducts.map((product) => ({
        ...product,
        quantity: product.quantity || 1,
      }));
      setCartProducts(updatedCartProducts);
    }
  }, [cartProducts]);


  const addToCart = (product) => {
    const isInCart = cartProducts.some((cartProduct) => {
      return parseInt(product.id) === parseInt(cartProduct.id)
    });

    if (isInCart) {
      const sameProduct = cartProducts.find((cartProduct) => {
        return parseInt(product.id) === parseInt(cartProduct.id)
      });

      sameProduct.quantity = sameProduct.quantity + 1;
      setCartProducts((prevProducts) =>
        prevProducts.map((prevProduct) =>
          prevProduct.id === product.id ? { ...prevProduct, quantity: sameProduct.quantity } : prevProduct
        )
      );
    }
    else {
      setCartProducts((prev) => [...prev, product]);
    }
  }

  useEffect(() => {
    localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
  }, [cartProducts]);
  //Use this for adding products to cart

  return (
    <div>
      <Sidebar />
      <div className="mainRoot">
        <Header openCart={openCart}  setCartOpen={setCartOpen} />
        <div  className={`${openCart ? "cart-payment-container" : "cart-payment-close"} ${openPayment ? "payment-open" : "payment-close"}`}>
          <Cart  openPayement={openPayment} setPaymentOpen={setPaymentOpen}  cartProducts={cartProducts} openCart={openCart} setCartOpen={setCartOpen} setCartProducts={setCartProducts} />
          <Payment openPayement={openPayment} setPaymentOpen={setPaymentOpen}/>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
