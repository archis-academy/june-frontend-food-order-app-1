import { useState, useEffect } from "react";

const CartFooter = ({cartContentProducts}) => {
    const [subtotal, setSubtotal] = useState(0);
  
    useEffect(() => {
        let updatedSubtotal = 0;
        cartContentProducts.map((product) => (
            updatedSubtotal += product.price * product.quantity
        ));
        setSubtotal(updatedSubtotal);
    }, [cartContentProducts])

  

    return (
        <div className="cart-footer-container">
            <div className="cart-footer-info-container">
                <div className="cart-footer-money-container">
                    <p className="cart-footer-p"> Discount </p>
                    <p className="cart-footer-money-p"> $5 </p>
                </div>
                <div className="cart-footer-money-container">
                    <p className="cart-footer-p"> Subtotal</p>
                    <p className="cart-footer-money-p"> {subtotal} </p>
                </div>
                <button onClick={ () => openPayment} className="cart-footer-button"> Continue To Payment </button>
            </div>
        </div>
    )
}

export default CartFooter;