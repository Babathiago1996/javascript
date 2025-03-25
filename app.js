// Document object model (dom)
// select element on the document,tagname,classname,idname,combination

// const headings= document.getElementsByTagName("h1")
// console.log(headings)
// //
// const myH1s=document.getElementsByClassName("heading")
// console.log(myH1s)
// //
// const textPara=document.getElementById("text")
// console.log(textPara);
// // queryselector(css,selector)
// //
// const firstPara=document.querySelector("p")
// console.log(firstPara)
// // queryselectorAll
// const allParas=document.querySelectorAll("p")
// console.log(allParas);
// interacting with content on the document
// textcontent, innerText, innerHTML

const heading = document.querySelector(".heading");
console.log(heading.textContent);
console.log(heading.innerText);
heading.textContent += "Js is Fun";
// heading.innerText="js is fun";
//
const container = document.querySelector("div");
console.log(container.innerHTML);
container.innerHTML += "<a href='https://google.com'>visit google<a/>";

const myName = "Azeez Thiago";
const initials = function (firstName, lastName) {
  return `${firstName.at(0)}.${lastName.at(0)}`;
};
console.log(initials((firstName = "messi"), (lastName = "john")));
const intro = document.querySelector("h2");
intro.textContent = `welcome ${myName}`;
// welcome initials
//
const mylink = document.querySelector(".mylink");

// facebook
mylink.textContent = "Facebook";
mylink.setAttribute("href", "https://facebook.com");
mylink.setAttribute("target", "_blank");
mylink.getAttribute("href");
console.log(mylink.getAttribute("href"));

// interact with style
mylink.style.color = "red";
mylink.style.textDecoration = "none";
//
const btn = document.querySelector("button");
// btn.className="mybtn"
// classList
btn.classList.add("mybtn");
btn.classList.add("kevin");
btn.classList.remove("kevin");
//
// create element with javascript
const section = document.createElement("section");
section.innerHTML = "<h1>created from js</h1>";
section.className = "mysection";
// append it body or wherever it is needed
const body=document.querySelector("body")

body.appendChild(section);
// const whale = document.querySelector(".front");
// whale.appendChild(section);
// 
//responding to users interaction
// 1.event eg click, submit 2.event handler,function
const testbtn=document.querySelector(".testbtn");
testbtn.addEventListener("click", ()=>{
    console.log("User clicked");
    body.style.backgroundColor="red"
})
// form handling
// submit event
const form=document.querySelector("form")
const fullname=document.querySelector(".fullname")
const small=document.querySelector("form small")

form.addEventListener("submit",(event)=>{
event.preventDefault();
const fullNameValue=fullname.value.trim();
console.log("form submitted",fullNameValue)
// validate the input
if(fullNameValue===""){
    small.style.display="block";
    small.textContent="please provide a name"
}
} );
