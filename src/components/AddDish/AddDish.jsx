import React from "react";
import "./AddDish.scss"


const AddDish = ({isAddDishOpen,setAddDishOpen}) => {

   const closeAddDish = () => {
     setAddDishOpen(false);
   }

    return (
        <div className="add-dish-content-container">
            <div className="add-dish-content">
                <p className="add-dish-p"> Dish Image : </p>
                <input type="text" className="add-dish-input" />
            </div>
            <div className="add-dish-content">
                <p className="add-dish-p"> Dish Name : </p>
                <input type="text" className="add-dish-input" />
            </div>
            <div className="add-dish-content">
                <p className="add-dish-p"> Dish Price : </p>
                <input type="text" className="add-dish-input" />
            </div>
            <div className="add-dish-buttons">
               <button onClick={() => closeAddDish()} className="cancel-button"> Cancel </button>
               <button  className="add-button"> Add Dish </button>
            </div>
        </div>
    )
}

export default AddDish;