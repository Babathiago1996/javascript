// objects{ keys:value,key2:value2}
const person={
firstName:"john",
lastName:"doe",
age:45,
isMarried:true,
friends:["jane","peter","mark"],
job:"teacher",
location:{
    street:"vineyard",
    area:"lekki",
    city:"lagos",
    zip:100011,
Geolocation:{
    lat:23.46,
    lng:45.78
}
}
};
// getting property from an object
// notation and bracket notation
console.log(person.age)
console.log(person.firstName)
console.log(person.lastName.toLocaleUpperCase())

// using bracket
console.log(person["age"]);
console.log(person["friends"]);

console.log(`i live at ${person.location.street} estate, ${person.location.area} ${person.location.city}`)
// adding a new property to an object
person.workPlace ="apple company"
console.log(person)
person.location.landMark="City mall"

// removing property value
delete person.job

const user ={
    username:"ade001",
    email:"ade001@gmail.com",
    profilePic:"image",
    age:35,
    isLoggedIn:false,
    isVerifeid:true,
    post:["nigeria just get as e be", "i love food"],
    welcomeUser: function (){
        return this.isLoggedIn? `welcome ${this.username}`:"log in to continue";
    },
    verifyUser:function (){
        return this.isVerifeid? `verification succesful`:"verify your account"
    }
};
console.log(user.welcomeUser())
console.log(user.verifyUser())

// object method- developer writes the function
// function declaration(this -refer to the object itself)
//  that user welcome username or log in to continue
const book={
    title:"badland",
    author:"james",
    yearPublished:2005,
    rating:5,
    price:400,
    genre:"comedy",
    similarAuthor:["charles taylor","james brown","brunor"],
    description :function () {
       return `the book titled ${this.title} cost price ${this.price} and it is a ${this.genre} novel` 
    },
    recommedBook: function(){
       return this.rating>3.5?"this book is recommended " : "not recommended"
    }
}
console.log(book.description());
console.log(book.recommedBook());
// object.keys,object.value, object.entrie

const transaction={
    amount: 4000,
    date:"16/6/2005",
    charges:25,
    refNum:"tranx-246563638775",
}
console.log(Object.keys(transaction));
console.log(Object.values(transaction));
console.log(Object.entries(transaction));

const match ={
    teamA:"wolfsburg",
    teamB:"lecce",
    teamAScore:3,
    teamBScore:2,
    duration:96,
    numOfSubsUsed:7,
    stadium:"webley",
    weather:"snowy",
    determinedDOutCome :function (){
         if( this.teamAScore >this.teamBScore){
           return (`${this.teamA}  won`)
        }else if (this.teamBScore >this .teamAScore){
            return (`${this.teamB}won`)
        }else{
            return("it is a draw")
        }
    },
    overwiew: function(){
        return `the match between ${this.teamA} and  ${this.teamB} was played at ${this.stadium} in a ${this.weather} condition`
    }
}
console.log(fouls, stadium, duration);

    console.log(match.determinedDOutCome());
    console.log(match.overwiew());

    // object destructuring- we are getting property from an object
    const {teamA,stadium,duration}=match;
    
    const property={
        name: "Exquisite villa",
        rent: "2.3m/year",
        bedroom:7,
        bathroom:10,
        cautionFee:5000,
        legalFee:4000,
        facility:["pool","sauna","theatre","gym"],
        location:{
            area:"gbagada",
            city:"lagos",
            num:45,
            street:"charly boy",
            geo:{
                lat:100.27,
                lng:45.78
            }
        },
    };
    const { name, rent,location :{street,city,geo:{lng}}} = property
// 
const product={
    price:9.99,
    discount:7.17,
}
const {price,discount}=product;
let newPrice= price-(discount/100)*price
console.log(newPrice.toFixed(2));
    