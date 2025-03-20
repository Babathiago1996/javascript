try{
    console.log(age)
}
catch (error){
    // 
    // handle the error
    // error message
    console.log(error.message);
}
// 
// optional chaining
const person={
    name:"bob",
    age:76
};
console.log(person?.job);// will not break code
console.log(person.job);
let error ={};
error?.firstName?.message;

// nullish coalescence
// 
const image="car"
const whatsappAvatar=image ?? "Avatar image"
console.log(whatsappAvatar);
