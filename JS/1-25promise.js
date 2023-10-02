function addString(prev, current) {
  return new Promise((resolve, reject) => {
    // call `resolve` when you get success, if not call `reject`, (these are function)
    setTimeout(() => {
      resolve(`${prev} ${current}`);
    }, 3000);
  });
}

addString("A", "B").then((response) => {
  console.log(response);
});
