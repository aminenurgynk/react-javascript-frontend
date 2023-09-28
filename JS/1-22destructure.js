// Destructure

const arr1 = [1, 2, 3, 4, 5];
// const a = arr1[0];
// const b = arr1[1];
// const c = arr1[2];
// const d = arr1[3];
// const e = arr1[4];
const [a, b, c, d, e] = arr1;
console.log("a", a);
console.log("b", b);
console.log("c", c);
console.log("d", d);
console.log("e", e);

const obj1 = { lang: "en", origin: "latin", country: "ABD" };
// const lang = obj1.lang;
// const origin = obj1["origin"];
// const country = obj1.country;
const { lang: language, origin, country } = obj1;
console.log(language);
console.log(origin);
console.log(country);
