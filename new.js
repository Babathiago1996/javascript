// math object
// sqrt,round,pow,ceil,floor,trunc,random
console.log(Math.sqrt(25));
console.log(Math.pow(10,2))
console.log(Math.round(4.29))
console.log(Math.ceil(2.05))
console.log(Math.floor(3.9))
console.log(Math.trunc(11.99));
// math.random- random generate between 0-1
console.log(Math.random());

console.log(Math.trunc(Math.random() *11))//1-10
console.log();
console.log(Math.floor(Math.random() * 10+1));
// raffle draw
const customers=["kelvin","john","khalid","david"]
const randomWinner=()=>{
    let randomNumber=Math.floor(Math.random()* customers.length);
    return customers[randomNumber]

}
console.log(randomWinner())