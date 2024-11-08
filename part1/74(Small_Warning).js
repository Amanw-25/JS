
const user1 = {
    firstName : "harshit",
    age: 8,
    about: function(){
        console.log(this.firstName, this.age);
    }   
}

// don't do this mistake 

// user1.about();
//const myFunc = user1.about - YE KARNE SE UNDEFINED UNDEFINED AAYEGA KYUKI APAN ISME SIRF REFERNECE STOREKAR RAHE CALL NHI KAR RAHE AUR CALL KARTE TIME YANI
// RUNTIME PE HI VO THIS KO OBJECT SE ALLOCATE KAREGA JO USER HAI WARNA IS CASE MAI THIS JO HAI VO WINDOW OBJECT HI HAI. ISLIYE USKO BIND KARO 
const myFunc = user1.about.bind(user1);
myFunc();