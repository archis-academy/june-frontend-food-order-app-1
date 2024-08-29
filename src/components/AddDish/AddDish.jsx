import React, { useState, useEffect } from "react";
import "./AddDish.scss"

const AddDish = ({ setDishes, dishes, isAddDishOpen, setAddDishOpen }) => {

    const closeAddDish = () => {
        setAddDishOpen(false);
    }

    const lastId = dishes.length;

    const [newProduct, setNewProduct] = useState({
        id: lastId,
        name: "",
        price: 0,
        category: "",
        image: "",
        description: ""
    });

    useEffect(() => {
        setNewProduct((prevState) => ({
            ...prevState,
            id: lastId + 1,
        }));
    }, [dishes]);

    const changeHandler = (event) => {
        const { name, value } = event.target;

        setNewProduct((prevState) => ({
            ...prevState,
            [name]: value
        }));
    }

    const priceHandler = (event) => {
        setNewProduct((prevState) => ({
            ...prevState,
            price: parseInt(event.target.value)
        }));
    }

    const addDishButton = () => {
        event.preventDefault();
        setDishes((prevState) => ([
            newProduct,
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
                <p className="add-dish-p"> Dish <br /> Description : </p>
                <input type="text" name="description" onChange={changeHandler} className="add-dish-input" />
            </div>
            <div className="add-dish-content">
                <div className="add-dish-double-container">
                    <p className="add-dish-p"> Dish <br /> Price : </p>
                    <input type="text" name="price" onChange={priceHandler} className="add-dish-input add-dish-price" />
                </div>
                <div className="add-dish-double-container">
                    <p className="add-dish-p"> Dish <br /> Category : </p>
                    <select name="category" onChange={changeHandler} className="add-dish-input add-dish-category" id="">
                        <option className="add-dish-option" value="all"> All </option>
                        <option className="add-dish-option" value="appetizer"> Appetizer </option>
                        <option className="add-dish-option" value="dessert"> Dessert </option>
                        <option className="add-dish-option" value="soup"> Soup </option>
                        <option className="add-dish-option" value="sushi"> Sushi </option>
                    </select>
                </div>

            </div>
            <div className="add-dish-buttons">
                <button onClick={() => closeAddDish()} className="cancel-button"> Cancel </button>
                <button onClick={() => addDishButton()} className="add-button"> Add Dish </button>
            </div>
        </div>
    )
}

export default AddDish;