const countriesData = [
  {
    country: "Finland",
    capital: "Helsinki",
    population: 5540720,
    languages: ["Finnish", "Swedish"],
  },
  {
    country: "Estonia",
    capital: "Tallinn",
    population: 1321977,
    languages: ["Estonian"],
  },
  {
    country: "Sweden",
    capital: "Stockholm",
    population: 10367295,
    languages: ["Swedish"],
  },
  {
    country: "Denmark",
    capital: "Copenhagen",
    population: 5822763,
    languages: ["Danish"],
  },
  {
    country: "Norway",
    capital: "Oslo",
    population: 5328210,
    languages: ["Norwegian"],
  },
];

// 6-) destructuring
const countriesInfo = countriesData.map(
  ({ country, capital, population, languages }) => ({
    country,
    capital,
    population,
    languages,
  })
);
console.log(countriesInfo);

// 7-) destructuring
const student = {
  name: "John",
  scores: [85, 90, 89],
  skills: ["HTML", "CSS", "JavaScript", "React"],
};

const {
  name,
  scores: [htmlScore, cssScore, jsScore, reactScore],
} = student;
console.log(name, htmlScore, cssScore, jsScore, reactScore);

// 8-) convertArrayToObject
function convertArrayToObject(students) {
  return students.map((student) => {
    const [name, skills, scores] = student;
    return {
      name,
      skills,
      scores,
    };
  });
}

const students = [
  ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]],
  ["John", ["HTM", "CSS", "JS", "React"], [85, 80, 85, 80]],
];

console.log(convertArrayToObject(students));

// 9-)

console.log("9-)");

const student1 = {
  name: "David",
  age: 25,
  skills: {
    frontEnd: [
      { skill: "HTML", level: 10 },
      { skill: "CSS", level: 8 },
      { skill: "JS", level: 8 },
      { skill: "React", level: 9 },
    ],
    backEnd: [
      { skill: "Node", level: 7 },
      { skill: "GraphQL", level: 8 },
    ],
    dataBase: [{ skill: "MongoDB", level: 7.5 }],
    dataScience: ["Python", "R", "D3.js"],
  },
};

const newStudent = { ...student1 };
newStudent.skills.frontEnd.push({ skill: "BootStrap", level: 8 });
newStudent.skills.backEnd.push({ skill: "Express", level: 9 });
newStudent.skills.dataBase.push({ skill: "SQL", level: 8 });
newStudent.skills.dataScience.push("SQL");

console.log(newStudent);
