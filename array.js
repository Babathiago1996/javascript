// [element, elemebt2, element3]
// arrays usually contains the datatypes
// empty arrays are falsy value
const students =["david", "quadri", "isaac", "ibrahim","johnpaul"];
// array property -length
console.log(students);
console.log(students.length);
// getting element from an array,position
console.log(students[0]);
console.log(students[2])
// change element in an array, position
students[0]= "Azeez"
console.log(students)
students[students.length-1]= "john doe"
students[3]="john"
// 
// array method
// add and remove element from array(front or back)
// structured data type
// to add
students.push("micheal")
students.push("juwon")
students.unshift
// 
console.log(students)
// remove
students.pop()
students.shift()
// 
// include
console.log(students.includes("David"))

// indexOf lastIndexOf
console.log(students)
console.log(students.indexOf("isaac"))
console.log(students.lastIndexOf("isaac"))
console.log(students.at(2));
// 
// extract portion an array slice (start and end)
console.log(students.slice(0,3));
console.log(students.slice(4,7));
// 
// methods to convert arrays to string
// join, tostring
// console.log(students.join("@")); // another seperator
// console.log(students.toString()); //
// 
// iterator methods 
// higher order methods(function)= it needs another function as a parameter
// forEach, map, find, filter,some,every, reduce
// forEach -execute a function for every element in an array
students.forEach((student)=>{
console.log(student.toUpperCase());
});
// give me first letter 
students.forEach((student) => {
  console.log(student.charAt(0));
});
// map- creates a new array with the result of a function
const smallCaseStudents =students.map((student)=>{
    return student.toLowerCase()
})
console.log(smallCaseStudents);

// filter create a new array with ement that pass a test(searxh condition)

const myNum=[2,5,4,7,8,9,3]
const greaterThan5=myNum.filter((num)=>{
    return num>5
})
console.log(greaterThan5)
const evenNumber=myNum.filter((num)=>{
    return num %2===0
})
console.log(evenNumber)
const oddNumber =myNum.filter((num)=>{
    num % 2 !==1
})
const lengthGreaterThan6=students.filter((student)=>{
    return student.length>6
});
 console.log(lengthGreaterThan6);

 const favStudent =students.find((student)=>{
    return student.length===5
 })
     console.log(favStudent);


//  find return the first element that passes a test(search condition)
const findGreaterThan6 =myNum.find((num)=>{
    return num >5;
});
console.log(findGreaterThan6);

// some =return true if any of the element pass the test
const ifSomeGreater5 =myNum.some((num)=>{
   return num>5
})
console.log(ifSomeGreater5);
// every-return true if all element passes a test
const ifAllGreater5 =myNum.every((num)=>{
    return num>5
})
console.log(ifAllGreater5);
// reverse
const carBrands=["Toyota", "Rollsroyce" ,"Bwm", "Ferrari","Tesla"]
console.log(carBrands);

// console.log(carBrands.reverse());
// 
// sort works with alphabet but differently with number//
console.log(carBrands.sort());// a-z
console.log(carBrands.sort().reverse);// z-a


// sorting number
const prices=[200,400,600, 100,700,800]
console.log(prices.sort())// buggy
console.log(prices.sort((a,b) => a - b)); //smallest to highest
console.log(prices.sort((a,b) => b-a)); //highest to low

// concat
const africanCountries =["Togo", "Ghana"]
const AsiaCountries =["Singapore", "China","Japan"]
const holidayLocation=africanCountries.concat(AsiaCountries)

// reduce= reduces every element in an array to single value
// two parameter, callback and start point
const totalPrice2= prices.reduce(( acc, curr)=>{
    return acc+curr;
}, 0);
console.log(totalPrice2)
// using split
const fruit ="banana"
// split method on a string
console.log(fruit.split(""))
console.log(fruit.split("a"));

// write a function that reverse the letter in a word
// cat ---tac gel ---leg
const reverseWord= (word)=>{
    return word.split("").reverse().join("");
}
console.log(reverseWord("cat"))
console.log(reverseWord("gel"))
// 
// palindrome-words that are spelt the same even if reverse
// madam level tat pap eye noon
function isPalinDrome(word){
    // default to a standard lowercase or uppercase
    return word.toLowerCase()===word.split("").reverse().join("").toLowerCase
}
console.log(isPalinDrome("Madam"))
// 
// SET - unique value in an array
const users =["john","dave","nate","john","dave"];
console.log(new Set(users))

// destructuring
// complex data structure