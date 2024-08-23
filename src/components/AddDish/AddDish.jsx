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

    const ımageHandler = (event) => {
        setNewProduct((prevState) => ({
            ...prevState,
            image: event.target.value
        }));
    }

    const nameHandler = (event) => {
        setNewProduct((prevState) => ({
            ...prevState,
            name: event.target.value
        }));
    }

    const priceHandler = (event) => {
        setNewProduct((prevState) => ({
            ...prevState,
            price: event.target.value
        }));
    }

    const categoryHandler = (event) => {
        setNewProduct((prevState) => ({
            ...prevState,
            category: event.target.value
        }));
    }

    const addDishButton = () => {
        setFilteredDishes((prevState) => ([
           ...prevState,
           newProduct 
       ]));
    }

    return (
        <div className="add-dish-content-container">
            <div className="add-dish-content">
                <p className="add-dish-p"> Dish Image : </p>
                <input type="text" onChange={ımageHandler} className="add-dish-input" />
            </div>
            <div className="add-dish-content">
                <p className="add-dish-p"> Dish Name : </p>
                <input type="text" onChange={nameHandler} className="add-dish-input" />
            </div>
            <div className="add-dish-content">
                <p className="add-dish-p"> Dish Price : </p>
                <input type="text" onChange={priceHandler} className="add-dish-input" />
            </div>
            <div className="add-dish-content">
                <p className="add-dish-p"> Dish Category : </p>
                <select onChange={categoryHandler} className="add-dish-input" id="">
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