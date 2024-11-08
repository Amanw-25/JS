function about(hobby, favMusician){
    console.log("Hii",this.firstName, this.age, hobby, favMusician);
}
const user1 = {
    firstName : "harshit",
    age: 8,   
}
const user2 = {
    firstName : "mohit",
    age: 9,
    
}

//CALL - ISME JO USER1 LIKHA HAI VO (THIS) HAI
about.call(user1,"guitar","moazrt");
about.call(user2,"guitar","moazrt");

// APPLY - Internally ye bhi call ko hi use karta hai - Bas isme as a arryay apan input pass kar pa rahe
about.apply(user1, ["guitar", "bach"]);

// BIND - RETURN FUNCION (IT MEAN KAAM TO VO HI KAREGA BUT RETURN TAB HI KAREGA JAB FUNCTION KO CALL KIYA HO) 
const func = about.bind(user2, "guitar", "bach");
func();
