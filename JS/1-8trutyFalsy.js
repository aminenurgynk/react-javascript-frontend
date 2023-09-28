// * Truthy
true;
5;
("String");
[(1, 2, 3)];
const obj = { name: "Aminenur", surname: "Goynuk" };
const obj1 = {};

// * Falsy
false;
0;
("");
null;
undefined;
NaN;

if (NaN) {
  console.log("It works");
}