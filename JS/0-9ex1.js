// 1- myObject isimli boş bir nesne oluşturun.
const myObject = {};
// 2- nesnenin içerisine isim, yas, cinsiyet ve meslek özelliklerini sırasıyla ekleyin
myObject.name = "Ünal";
myObject.age = 26.5;
myObject.gender = "Male";
myObject.occupation = "geology";
// 3- nesnenin içerisinden cinsiyet özelliğini kaldırın.
delete myObject.gender;
// 4- myObject nesnesinin özelliklerini bir başka değişkene kopyalayın.
const copyMyObject = Object.assign({}, myObject);
// 5- nesnenizin anahtarlarını konsola yazdırın.
console.log(Object.keys(myObject)); // name, age gender
// 6- nesnenizin değerlerini konsola yazdırın.
console.log(Object.values(myObject)); // Unal
// 7- nesnenizin tüm anahtar-değer çiftlerini konsola yazdırın.
for (const [key, value] of Object.entries(myObject)) {
  if (typeof value !== "function") {
    console.log(`${key}: ${value}`);
  }
}

// 8- nesnenizin içerisinde isim anahtarına sahip bir özellik var mı diye kontrol edin
console.log("name" in myObject);

// 9- nesnenizin özelliklerine değişiklik ve ekleme çıkarma yapılabilmesini engelleyin.
// * freeze
Object.freeze(myObject);
myObject.age = 31;
delete myObject.age;
console.log(myObject);

// 10- nesnenizin özelliklerinde değişiklik yapılabilsin ancak ekleme çıkarma yapılabilmesini engelleyin.
// * seal
Object.seal(myObject);
myObject.name = "value1";
myObject.occupation = "Volvo";
delete myObject.age;
console.log(myObject);

// student isimli bir nesne oluşturun ve içerisine 3 adet özellik ekleyin. Nesnenin özelliklerini `for...in` döngüsüyle dolaşan ve konsola yazdıran bir fonksiyon yazın.

// İçerisinde 3 adet öğrenci nesnesi bulunan bir dizi oluşturun. her nesnenin kendisine ait isim ve not özellikleri bulunsun.(örn. {name: "Cem", grades: [80, 90, 50]}) Öğrencilerin ortalama notlarını `for...of` döngüsü kullanarak hesaplayın ve dersten geçip geçmedikleri bilgisini isimleriyle birlikte konsola yazdırın. (Geçer not 60)

// aşağıda verilen aracBilgileri nesnesi içerisinde bulunan her bir servis kayıdına ait tarih bilgisi ve ilgili servis kayıdına ait detay kısmında bulunan aciklama ve ucret bilgilerini konsola yazdırın.
/*(örn çıktı:
05.01.2020 balata değişimi - 1700 TL
05.01.2020 yağ değişimi - 700 TL
05.01.2020 boya koruma - 700 TL
...
...
...
28.08.2022 seramik kaplama - 4500 TL
)
*/

const aracBilgileri = {
  id: "audiA6_123",
  model: "audiA6",
  yil: 2019,
  renk: "kırmızı",
  servisKayitlari: [
    {
      id: "audiA6_123_1",
      tarih: "05.01.2020",
      km: 2500,
      ucret: 3000,
      detay: [
        {
          id: "audiA6_123_1_1",
          aciklama: "balata değişimi",
          ucret: 1700,
        },
        {
          id: "audiA6_123_1_2",
          aciklama: "yağ değişimi",
          ucret: 700,
        },
        {
          id: "audiA6_123_1_3",
          aciklama: "boya koruma",
          ucret: 600,
        },
      ],
    },
    {
      id: "audiA6_123_2",
      tarih: "25.06.2021",
      km: 10500,
      ucret: 5000,
      detay: [
        {
          id: "audiA6_123_2_1",
          aciklama: "balata değişimi",
          ucret: 2700,
        },
        {
          id: "audiA6_123_2_2",
          aciklama: "yağ değişimi",
          ucret: 1700,
        },
        {
          id: "audiA6_123_2_3",
          aciklama: "boya koruma",
          ucret: 600,
        },
      ],
    },
    {
      id: "audiA6_123_3",
      tarih: "28.08.2022",
      km: 25400,
      ucret: 10000,
      detay: [
        {
          id: "audiA6_123_3_1",
          aciklama: "balata değişimi",
          ucret: 3500,
        },
        {
          id: "audiA6_123_3_2",
          aciklama: "yağ değişimi",
          ucret: 2000,
        },
        {
          id: "audiA6_123_3_3",
          aciklama: "seramik kaplama",
          ucret: 4500,
        },
      ],
    },
  ],
};
