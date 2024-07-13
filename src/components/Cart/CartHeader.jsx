import Button from "../Button/Button";
import { useState } from "react";

function CartHeader() {

   const [selectedButton, setSelectedButton] = useState("cartButton1");

   const handleCartButtonClick = (button) => {
    setSelectedButton(button);
   };

    return(
      <div className="cart-header-container">
        <h2 className="cart-header-title">Orders</h2>
        <div className="cart-header-buttons-container"> 
           <button className={selectedButton === "cartButton1" ? "cart-header-selected-button" : "cart-header-button"}  onClick={() => handleCartButtonClick("cartButton1")}> Dine In </button>
           <button className={selectedButton === "cartButton2" ? "cart-header-selected-button" : "cart-header-button"} onClick={() => handleCartButtonClick("cartButton2")}> To Go </button>
           <button className={selectedButton === "cartButton3" ? "cart-header-selected-button" : "cart-header-button"}  onClick={() => handleCartButtonClick("cartButton3")}> Delivery </button>
        </div>
        <div className="cart-header-titles-container">
          <p className="cart-header-p"> Item </p>
          <div className="cart-left-titles-container">
            <p className="cart-header-p"> Qty </p>
            <p className="cart-header-p"> Price </p>
          </div>
        </div>
      </div>  
    );
};

export default CartHeader;