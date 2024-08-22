import React, { useState } from "react";
import "./AddDish.scss"


const AddDish = ({ dishes, isAddDishOpen, setAddDishOpen }) => {

    const closeAddDish = () => {
        setAddDishOpen(false);
    }

    const [newProduct, setNewProdduct] = useState({
        id: "",
        name: "",
        price: 0,
        category: "",
        image: ""
    });

    const ımageHandler = (event) => {
        setNewProdduct((prevState) => ({
            ...prevState,
            image: event.target.value
        }));
    }

    const nameHandler = (event) => {
        setNewProdduct((prevState) => ({
            ...prevState,
            name: event.target.value
        }));
    }

    const priceHandler = (event) => {
        setNewProdduct((prevState) => ({
            ...prevState,
            price: event.target.value
        }));
    }

    const categoryHandler = (event) => {
        setNewProdduct((prevState) => ({
            ...prevState,
            price: event.target.value
        }));
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
                <button className="add-button"> Add Dish </button>
            </div>
        </div>
    )
}

export default AddDish;