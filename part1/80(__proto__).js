const obj1 = {
  key1: "value1",
  key2: "value2",
};

// __proto__

// offical ecmascript documentation

// [[prototype]]

// __proto__ , [[prototype]]

// prototype - ye upar walo se alag hai

const obj2 = Object.create(obj1); // {} IN SIMPLE WORD YE ONJ2 KI __PROTO__KI VALUE KO OBJ1 KE LIYE SET KAR RAHA 
// there is one more way to create empty object
obj2.key3 = "value3";
// obj2.key2 = "unique";
console.log(obj2); // ISME EK __PROTO__ HAI JO YE KAAM KARAT HAI AGR OBJECT TO KOI KEY NHI MILE SO VO UKO USKE PROTO MAI JA KAR DEKHTA HAI

console.log(obj2.__proto__);
