let classTotal = [
  "Ali",
  "Aysu",
  "Aminenur",
  "Gizem",
  "Orhun",
  "Osman",
  "Salih",
  "Yiğitcan",
];

for (let index = 0; index < classTotal.length; index++) {
  const element = classTotal[index];
  // console.log(element);
}

let i = 0;
for (; i < classTotal.length; i++) {
  const element = classTotal[i];
  // console.log(element);
}

i = 0;
for (; i < classTotal.length; ) {
  // while (condition) {}
  const element = classTotal[i];
  console.log(element);
  i += 2;
}

// for (;;) {
//   console.log("Hello chaos");
// }

const serkan = {
  name: "Serkan",
  surname: "Zorlu",
  date: 1991,
};

serkan.name;
serkan["name"];

for (const key in serkan) {
  const value = serkan[key];
  console.log(`${key}: ${value}`);
}

let total = 0;
const ages = [32, 31, 25, 25, 29, 28, 28, 28, 26, 27, 31, 31, 27, 27];
for (const age of ages) {
  total += age;
}
console.log("Sum of age: ", total);
console.log("Average of age: ", total / ages.length);
