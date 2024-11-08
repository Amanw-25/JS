// Arrow_Functions - ISKA THIS NHI HOTA YE THIS APNE SURROUNDING SE LETA HAI (It mean ek level aur upar)
const user1 = {
    firstName : "harshit",
    age: 8,
    about: () => {
        //console.log(this); ye window object dega
        console.log(this.firstName, this.age);
    }   
}

//NOTE- HUM ARROW FUNCTION KA THIS CHANGE NHI KAR SAKTE
//User1.about.call(user1); NOT POSSIBLE
user1.about(user1);