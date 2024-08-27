import React, { useState } from "react";
import "./AddDish.scss"


const AddDish = ({ setFilteredDishes,filteredDishes, isAddDishOpen, setAddDishOpen }) => {

    const closeAddDish = () => {
        setAddDishOpen(false);
    }
    console.log(filteredDishes.length)


    const lastId = filteredDishes.length + 1;

    const [newProduct, setNewProduct] = useState({
        id: lastId,
        name: "",
        price: 0,
        category: "",
        image: "",
        description:""
    });

    const changeHandler = (event) => {
        const {name , value} = event.target;
        
       setNewProduct((prevState) => ({
           ...prevState,
           [name] : value 
        }));   
    }


    const addDishButton = () => {
        event.preventDefault();
        setFilteredDishes((prevState) => ([
            newProduct ,
           ...prevState,
       ]));
    }

    return (
        <div className="add-dish-content-container">
            <div className="add-dish-content">
                <p className="add-dish-p"> Dish Image : </p>
                <input type="text" name="image" onChange={changeHandler} className="add-dish-input" />
            </div>
            <div className="add-dish-content">
                <p className="add-dish-p"> Dish Name : </p>
                <input type="text" name="name" onChange={changeHandler} className="add-dish-input" />
            </div>
            <div className="add-dish-content">
                <p className="add-dish-p"> Dish Price : </p>
                <input type="text" name="price" onChange={changeHandler} className="add-dish-input" />
            </div>
            <div className="add-dish-content">
                <p className="add-dish-p"> Dish Category : </p>
                <select name="category" onChange={changeHandler} className="add-dish-input" id="">
                    <option className="add-dish-option" value=""> All </option>
                    <option className="add-dish-option" value=""> Appetizer </option>
                    <option className="add-dish-option" value=""> Dessert </option>
                    <option className="add-dish-option" value=""> Soup </option>
                    <option className="add-dish-option" value=""> Sushi </option>
                </select>
            </div>
            <div className="add-dish-buttons">
                <button onClick={() => closeAddDish()} className="cancel-button"> Cancel </button>
                <button onClick={() => addDishButton()} className="add-button"> Add Dish </button>
            </div>
        </div>
    )
}

export default AddDish;