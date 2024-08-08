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
    image: "",
    category: grill,
  },
  {
    id: 2,
    name: "Pizza",
    price: 15,
    description: "Cheesy",
    image: "",
    category: grill,
  },
  {
    id: 3,
    name: "Tacos",
    price: 8,
    description: "appetizer",
    image: "",
    category: appetizer,
  },
  {
    id: 4,
    name: "Waffles",
    price: 7,
    description: "Dessert",
    image: "",
    category: dessert,
  },
  {
    id: 5,
    name: "Grilled chicken  ",
    price: 15,
    description: "Cold Dishes",
    image: "",
    category: coldDishes,
  },
  {
    id: 6,
    name: "Cake with fruits",
    price: 9,
    description: "Dessert",
    image: "",
    category: dessert,
  },
  {
    id: 7,
    name: "Spicy Mixed Salad",
    price: 6,
    description: "Cold Dishes",
    image: "",
    category: coldDishes,
  },
  {
    id: 8,
    name: "Lamb steak",
    price: 26,
    description: "Grill",
    image: "",
    category: grill,
  },
  {
    id: 9,
    name: "Red lentil soup",
    price: 4,
    description: "Soup",
    image: "",
    category: soup,
  },
  {
    id: 10,
    name: "Lamb rib kebab",
    price: 25,
    description: "Grill",
    image: "",
    category: grill,
  },
  {
    id: 11,
    name: "Cheesecake with tea ",
    price: 5,
    description: "Dessers",
    image: "",
    category: dessert,
  },
  {
    id: 12,
    name: "Tea",
    price: 5,
    description: "Tea",
    image: "",
    category: coldDishes,
  },
];
