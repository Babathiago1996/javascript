const customers = ["ade", "ngozi"];
customers.map((customer) => {
  console.log(customer.charAt(0));
});
// object1,object2
//
const myCustomers = [
  { name: "voldermot", age: 62, gender: "M", location: "hogwart",purchase:5000 },
  { name: "johnny cage", age: 42, gender: "M", location: "osun", purchase:6000},
  { name: "sonya blade", age: 52, gender: "F", location: "lagos",purchase:7000 },
  { name: "kitani", age: 32, gender: "F", location: "ondo",purchase:8000 },
  { name: "kung lao", age: 82, gender: "M", location: "ibadan",purchase:9000 },
];
//
myCustomers[1].name;
const { name } = myCustomers[1];
myCustomers[1]["name"];
//
myCustomers.map((customer) => {
  console.log(customer.name);
});
const olderCustomers = myCustomers.filter((customer) => {
  return customer.age >= 25;
});
console.log(olderCustomers);
//
const youngerThan25 = myCustomers.filter((customer) => {
  return customer < 25;
});
console.log(youngerThan25);
const femaleCustomer = myCustomers.filter((customer) => {
  return customer.gender.toUpperCase() === "f".toUpperCase();
});
console.log(femaleCustomer);
const maleCustomer = myCustomers.filter((customer) => {
  return customer.gender.toUpperCase() === "m".toUpperCase();
});
console.log(maleCustomer);

const lagosCustomers = myCustomers.filter((customer) => {
  return customer.location === "lagos";
});
console.log(lagosCustomers.length);
const ageOfCustomer = myCustomers.sort((a, b) => {
  return a.age - b.age;
});
console.log(ageOfCustomer);
const totalAge=myCustomers.reduce((acc,customer)=> acc+customer.age, 0)
const average =totalAge /myCustomers.length
console.log(average);
const ibadanCustomer =myCustomers.find((customer)=>{
    return customer.location==="ibadan"
})
console.log(ibadanCustomer)
//solution
// first 1// get an array containing all the purchase of all customer

const getPurcahse=myCustomers.map((customer)=>{
    return customer.purchase
});
// 2 // get all customer with a minimum of 6000 purchase amount

const purchaseMore6000 = myCustomers.filter((customer)=>{
return customer.purchase>=6000
})
// 3 // get the total purchase amount of all customer

const getTotalPurchase= myCustomers.reduce((acc,customer)=>{
    return acc+customer.purchase
}, 0);
// 
// 4. get the average purchase of the last three customers

const lastThreeCustomerPurchase = myCustomers.slice(2).reduce((acc,customer)=> acc+customer.purchase , 0)
let averageOfTheLastThree=lastThreeCustomerPurchase/3
console.log(averageOfTheLastThree);

// 5 // get the total purchase amount for all customer in ibadan

const totalPurchaseIbadan =myCustomers.filter((customer)=>customer.location==="ibadan").reduce((acc,customer)=>acc+customer.purchase , 0);
console.log(totalPurchaseIbadan);

const shoppingCart = [
  { title: "jean", price: 100, qty: 8 },
  { title: "hat", price: 600, qty: 9 },
  { title: "cream", price: 300, qty: 7 },
  { title: "duffet", price: 800, qty: 5 },
  { title: "mat", price: 900, qty: 4 },
];
// jeans costs $100
shoppingCart.map((item)=>{
    console.log`${item.title} cost ${item.price}`
})
const getMe = shoppingCart.filter((item)=>item.price>=70 )
// get the amount spent on each item
shoppingCart.map((item)=>{
    console.log(`${item.title} cost $${item.price *item.qty}`)
});
// get the totalcost of all items in the cart
const totalValue= shoppingCart.reduce((acc,item)=> acc+item.price * item.qty , 0)
// 
// 
const cars = [
  { name: "Lamborghini Huracan", rentPrice: 100, category: "sport" },
  { name: "Range Rover Velar", rentPrice: 70, category: "suv" },
  { name: "Audi R8", rentPrice: 120, category: "sport" },
  { name: "Mustang", rentPrice: 80, category: "vintage" },GamepadHapticActuator
  { name: "Porche 911", rentPrice: 120, category: "sport" },
  { name: "Chevrolet Camaro 1970", rentPrice: 80, category: "vintage" },
  { name: "Rolls Royce", rentPrice: 70, category: "sport" },
  { name: "Tesla Model X", rentPrice: 120, category: "suv" },
  { name: "BMW X5", rentPrice: 40, category: "suv" },
  { name: "Volkswagen Beetle 1972", rentPrice: 30, category: "vintage" },
];
// 
cars[1];
cars[0].name;

const vintageCars = cars.filter((car) => car.category === "vintage");
console.log(vintageCars);

let totalrentPrice = cars.reduce((acc, car) => acc + car.rentPrice, 0);

const carsMorethan100 = cars.every((c) => c.rentPrice > 100);

let myName = "Kelvin";
// == ===

let data = {
  success: true,
  message: "Product in Stock",
  products: ["Glasses", "Lipssticks", "Shoes"],
};

console.log(data.products[2]);

const { products } = data;
products[2];

const meals = [
  {
    meal: {
      name: "Sushi",
      price: 45,
      category: "Side",
    },
  },
];

console.log(meals[0].meal.name);
const airline = {
  types: [
    {
      name: {
        brand: "Air Peace",
        brand2: "Green Africa",
        brand3: "Max Air",
        brand4: "Emirates",
      },
    },
  ],
};
console.log(airline.types[0].name.brand3);




