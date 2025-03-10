// strings -character inside of quotation mark ""
const firstName = "john";
const lastName = "Doe";
// strings properties = length concatenation (joining +)
console.log(firstName.length);
console.log(lastName.length);
const myPassword = "645476434";
console.log(myPassword);
console.log(myPassword.length);
const fullName = firstName + " " + lastName;
console.log(fullName);
console.log(fullName.length);
// string method = built in function that can be done on strings
const email = "jjdoe@google.co.uk";
console.log(email);
// toUpperCase, toLowerCase
console.log(email.toUpperCase());
console.log(email.toLowerCase());
// indexOf, lastIndexOf, charAt
console.log(email.charAt(1));
console.log(email.indexOf("0"));
console.log(email.lastIndexOf("0"));
// startWith endsWith,includes
console.log(email.startsWith("jj"));
console.log(email.endsWith(".uk"));
console.log(email.includes("Doe".toLowerCase()));
console.log(email.toUpperCase().includes(".CO"));
// trim, trimStart and trimEnd (removes white space)
const username = "  ade001      ";
console.log(username.trim());
console.log(username.trimEnd());
console.log(username.trimStart());
// replace replaceAll
const myName = "jane doe";
console.log(myName.replace("e", "*"));
console.log(myName.replaceAll("jane", "*"));

// extract portions of string slice substring (start end ) substr
console.log(myName.slice(2, 5));
console.log(myName.substring(0, 3));

// substr (start,num of character)
console.log(myName.substr(0, 2));
const accountNumber = "1234567890";
console.log(accountNumber.replace(accountNumber.substr(2, 6), "*****"));
console.log(accountNumber.replace(accountNumber.slice(2, 8), "*****"));

const userName = "johnpaul";
console.log("welcome" + " " + userName.toUpperCase());

console.log(`welcome ${userName.toUpperCase()}`);

//  concatenation
const author = "jax Draxx";
const book = "The Ghost";
const sentence = author + "wrote the book" + book;
console.log(sentence);

// template literal used to format variable inisde of a string
// ~
const sentence2 = `${author} wrote the book ${book.toLowerCase()}`;

const person = "Adam Sandler";
const movie = "Romance Scam";
// AdAM SANDLER featured in the movie Romance Scam
const result = `${person.toUpperCase()} feaarture in the movie ${movie}`;
console.log(result);

const country = "nigeria";
console.log(country.length);

console.log(country.toUpperCase())
console.log(country.substr(1,5))
console.log(country.startsWith ("e"))
console.log(country.includes("h"))
//  using template literal write a sentence that looks like this 
// i live in nigeria  
console.log( `i live in ${country.toUpperCase()}`)