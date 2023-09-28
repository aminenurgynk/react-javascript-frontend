const orhun = {
  name: "Orhun",
  surname: "Bayındır",
  date: 1995,
  town: "Ankara",
  // method
  getInfo: function () {
    console.log(`${this.name}'s birth year of ${this.date}`);
  },
};

function getOrhunsInfo() {
  for (const key in orhun) {
    const value = orhun[key];
    console.log(`${key}: ${value}`);
  }
}

const getOrhunsLife = function () {
  printDescription();
  getOrhunsInfo();
  orhun.getInfo();
};

// * Arrow Function ES6
const printDescription = () => {
  console.log("Orhun's features : ");
};

getOrhunsLife();

// * Hungarian Notation
// ! dont choose this
const numberGetLength = () => {
  return 5;
};
