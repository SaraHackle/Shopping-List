const groceryList = [
  {
    id: 1,
    name: "Milk",
    price: 2.99,
  },
  {
    id: 2,
    name: "Eggs",
    price: 1.99,
  },
  {
    id: 3,
    name: "Pizza Rolls",
    price: 5.49,
  },
  {
    id: 4,
    name: "Chicken",
    price: 8.99,
  },
  {
    id: 5,
    name: "Pomegranate",
    price: 2,
  },
  {
    id: 6,
    name: "Sandwich Buns",
    price: 3.49,
  },
  {
    id: 7,
    name: "Mayo",
    price: 4.99,
  },
];

const addToShoppingList = (newName, newPrice) => {
  const newID = groceryList.length + 1;
  const newGroceryListItem = {
    id: newID,
    name: newName,
    price: newPrice,
    date: Date(),
  };
  groceryList.push(newGroceryListItem);
};

const steak = addToShoppingList("Steak", 14.99);
const shrimp = addToShoppingList("Shrimp", 12.49);
const frozenPizza = addToShoppingList("Frozen Pizza", 5.49);
const coffee = addToShoppingList("Coffee", 4.49);
const wine = addToShoppingList("Cabernet", 9.99);

for (expensiveItem of groceryList) {
  if (expensiveItem.price > 8) console.log(expensiveItem);
}
