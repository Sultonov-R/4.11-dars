// class User {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     getAge() {
//         console.log(this.age);
//     }
// }
// let user =new User('ali', 20);
// user.getAge();
// console.log(user);



// class Animal {
//     constructor(name, color, age, weight) {
//         this.name = name;
//         this.color = color;
//         this.age = age;
//         this.weight = weight;
//     }
// }

// class Dog extends Animal {
//     constructor(name, color, age,  weight, height, type) {
//         super(name, age, weight, color);
//         this.height = height;
//         this.type = type;
//     }
// }

// let dog = new Dog('Reks', 'black', 2, 20, 50, 'husky');
// console.log(dog);

// to do list

document.getElementById("btn").addEventListener("click", myFunction);
document.addEventListener("DOMContentLoaded", displayStoredItem)
let a = [];
function myFunction() {
   let x = document.getElementById("input_1");
   localStorage.setItem("storedItem", x.value);
   a.push(x.value);
   document.getElementById("input_2").value = a.join(",");
   inputs.value = " ";
}


function displayStoredItem() {
   let storedItem = localStorage.getItem("storedItem");

   if(storedItem) {
      document.getElementById("input_2").value = a.join(",");
   }
}

let btnCleared = document.getElementById("btn");
let inputs = document.getElementById("input_1");


