
function isPalindrome(word) {
    // Kelimeyi küçük harfe çevirip boşlukları kaldırın
    word = word.toLowerCase().replace(/\s/g, '');
  
    // Kelimeyi tersten çevirin
    const reversedWord = word.split('').reverse().join('');
  
    // Kelime aslında bir palindrom mu kontrol edin
    return word === reversedWord;
  }
  
  // Palindrom bir kelime örneği
  const kelime1 = "kayak";
  console.log(kelime1 + " bir palindrom mu? " + isPalindrome(kelime1));
  
  // Palindrom olmayan bir kelime örneği
  const kelime2 = "hello";
  console.log(kelime2 + " bir palindrom mu? " + isPalindrome(kelime2));


  //Hoca cozumu
  const kelime = "kelime"
  const tersKelime = kelime.split("").reverse().join("")
  console.log(tersKelime);
  if(kelime === tersKelime){
    console.log()
  }
  


// Bir kelimeyi tersine çevirerek farklı bir değişkene atayın. Orijinal kelimenin palindrom (tersine de aynı olan) olup olmadığını kontrol eden bir if else yapısı oluşturun. Örneğin, "kayak" kelimesi palindromdur, ancak "merhaba" palindrom değildir.
//var palindromWord = prompt("Bir palindrom kontrolü için değer giriniz.");
// if (isPalindrom) {​​
//     console.log("Bu bir palindromdur.");
// }​​ else {​​
//     console.log("Palindrom değildir.");
// }​​
/////////////////////////////////////////////////////////////

// Kullanıcıdan yaş ve uyruk bilgisini alın
const yas = parseInt(prompt("Yaşınızı girin:"));
const turkVatandasiMi = confirm("Türk vatandaşı mısınız?");

// Koşulları sorgulayan if sorgusu
if (turkVatandasiMi) {
  if (yas >= 30) {
    console.log("Aday olabilirsiniz.");
  } else if (yas >= 18) {
    console.log("Oy kullanabilirsiniz.");
  } else {
    console.log("18 yaşından küçük olduğunuz için oy kullanamazsınız veya aday olamazsınız.");
  }
} else {
  if (yas >= 18) {
    console.log("Türk vatandaşı olmadığınız için aday olamazsınız, ancak oy kullanabilirsiniz.");
  } else {
    console.log("18 yaşından küçük olduğunuz için ne aday olabilirsiniz ne de oy kullanabilirsiniz.");
  }
}



// Kullanıcıdan temsili bir oy verme ve aday olma durumlarını sorgulamak için yaş ve uyruk bilgisi alın. Aşağıdaki koşulları uygulayan bir if sorgusu yazın.
// a- Türk vatandaşı ve 30 yaşından büyük ise aday olabilir.
// b- Türk vatandaşı ve 18 yaşından büyük ise oy kullanabilir.
// c- Türk vatandaşı değilse ancak 18 yaşından büyük ise aday olamaz ama oy verebilir.

/////////////////////////////////////////////////////////////


// Kullanıcıdan ay ismini alın
const ayIsmi = prompt("Bir ay ismi girin:").toLowerCase();

// Ay gün sayısını hesaplayan switch case yapısı
let gunSayisi;

switch (ayIsmi) {
  case "ocak":
  case "mart":
  case "mayıs":
  case "temmuz":
  case "ağustos":
  case "ekim":
  case "aralık":
    gunSayisi = 31;
    break;
  case "nisan":
  case "haziran":
  case "eylül":
  case "kasım":
    gunSayisi = 30;
    break;
  case "şubat":
    gunSayisi = "28 veya 29";
    break;
  default:
    gunSayisi = "Geçersiz ay ismi";
}

console.log(`${ayIsmi} ayı ${gunSayisi} gün sürer.`);



// switch
// Kullanıcıdan bir ay ismi alın ve girilen ayın kaç gün olduğunu konsola yazdırın. (Switch Case)
/////////////////////////////////////////////////////////////

// Kullanıcıdan marka ve renk bilgilerini alın
const marka = prompt("Markayı girin:").toLowerCase();
const renk = prompt("Renk seçin:").toLowerCase();

// Stok durumu değişkenini tanımlayın
let stokDurumu;

switch (marka) {
  case "bmw":
    switch (renk) {
      case "siyah":
      case "beyaz":
      case "gri":
        stokDurumu = "Var";
        break;
      default:
        stokDurumu = "Yok";
    }
    break;
  case "mercedes":
    switch (renk) {
      case "siyah":
      case "beyaz":
        stokDurumu = "Var";
        break;
      default:
        stokDurumu = "Yok";
    }
    break;
  case "audi":
    switch (renk) {
      case "siyah":
      case "gri":
        stokDurumu = "Var";
        break;
      default:
        stokDurumu = "Yok";
    }
    break;
  default:
    stokDurumu = "Marka bulunamadı";
}

console.log(`${marka} markasının ${renk} renkli aracı stokta ${stokDurumu}.`);


// BMW, Mercedes ve Audi Markaları için farklı renk çeşitlerine göre stok durumunu kontrol eden iç içe bir switch yapısı oluşturun. yaratacağınız stokDurumu değişkenini stokta "Var" veya "Yok" olarak güncellesin.

