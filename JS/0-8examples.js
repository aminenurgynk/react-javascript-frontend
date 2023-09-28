// Kullanılacak diziler
// const dizi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const dizi1 = ["elma", "armut", "kiraz", "üzüm"];
// const dizi2 = [1, 2, -3, 4, -5, 6, 7, 8, 9, 10];
// const dizi3 = [2, 5, 3, 4, 7, 10, 1, 9, 8, 6];

// ---------------forEach-------------------
// 1- Verilen bir dizinin tüm elemanlarını ekrana yazdıran bir forEach döngüsü oluşturun.
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
array.forEach((element) => {
  console.log(element);
});

// 2- Verilen bir dizinin sadece çift sayılarını ekrana yazdıran bir forEach döngüsü oluşturun.

array.forEach((element) => {
  if (element % 2 == 0) {
    console.log(element);
  }
});
// 3- Verilen bir dizinin elemanlarını 2 ile çarpan ve sonucu yeni bir diziye ekleyen bir forEach döngüsü oluşturun.
const bosDizi = [];
array.forEach((element) => {
  sayi = element * 2;
  bosDizi.push(sayi);
});
console.log(bosDizi);

// 4- Verilen bir dizinin elemanlarının toplamını hesaplayan bir forEach döngüsü oluşturun.(reduce kullanmadan)
let sum = 0;
array.forEach((element) => {
  sum += element;
});
console.log(sum);

// 5- Verilen bir dizinin elemanlarını ekrana yazdırırken, dizinin son elemanını özel bir mesajla birlikte yazdıran bir forEach döngüsü oluşturun.
let uzunluk = 0;
array.forEach((element) => {
  uzunluk++;
  if (uzunluk == array.length) {
    console.warn(`Bu dizinin son elemanidir ${element}`);
  } else {
    console.log(element);
  }
});

// ---------------map-------------------
// 6- Verilen bir dizideki elemanları büyük harf yaparak yeni bir dizi oluşturan bir map döngüsü oluşturun.

const array1 = ["elma", "armut", "kiraz", "üzüm"];
const buyukHarfDizi = array1.map((eleman) => eleman.toUpperCase());
console.log(buyukHarfDizi);

// 7- Verilen bir dizinin elemanlarını 1 ile 10 arasında rastgele bir sayıyla toplayıp yeni bir dizi oluşturan bir map döngüsü oluşturun.

const calculate = array.map(
  (element) => element + Math.floor(Math.random() * 10 + 1)
);
console.log(calculate);

// 8- Verilen bir stringin her bir kelimesini ters çevirerek yeni bir dizi oluşturan bir map döngüsü oluşturun.
const newArray = [];
const reverseMethod = array1.map((element) =>
  element.split("").reverse().join("")
);
console.log(reverseMethod);

// 9- Verilen bir dizinin elemanlarını(elemanlar sayı olmalı) stringe çevirerek yeni bir dizi oluşturan bir map döngüsü oluşturun.

const intToString = array.map((element) => {
  return element.toString();
});
console.log(intToString);

// 10- Verilen bir dizi içindeki stringleri ters çevirerek yeni bir dizi oluşturan bir map döngüsü oluşturun. Ancak, bu sefer reverse() yerine kendi ters çevirme algoritmanızı oluşturun.

const tersCevrilmisDizi = array1.map(function (metin) {
  let tersMetin = "";
  for (let i = metin.length - 1; i >= 0; i--) {
    tersMetin += metin[i];
  }
  return tersMetin;
});

console.log(tersCevrilmisDizi);

// ---------------filter-------------------
// 11- Verilen bir dizi içerisindeki çift sayıları filtreleyen bir örnek yazın.
const evenNumber = array.filter((element) => {
  return element % 2 === 0;
});
console.log(evenNumber);

// 12- Verilen bir dizi içerisindeki stringlerden belirli bir uzunluğa sahip olanları filtreleyen bir örnek yazın.
const longWord = array1.filter((element) => {
  return element.length > 4;
});
console.log(longWord);
// ---------------reduce-------------------
// 13- Verilen bir dizi içerisindeki sayıların toplamını, her bir sayıya 2 ekleyerek hesaplayan bir örnek yazın.
const sumOfNumber = array.reduce((x1, x2) => {
  return x1 + x2 + 2;
}, 0);
console.log(sumOfNumber);

// ---------------find-------------------
// 14- Verilen bir dizi içerisindeki ilk çift sayıyı döndüren bir örnek
const firstEvenNumber = array.find((element) => {
  return element % 2 === 0;
});
console.log(firstEvenNumber);

// 15- Verilen bir dizi içerisindeki son çift sayıyı döndüren bir örnek
const lastEvenNumber = array.reverse().find((element) => {
  return element % 2 === 0;
});
console.log(lastEvenNumber);

// ---------------some-------------------
// 16- Verilen bir dizi içerisinde en az bir negatif sayı olup olmadığını kontrol eden bir örnek
const array2 = [1, 2, -3, 4, -5, 6, 7, 8, 9, 10];
const anyMinus = array2.some(function (element) {
  return element < 0;
});
console.log(anyMinus);

// ---------------every-------------------
// 17- Verilen bir dizi içerisindeki tüm sayıların pozitif olduğunu kontrol eden bir örnek
const allPositive = array2.every(function (element) {
  return element > 0;
});
console.log(allPositive);

// ---------------sort-------------------
// 18- Verilen bir dizi içerisindeki sayıları sıralayan bir örnek\
array2.sort(function (a, b) {
  return a - b;
});
console.log(array2);
