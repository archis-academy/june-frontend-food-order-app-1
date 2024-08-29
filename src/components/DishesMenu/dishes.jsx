/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "./dishes.scss";
import { foods, categories } from "../../db/foods";

const Menu = ({ cartProducts, setCartProducts }) => {
	const [filter, setFilter] = useState("all");
	const [serviceType, setServiceType] = useState("dine in");
	const [currentFoods, setCurrentFoods] = useState(foods);
	const [timer, setTimer] = useState(Date.now());

	//Add Cart Functions Start

	const addToCart = (product) => {
		const isInCart = cartProducts.some((cartProduct) => {
			return parseInt(product.id) === parseInt(cartProduct.id)
		});

		if (isInCart) {
			const sameProduct = cartProducts.find((cartProduct) => {
				return parseInt(product.id) === parseInt(cartProduct.id)
			});

			sameProduct.quantity = sameProduct.quantity + 1;
			setCartProducts((prevProducts) =>
				prevProducts.map((prevProduct) =>
					prevProduct.id === product.id ? { ...prevProduct, quantity: sameProduct.quantity } : prevProduct
				)
			);
		}
		else {
			setCartProducts((prev) => [...prev, product]);
		}
	}

	useEffect(() => {
		localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
	}, [cartProducts]);
	//Use this for adding products to cart

	const filteredFoods =
		filter === "all"
			? currentFoods
			: currentFoods.filter((food) => food.category.key === filter);



	const handleServiceTypeChange = (type) => {
		setServiceType(type);
	};

	const rows = [];
	for (let i = 0; i < filteredFoods.length; i += 3) {
		rows.push(filteredFoods.slice(i, i + 3));
	}

	return (
		<div className="menu">
			<div className="title">
				<h2>Choose Dishes</h2>
				<div className="menu-selects">
					<select
						className="menu-filter"
						onChange={(e) => setFilter(e.target.value)}
					>
						{categories.map((category) => (
							<option key={category.id} value={category.key}>
								{category.name}
							</option>
						))}
					</select>
					<select
						className="service-type"
						onChange={(e) => handleServiceTypeChange(e.target.value)}
					>
						<option value="dine in">Dine In</option>
						<option value="togo">To Go</option>
						<option value="delivery">Delivery</option>
					</select>
				</div>

			</div>
			<div className="dishes-container">
				{filteredFoods.map((food, rowIndex) => (

					<div
						key={rowIndex}
						className="dish"
					>
						<img src={food.image} alt={food.name} />
						<div className="overlay-div"></div>
						<div className="dishes-text-container">
							<h3>{food.name}</h3>
							<p>{food.description}</p>
							<div className="price-box">
								<span>
									{" "}
									<p> $ {food.price}</p>
								</span>
							</div>
						</div>
						<div onClick={() => addToCart(food)} className="add-to-cart">Add to Cart</div> {/* Add this */}
					</div>

				))}
			</div>
		</div>
	);
};

export default Menu;
