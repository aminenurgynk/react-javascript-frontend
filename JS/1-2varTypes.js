var stringType = "String";

var numberType = 53;

function getName() {
  console.log(stringType);
}

class CatProps {
  constructor(catName, ownerName) {
    this.catName = catName;
    this.ownerName = ownerName;
  }
}

var booleanTypeTrue = true;
var booleanTypeFalse = false;

var nullType = null;

var undefinedType = undefined;

var jsonType = {
  name: "Aminenur",
  surname: "Goynuk",
  age: undefined,
};

console.log("stringType", typeof stringType);
console.log("numberType", typeof numberType);
console.log("getName", typeof getName); //function
console.log("CatProps", typeof CatProps); //function
console.log("booleanTypeTrue", typeof booleanTypeTrue);
console.log("nullType", typeof nullType);
console.log("undefinedType", typeof undefinedType);
console.log("jsonType", typeof jsonType);
