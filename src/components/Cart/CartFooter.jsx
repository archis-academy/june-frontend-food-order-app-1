import { useState, useEffect } from "react";
import Modal from "react-modal";
import Payment from "../Payment/Payment";

// Modal.setAppElement("#root");

// const customStyles = {
//     overlay: {backgroundColor: "#000000b2;"},
//     content: {
//         position: "static",
//         top: "0",
//         left: "72%",
//         right: "0",
//         bottom: "0",
//         backgroundColor: "#1f1d2b",
//         border: "1px solid #1f1d2b",
//         padding: "10px 20px",
//         paddingTop: "24px",
//         overflowY: "auto",
//     },
// }

const CartFooter = ({openPayment,setPaymentOpen, cartContentProducts }) => {
   
  
    const [subtotal, setSubtotal] = useState(0);

    useEffect(() => {
        let updatedSubtotal = 0;
        cartContentProducts.map((product) => (
            updatedSubtotal += product.price * product.quantity
        ));
        setSubtotal(updatedSubtotal);
    }, [cartContentProducts])


    const paymentOpener = () => {
        setPaymentOpen(true);
    }

    return (
        <>
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
                    <button onClick={() => paymentOpener()} className="cart-footer-button"> Continue To Payment </button>
                </div>
            </div>
        </>

    )
}

export default CartFooter;