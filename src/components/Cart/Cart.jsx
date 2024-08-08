import "./cart.scss"
import CartContent from "./CartContent";
import CartHeader from "./CartHeader";
import { useState } from "react";

const Cart = ({openCart, setCartOpen, cartProducts, setCartProducts }) => {
  const [paymentPage, setPaymentPage] = useState(false);
  
  const openPayment = () => {
      setPaymentPage(true);
  }

  return (
    <>
      {/* <div className={openCart ? "cart-all-container" : "cart-close"}> */}
      <div className="cart-all-container">

        <div className="cart-container">
          <CartHeader openCart={openCart} setCartOpen={setCartOpen}/>
          <CartContent cartProducts={cartProducts} setCartProducts={setCartProducts} />
        </div>
        <div className="cart-payment-container">
           
        </div>
      </div>

    </>

  );
};

export default Cart;