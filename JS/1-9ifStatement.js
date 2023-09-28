const a = 3 + 4;
const b = 7;
const c = "7";

// nested if 
if (a == c) {
  if (b == c) {
    console.log("a, b and c values are equal.");
  } else {
    console.log("a ve c values are equal.");
  }
} else if (a === b) {
  console.log("a ve values are equal.");
} else {
  console.log("a ve b values are not equal.");
}

if (a == c && b == c) {
  console.log("a, b ve c values are equal.");
} else if (a == c) {
  console.log("a ve c values are equal.");
} else if (a === b) {
  console.log("a ve values are equal.");
} else {
  console.log("a ve b values are not equal.");
}