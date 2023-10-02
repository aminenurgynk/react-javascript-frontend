// 1-) E = 2.72, pi = 3.14, gravity = 9.81, humanBodyTem = 37, waterBoilingTemp = 100  --> destrructuring
const constants = [2.72, 3.14, 9.81, 37, 100];
const [E, pi, gravity, humanBodyTem, waterBoilingTemp] = constants;
console.log(E, pi, gravity, humanBodyTem, waterBoilingTemp);

// 2-) fin = 'Finland', est = 'Estonia', sw = 'Sweden', den = 'Denmark', nor = 'Norway'  --> destrructuring
const countries = ["Finland", "Estonia", "Sweden", "Denmark", "Norway"];
const [fin, est, sw, den, nor] = countries;
console.log(fin, est, sw, den, nor);

// 3-) width: 20, height: 10, area: 200, perimeter: 60  --> destrructuring
const rectangle = { width: 20, height: 10, area: 200, perimeter: 60 };
const { width, height, area, perimeter } = rectangle;
console.log(width, height, area, perimeter);
