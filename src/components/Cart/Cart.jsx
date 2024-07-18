import CartHeader from "./CartHeader";
import "./cart.scss"
import CartContent from "./CartContent";
import CartFooter from "./CartFooter";

const Cart = ({cartProducts,setCartProducts}) => {
   
    return (
     <div className="cart-all-container">
       <div className="cart-container">
        <CartHeader/>
        <CartContent cartProducts={cartProducts} setCartProducts={setCartProducts}/>
        <CartFooter/>
       </div>
     </div> 
     
    );
};

export default Cart;