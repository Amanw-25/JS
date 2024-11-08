// Own_Methods
// function inside object

//This ki value runtime ke pata chalti hai
//This vo object hai jo iss function ko call kar raha hai.

function personInfo() {
  console.log(`person name is ${this.firstName} and age is ${this.age}`);
}

const person0 = {
  firstName: "Aman",
  age: 20,
  about: function () {
    console.log(this); // Iss function ko person0 naam ka object call kar raha hai so iske value person0 hi hui.
  },
};

const person1 = {
  firstName: "harsh",
  age: 8,
  about: personInfo,
};
const person2 = {
  firstName: "mohit",
  age: 18,
  about: personInfo,
};
const person3 = {
  firstName: "nitish",
  age: 17,
  about: personInfo,
};

person0.about();
person1.about();
person2.about();
person3.about();
