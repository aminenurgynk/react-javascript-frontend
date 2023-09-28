const myCar = {
  brand: "Mercedes",
  model: "GLS600",
  fuelType: ["electric", "petrol"],
  year: 2030,
  color: "Navy blue",
  // startBattery: function (callback) {
  //   console.log("The battery started.");
  //   if (callback) {
  //     callback();
  //   }
  // },
  startBattery: function () {
    console.log("The battery started.");
    this.move();
  },
  move: () => {
    console.log("It moved");
  },
};

myCar.startBattery(); // third way to call (using `this.` (function properties) --> diff. arrow vs function)
// myCar.startBattery(myCar.move()); // second way to call (callback)
// myCar.move(); // first way to call

const obj1 = { name: "Mehmet", surname: "Öksüz" };
const obj2 = { name: "Mehmet", surname: "Öksüz" };
const obj3 = { name: "Ünal", surname: "Berk" };
const obj4 = obj1;
console.log("obj1 ? obj2", obj1 === obj2); //false // ? diff. place in ram
console.log("obj1 ? obj2", JSON.stringify(obj1) === JSON.stringify(obj2)); //true
console.log("obj1 ? obj3", obj1 === obj3); //false
console.log("obj1 ? obj4", obj1 === obj4); //ture // ? same place in ram

const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
const arr3 = [3, 4, 5];
const arr4 = arr1;
console.log("arr1 ? arr2", arr1.toString() === arr2.toString()); //true
console.log("arr1 ? arr3", arr1 === arr3); //false
console.log("arr1 ? arr4", arr1 === arr4); //true

// * Adding new property to object
myCar.transmissionType = "auto";
myCar["air-conditioned"] = true;
console.log(myCar);

// * hasOwnProperty // do you has this property ?
if (myCar.hasOwnProperty("fuelType")) {
  console.log(myCar.fuelType);
}

// * entries
//  returns array
for (const [key, value] of Object.entries(myCar)) {
  if (typeof value !== "function") {
    console.log(`${key}: ${value}`);
  }
}

// * keys
console.log(Object.keys(myCar));

// * values
console.log(Object.values(myCar));

// * freeze
// Object.freeze(myCar);
// myCar.prop1 = "value1";
// myCar.brand = "Volvo";
// delete myCar.brand;
// console.log(myCar);

// * seal
// Object.seal(myCar);
// myCar.prop1 = "value1";
// myCar.brand = "Volvo";
// delete myCar.brand;
// console.log(myCar);

for (const key of Object.keys(myCar)) {
  console.log(key);
  console.log(myCar[key]);
}
