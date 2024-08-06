export const categories = [
  {
    id: 1,
    name: "All",
    key: "all",
  },

  {
    id: 2,
    name: "Cold Dishes",
    key: "cold-dishes",
  },

  {
    id: 3,
    name: "Grill",
    key: "grill",
  },

  {
    id: 4,
    name: "Appetizer",
    key: "appetizer",
  },
  {
    id: 5,
    name: "Dessert",
    key: "dessert",
  },
  {
    id: 6,
    name: "Soup",
    key: "soup",
  },
];

const [coldDishes, grill, appetizer, dessert, soup] = categories;
export const foods = [
  {
    id: 1,
    name: "Burger",
    price: 10,
    description: "Tasty",
    image: "https://cdn.auth0.com/blog/whatabyte/burger-sm.png",
    category: soup,
  },
  {
    id: 2,
    name: "Pizza",
    price: 15,
    description: "Cheesy",
    image: "https://cdn.auth0.com/blog/whatabyte/pizza-sm.png",
    category: grill,
  },
  {
    id: 3,
    name: "Tea",
    price: 5,
    description: "Informative",
    image: "https://cdn.auth0.com/blog/whatabyte/tea-sm.png",
    category: appetizer,
  },
  {
    id: 4,
    name: "Tea",
    price: 5,
    description: "Informative",
    image: "https://cdn.auth0.com/blog/whatabyte/tea-sm.png",
    category: dessert,
  },
  {
    id: 5,
    name: "Tea",
    price: 5,
    description: "Informative",
    image: "https://cdn.auth0.com/blog/whatabyte/tea-sm.png",
    category: coldDishes,
  },
];
