const foods = [
  {
    id: 1,
    name: "Burger",
    price: 10,
    description: "Tasty",
    image: "https://cdn.auth0.com/blog/whatabyte/burger-sm.png",
  },
  {
    id: 2,
    name: "Pizza",
    price: 15,
    description: "Cheesy",
    image: "https://cdn.auth0.com/blog/whatabyte/pizza-sm.png",
  },
  {
    id: 3,
    name: "Tea",
    price: 5,
    description: "Informative",
    image: "https://cdn.auth0.com/blog/whatabyte/tea-sm.png",
  },
];

const orders = [
  {
    id: 1,
    customerName: "Eren Jaegar",
    menu: "Peynirli PizzaSpicy seasoned seafood noodles ",
    totalPayment: 125,
    status: "complated",
  },
  {
    id: 2,
    customerName: "Reiner Braunn",
    menu: "Salted Pasta with mushroom sauce",
    totalPayment: 145,
    status: "Preparing",
  },
  {
    id: 3,
    customerName: "Levi Ackerman",
    menu: "Beef dumpling in hot and sour soup",
    totalPayment: 105,
    status: "Pending",
  },
  {
    id: 4,
    customerName: "Historia Reiss",
    menu: "Hot spicy fried rice with omelet",
    totalPayment: 45,
    status: "completed",
  },
  {
    id: 5,
    customerName: "Hanji Zoe",
    menu: "Hot spicy fried rice with omelet",
    totalPayment: 245,
    status: "Completed",
  },
];
export { foods, orders };
