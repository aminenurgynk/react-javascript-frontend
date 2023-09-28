// not right
["Serkan", "Zorlu", 1991];

const serkan = {
  name: "Serkan",
  surname: "Zorlu",
  date: 1991,
};

let sinif = [
  "Ali",
  "Aysu",
  "Aminenur",
  "Gizem",
  "Orhun",
  "Osman",
  "Salih",
  "Yiğitcan",
];
console.log(sinif[2]);
// * indexOf --> Returns the index of a specified element.
sinif[sinif.indexOf("Osman")] = "Onur";
console.log(sinif);

// * push --> Adds new elements to the end of an array.
sinif.push(serkan.name);
console.log(sinif);

// * pop --> Removes and returns the last element of an array.
sinif.pop();
console.log(sinif);

// * slice --> Extracts a section of an array and creates a new array.
const sinif1 = sinif.slice(3, 6);
console.log(sinif1);

// * splice --> Adds, removes, or replaces elements in an array.
sinif.splice(3, 2, "Afife", "Betul");
console.log(sinif);

// * includes --> Checks if a specific element is present in an array.
console.log(sinif.includes("Salih")); //true

// * shift --> Removes and returns the first element of an array.
sinif.shift();
console.log(sinif);

// * unshift --> 	Adds new elements to the beginning of an array.
sinif.unshift("Burak", "Mehmet", "Caner");
console.log(sinif);

// * reverse --> 	Reverses the order of elements in an array.
sinif.reverse();
console.log(sinif);

// * concat --> Joins two or more arrays and returns a new array.
const konusanlar = ["Alperen", "Ünal"];
const sinif2 = sinif.concat(konusanlar).concat("Ali");
console.log(sinif2);

// * join --> Joins all elements of an array into a string.
const sentence = `Sınıfımda ${sinif.join(", ")} kişileri var.`;
console.log(sentence);
