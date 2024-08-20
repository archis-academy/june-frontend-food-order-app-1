import ProductCard from "../ProductCard/ProductCard";
import SettingsHeader from "../SettingsHeader/SettingsHeader";
import { foods } from "../../db/foods";
import "../ProductManagment/ProductManagment.scss"
import CategoryTabs from "../CategoryTabs/CategoryTabs";
import { useState } from "react";
import ChangeButtons from "../ChangeButtons/ChangeButtons";
import AddDish from "../AddDish/AddDish";

function ProductsManagement({isAddDishOpen,setAddDishOpen}) {
  const [dishes] = useState(foods);
  const [filteredDishes, setFilteredDishes] = useState(dishes);
  const [filterParameters, setFilterParameters] = useState({
    orderType: "All",
    category: "all",
    searchQuery: "",
  });

  const addDishOpener = () => {
    setAddDishOpen(true);
  }

  return (
    <>
      <div className={isAddDishOpen ? "add-dish-container" : "add-dish-close"}>
        <AddDish  isAddDishOpen={isAddDishOpen} setAddDishOpen={setAddDishOpen}/>
      </div>
      <div className="management-container">
        <div className="header-sticky">
          <SettingsHeader />
          <CategoryTabs
            dishes={dishes}
            setFilteredDishes={setFilteredDishes}
            filterParameters={filterParameters}
            setFilterParameters={setFilterParameters}
          />
        </div>
        <div className="product-cards-container">

          <div onClick={() => addDishOpener()} className="add-dish-card">
            <span>+</span>
            <p>Add new dish</p>
          </div>
          {filteredDishes.map((food) => {
            return (
              <ProductCard
                key={food.id}
                image={food.image}
                description={food.description}
                price={food.price}
              />
            );
          })}
        </div>
        <div className="footer-sticky">
          <ChangeButtons />
        </div>
      </div>
    </>
  );
}
export default ProductsManagement;