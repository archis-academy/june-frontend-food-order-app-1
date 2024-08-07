/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import './dishes.scss';
import { foods, categories } from '../../db/foods';

const Menu = () => {
    const [filter, setFilter] = useState("all");
    const [serviceType, setServiceType] = useState("dine in");
    const [currentFoods, setCurrentFoods] = useState(foods);
    const [timer, setTimer] = useState(Date.now());

   
    const filteredFoods = filter === "all" ? currentFoods : currentFoods.filter(food => food.category.key === filter);

    const handleAddToCart = (food) => {
        console.log(`${food.name} added to cart`);
    };

    const handleServiceTypeChange = (type) => {
        setServiceType(type);
        console.log(`Service type set to ${type}`);
    };


   
    const rows = [];
    for (let i = 0; i < filteredFoods.length; i += 3) {
        rows.push(filteredFoods.slice(i, i + 3));
    }

    return (
        <div className="menu">
            <div className="title">
                <h2>Choose Dishes</h2>
                <select className='menu-filter' onChange={(e) => setFilter(e.target.value)}>
                    {categories.map(category => (
                        <option key={category.id} value={category.key}>
                            {category.name}
                        </option>
                    ))}
                </select>
                <select className='service-type' onChange={(e) => handleServiceTypeChange(e.target.value)}>
                    <option value="dine in">Dine In</option>
                    <option value="togo">To Go</option>
                    <option value="delivery">Delivery</option>
                </select>
            </div>
            <div className="dishes-container">
                {rows.map((row, rowIndex) => (
                    <div className="row" key={rowIndex}>
                        {row.map((food, index) => (
                            <div className="dish" key={index} onClick={() => handleAddToCart(food)}>
                                <div className="background-overlay"></div>
                                <img src={food.image} alt={food.name} />
                                <h3>{food.name}</h3>
                                <p>{food.description}</p>
                                <p>Price: ${food.price}</p>
                                <div className="add-to-cart">Add to Cart</div> {/* Add this */}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Menu;
