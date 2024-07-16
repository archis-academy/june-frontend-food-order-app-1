import Sidebar from "@/components/Sidebar/Sidebar";
import "./HomePage.scss";
import { useState,useEffect } from "react";
import img1 from "/pasta1.png"
import img2 from "/pasta2.png"
import Cart from "../../components/Cart/Cart";


function HomePage() {
   const products = [
     {
      id:1,
      img:img1,
      title: "Pasta 1",
      price: 3,
     },

     {
      id:2,
      img:img2,
      title: "Pasta 2",
      price: 5,
     },
   ]
   
   const [cartProducts, setCartProducts] = useState(
    JSON.parse(localStorage.getItem("cartProducts")) || []
   );
  
   const addToCart = (product) => {
    setCartProducts((prev) => [...prev,product]);
   }
    
   useEffect(() => {
    localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
   },[cartProducts]);
   
  
  return (
    <div>
      <Sidebar />
      {cartProducts.length > 0 ? (
        <Cart cartProducts={cartProducts} setCartProducts={setCartProducts} />
      ) : (
        <div></div>
      )}
      <div className="mainRoot">
        {/* <h1 style={{ height: "1600px" }}>Homepage example</h1> */}
        <div>
        {products.map((product) => (
           <div key={product.id}>
             <img  src={product.img} />
             <p > {product.title}</p>
             <p >{product.price}</p>
             <button onClick={() => addToCart(product)}> Add To Cart </button>
           </div>
         ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
