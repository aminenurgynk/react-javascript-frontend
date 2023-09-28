var variable = "var";
let letVariable = "let";
const CONST_VARIABLE = "const";

varLetDifference();

function varLetDifference() {
  console.log("a (Before the variable is created):", a);
  // console.log("b ("Before the variable is created):", b);
  // console.log("c (Before the variable is created):", c);

  if (true) {
    // global variable
    var a = "a";
    // local variable
    let b = "b";
    const c = "c";

    console.log("a (in the scope):", a);
    console.log("b (in the scope):", b);
    console.log("c (in the scope):", c);
  }

  console.log("a (out the scope):", a);
  console.log("b (out the scope):", b);
  // console.log("c (out the scope):", c);
}
