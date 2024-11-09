// hoisting - CODE KE EXECUTE HONE SE PAHILE JO BHI VAR SE VARIABLE BANAI HAI VO STORE HO RAHE HAI AUR JO BHI FUNCTION FUNCTION KEYWORD SE BANAI HAI VO BHISTORE HO RAHE HAI BHALE KI VARIABLE PAHILE UNDEFINED HO PAR STORE TO HO RAHE HAI
console.log(this);
console.log(window);
console.log(myFunction);

console.log(fullName);

function myFunction(){
    console.log("this is my function");
}

var firstName = "Harshit";
var lastName = "Sharma"
var fullName = firstName + " " + lastName;
console.log(fullName);