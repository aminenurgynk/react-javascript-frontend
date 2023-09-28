// Yazacağınız fonksiyonlar içerisinde console.log ifadesi yer almayacak.

// 1- Verilen iki sayının çarpımını döndüren bir fonksiyon yazın. (Arrow Function ile)
const multiply = (number1, number2) => number1 * number2;
console.log(multiply(3, 5));

// 2- Verilen bir cümlenin kelime sayısını döndüren bir arrow fonksiyon yazın.
let sentence = "Hi All!, It is Amine";
const calculationNumberOfWord = (sentence) => sentence.split(" ").lenght;
console.log(calculationNumberOfWord(sentence));

// 3- Verilen bir sayının faktöriyelini hesaplayan bir fonksiyon yazın. (Function Declaration Yöntemi ile)
function factorialNumber(number) {
  let result = 1;
  for (let i = 2; i <= number; i++) {
    result *= i;
  }
  return result;
}

console.log(factorialNumber(8));

// 4- Verilen bir sayının asal olup olmadığını kontrol eden bir fonksiyon yazın. (Function Expression Yöntemi ile)

const primeNumber = function (number) {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= Math.ceil(Math.sqrt(number)); i++) {
    if (number % i == 0) {
      return false;
    }
  }
  return true;
};
console.log(primeNumber(91));

// 5- Verilen bir dizi içindeki en büyük sayıyı bulan bir fonksiyon yazın. Bu yanlis 

const myArray = [5, 1, 24, 8, 10, 67];
const maxNumber = function (array) {
  let numberMax = array[0];
  for (let i = 1; i < array.lenght; i++) {
    if (array[i] > numberMax) {
      numberMax = array[i];
    }
  }
  return numberMax;
};
console.log(maxNumber(myArray));

// 6- Verilen bir dizi içindeki sayıların toplamını hesaplayan bir fonksiyon yazın.

const sumofArray = function(array){
    let sum = 0;
    for (let i = 0; i < array.lenght; i++){
        sum += array[i]
    }
    return result
}
console.log(sumofArray(myArray));
// 7-Yukarıdaki son iki fonksiyonu arrow function olarak yeniden yazın.

// Buradan itibaren yalnızca arrow function kullanıyoruz.

// 8- Verilen bir stringi tersine çeviren bir fonksiyon yazın.

// 9- Verilen bir dizinin elemanlarını rastgele karıştıran bir fonksiyon yazın. (Kopya çekmek yok. Mantık kurmaya çalışın)

// 10- Verilen bir sayının pozitif bölenlerini bulan bir fonksiyon yazın.(örn. 12'nin pozitif bölenleri 1,2,3,4,6,12)

// 11- Verilen bir stringin içinde belirli bir karakterin kaç kez tekrarlandığını hesaplayan bir fonksiyon yazın.

// BONUS - içerisine kaç adet sayı yazılırsa yazılsın, sayıların toplamını döndüren bir fonksiyon yazınız.
