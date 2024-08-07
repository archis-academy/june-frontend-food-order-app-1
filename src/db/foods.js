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
    category: grill,
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
    name: "Tacos",
    price: 8,
    description: "appetizer",
    image: "https://img.freepik.com/free-photo/delicious-tacos-arrangement_23-2151047929.jpg?t=st=1722966362~exp=1722969962~hmac=9647747103374650fad5e297f86ab439e246fa8d5a0a555f13279b590f92beb4&w=1380",
    category: appetizer,
  },
  {
    id: 4,
    name: "Waffles",
    price: 7,
    description: "Dessert",
    image: "https://img.freepik.com/free-photo/delicious-sweet-waffles-front-view_23-2148517047.jpg?t=st=1722966601~exp=1722970201~hmac=015d54cfee89cd4e9cb790b9f6b8a831da758c6a4c1cb665beb66487f2bf30fe&w=1380",
    category: dessert,
  },
  {
    id: 5,
    name: "Grilled chicken  ",
    price: 15,
    description: "Cold Dishes",
    image: "https://img.freepik.com/free-photo/grilled-chicken-with-mozarella-cheese-tomatoes_114579-3329.jpg?t=st=1722966726~exp=1722970326~hmac=1f3b9044643de4049bed4efb526af4121a0f9526a4bce88efc55b6ea1b344e2f&w=900",
    category: coldDishes,
  },
  {
    id: 6,
    name: "Cake with fruits",
    price: 9,
    description: "Dessert",
    image: "https://img.freepik.com/free-photo/delicious-cake-with-fruits_23-2150727591.jpg?t=st=1722967754~exp=1722971354~hmac=def9da5e1e80389fb9abaf947795d9fdcb0a4c77a6078d08f6bbaa48d1de3e50&w=826",
    category: dessert,
  },
  {
    id: 7,
    name: "Spicy Mixed Salad",
    price: 6,
    description: "Cold Dishes",
    image: "https://img.freepik.com/free-photo/spicy-mixed-seafood-salad-with-thai-food-ingredients_1150-26429.jpg?t=st=1722968106~exp=1722971706~hmac=67a7a383e39e63f3326642c2ed5f12a25beafeec42eae1b3ef2a46479b09cadf&w=1380",
    category: coldDishes,
  },
  {
    id: 8,
    name: "Lamb steak",
    price: 26,
    description: "Grill",
    image: "https://img.freepik.com/free-photo/lamb-steak-pieces-with-sauces-grilled-pepper-fresh-salad-wooden-board_140725-10580.jpg?t=st=1722968660~exp=1722972260~hmac=2f6185456c54301b8655b31bdd99e15ced9743cb2ffe942b6208f0034fe3e118&w=1380",
    category: grill,
  },
  {
    id: 9,
    name: "Red lentil soup",
    price: 4,
    description: "Soup",
    image: "https://img.freepik.com/free-photo/lentil-soup-with-spices-lemon-slice_114579-3058.jpg?t=st=1722968931~exp=1722972531~hmac=f50d3e08ecddbd050d111839ebd4565d155359d1baa131e68e6a5383cb600218&w=1380",
    category: soup,
  },
  {
    id: 10,
    name: "Lamb rib kebab",
    price: 25,
    description: "Grill",
    image: "https://img.freepik.com/free-photo/lamb-rib-kebab-served-with-fresh-herbs-baby-potato-tomato-sauce_140725-1384.jpg?t=st=1722969263~exp=1722972863~hmac=90e938bb5524cd0ad17f7729b8f53842db7b44c418308ec849d9fa6b87dcc2c9&w=900",
    category: grill,
  },
  {
    id: 11,
    name: "Cheesecake with tea ",
    price: 5,
    description: "Dessers",
    image: "https://img.freepik.com/free-photo/cheesecake-slice-garnished-with-berries-served-with-black-tea_140725-5746.jpg?t=st=1722969533~exp=1722973133~hmac=f3786796abefb15f40ec300b9b10cc1aae3baf2ef6e4721d6860d74e35fa1256&w=740",
    category: dessert,
  },
  {
    id: 12,
    name: "Tea",
    price: 5,
    description: "Tea",
    image: "https://cdn.auth0.com/blog/whatabyte/tea-sm.png",
    category: coldDishes,
  },
];
