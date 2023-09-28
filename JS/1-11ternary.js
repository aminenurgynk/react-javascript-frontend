const isUser = true;

//true       //false
const isLoggedIn = isUser ? "logged in" : "signed out";
console.log(isLoggedIn);

const a = 3 + 5;
const b = 7;
const c = "8";

if (a == c) {
  if (b == c) {
    console.log("a, b ve c values are equal.");
  } else {
    console.log("a ve c values are equal.");
  }
} else if (a === b) {
  console.log("a ve b values are equal.");
} else {
  console.log("a ve b values are not equal.");
}

//ternary
const sentence =
  a == c
    ? b == c
      ? "a, b ve c values are equal."
      : "a ve c values are equal."
    : a === b
    ? "a ve b values are equal."
    : "a ve b values are not equal.";

console.log(sentence);
