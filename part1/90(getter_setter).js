// getter and setters - GET LAGANE SE METHOD KO PROPERTY E TARAH USE KAR SAKTE HAI IT MEANS LINE 21 KE TARAH LIKH SAKTE HAI LINE 20 JAYSE KI JARURAT NHI 
class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
    set fullName(fullName){
        const [firstName, lastName] = fullName.split(" "); //SPACE KE BAAD SPLIT KAR DEGA
        this.firstName = firstName;
        this.lastName = lastName;
    }
}


const person1 = new Person("harshit", "sharma", 5);
// console.log(person1.fullName());
console.log(person1.fullName);
// person1.fullName = "mohit vashistha";
// console.log(person1);
