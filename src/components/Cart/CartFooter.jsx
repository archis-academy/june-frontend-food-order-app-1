
const CartFooter = () => {
    return (
        <div className="cart-footer-container">
            <div className="cart-footer-info-container">
                <div className="cart-footer-money-container">
                    <p className="cart-footer-p"> Discount </p>
                    <p className="cart-footer-money-p"> $5 </p>
                </div>
                <div className="cart-footer-money-container">
                    <p className="cart-footer-p"> Subtotal </p>
                    <p className="cart-footer-money-p"> $10 </p>
                </div>
            </div>
            <button className="cart-footer-button"> Continue To Payment </button>
        </div>
    )
}

export default CartFooter;