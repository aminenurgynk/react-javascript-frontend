/**
 * Prints the values in the given array one by one to the console.
 * @param {string[]} names is an array.
 * @param {...string} otherNames is a rest parameter.

 */
function getNames(names = [], ...otherNames) {
  // otherNames --> "Ahmet", "Mehmet", "Serkan"
  if (names?.length > 0) {
    //names && names.lenght > 0
    for (const name of [...names, ...otherNames]) {
      console.log(name);
    }
  } else {
    console.log("Array boş geldi.");
  }
}

const class1 = [
  "Ali",
  "Aysu",
  "Aminenur",
  "Gizem",
  "Orhun",
  "Osman",
  "Salih",
  "Yiğitcan",
];

getNames(class1, "Ahmet", "Mehmet", "Serkan");
