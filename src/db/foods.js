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
  {
    id: 7,
    name: "Sushi",
    key: "sushi",
  },
];

const [coldDishes, grill, appetizer, dessert, soup,sushi] = categories;
export const foods = [
  {
    id: 1,
    name: "Beef dumpling in hot and sour soup",
    price: 10,
    description: "Tasty",
    image: "/src/assets/Foods/beef.svg",
    category: coldDishes,
  },
  {
    id: 2,
    name: "Healthy noodle with spinach leaf",
    price: 15,
    description: "Cheesy",
    image: "/src/assets/Foods/healthy-noodle.svg",
    category: grill,
  },
  {
    id: 3,
    name: "Hot spicy fried rice with omelet",
    price: 8,
    description: "appetizer",
    image: "/src/assets/Foods/hot-rice.svg",
    category: appetizer,
  },
  {
    id: 4,
    name: "Hot spicy fried rice with omelet",
    price: 7,
    description: "Dessert",
    image: "/src/assets/Foods/hot-spicy.svg",
    category: dessert,
  },
  {
    id: 5,
    name: "Spicy seasoned seafood noodles ",
    price: 15,
    description: "Cold Dishes",
    image: "/src/assets/Foods/mushroom.svg",
    category: coldDishes,
  },

  {
    id: 6,
    name: "Spicy instant noodle with special omelette",
    price: 9,
    description: "Dessert",
    image: "/src/assets/Foods/noodle-omelette.svg",
    category: dessert,
  },
  {
    id: 7,
    name: "Healthy noodle with spinach leaf",
    price: 6,
    description: "Cold Dishes",
    image: "/src/assets/Foods/noodle-spinach-leaf.svg",
    category: coldDishes,
  },
  {
    id: 8,
    name: "Salted Pasta with mushroom sauce",
    price: 26,
    description: "Grill",
    image: "/src/assets/Foods/noodles.svg",
    category: grill,
  },
  {
    id: 9,
    name: "Spicy instant noodle with special omelette",
    price: 4,
    description: "Soup",
    image: "/src/assets/Foods/spicy-instant.svg",
    category: soup,
  },
  {
    id: 10,
    name: "Philadelphia Roll Sushi",
    price: 4,
    description: "Philadelphia Roll Sushi",
    image: "/src/assets/Foods/Philadelphia-Rol.jpeg",
    category: sushi,
  },
  {
    id: 11,
    name: "Tuna Roll Maki sushi made with tuna",
    price: 4,
    description: "Tuna Roll",
    image: "/src/assets/Foods/Tuna-Roll.jpeg",
    category: sushi,
  },
  {
    id: 12,
    name: "Unagi Sushi  ",
    price: 4,
    description: "Unagi Sushi",
    image: "/src/assets/Foods/Unagi-Sushi.jpeg",
    category: sushi,
  },
  {
    id: 13,
    name: "Ebi Sushi Sushi made with shrimp.",
    price: 4,
    description: "Ebi Sushi",
    image: "/src/assets/Foods/Ebi-Sushi.jpeg",
    category: sushi,
  },
  {
    id: 14,
    name: "Temaki Cone-shaped, hand-held sushi.",
    price: 6,
    description: "Temaki",
    image: "/src/assets/Foods/Temaki.jpeg",
    category: sushi,
  },
  {
    id: 15,
    name: "Sashimi Thinly sliced raw fish or seafood.",
    price: 8,
    description: "Sashimi",
    image: "/src/assets/Foods/Sashimi.jpeg",
    category: sushi,
  },
  {
    id: 16,
    name: "Maki a type of rolled sushi ",
    price: 4,
    description: "Maki",
    image: "/src/assets/Foods/maki.png",
    category: sushi,
  },
];
