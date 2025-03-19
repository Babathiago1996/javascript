// rest and spread operator
// ...
// rest operator
// unstructured datatype
const user={
    names:"john carter",
    age:80,
    gender:"male"
}
const {...prop}=user;
console.log(prop);
// structured data type
// using rest operator
const arr=[3,4,6,8]
const[...others]=arr;
console.log(others);
// 
const country=["togo","ghana","gabon","cameroon","zambia"]
const [X,...rest]=country;
// 
const product={
    title:"Micheal Kors",
    price:300,
    images:"images"
}
const {price,...property}=product;
console.log(property);
// spread operator ...
// 
const detailedProduct={
    stock:6,
    color:"red",
    category:"bags",
    weight:13,
    ...product
};
console.log(detailedProduct);
// 
// 
const onlineStudent=["wale","azeez","john","bola"]
const physicalStudent=["kola","james","david"]
const allStudents=[...physicalStudent,...onlineStudent,"ruud","seyi"]
console.log(allStudents);



