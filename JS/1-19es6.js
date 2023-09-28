// 1. let and const variable key

// 2. arrow functions
const arrowFunction = (param1, param2) => {
  // do something
};

// 3. destructure

// 4. spread operator (`...`)
function func1(param1, param2, ...otherParams) {}

// 5. Object Oriented Programming - OOP
class Car {
  constructor(color, model) {
    this.color = color;
    this.model = model;
  }

  getCarProperties() {
    console.log(`Renk: ${this.color}, Model: ${this.model}`);
  }
}

const myCar = new Car("red", "Volvo");
myCar.getCarProperties();

// Object.assign
const obj1 = { name: "Engin", surname: "Ertikmen" };
const obj2 = { surname: "Engin", gender: "M" };
const newObj = Object.assign(obj1, obj2);
console.log(obj1);
console.log(obj2);
console.log(newObj);
console.log("obj1 ?== newObj", obj1 === newObj);
