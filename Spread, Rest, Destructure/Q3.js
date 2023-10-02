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
