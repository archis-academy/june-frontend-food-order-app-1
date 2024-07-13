import HomePage from "./pages/HomePage/HomePage";
import Cart from "./components/Cart/Cart"; 
import "./app.scss"

function App() {
  return (
    <div className="app-container">
      <Cart/>
      <HomePage/>
    

    </div>
  );
}

export default App;
