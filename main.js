// HOF 1

// const students = [
//     { name: "Quincy", percent: 96 },
//     { name: "Jason", percent: 84 },
//     { name: "Alexis", percent: 100 },
//     { name: "Sam", percent: 65 },
//     { name: "Katie", percent: 90 },
//     { name: "Anna", percent: 75 },
// ];

// let  getNames = students.map((el, i, arr) => {
//     if (el.percent>60 && 70 >= el.percent ){
//         el.grade = 3
//     }
//     if (el.percent > 70 && 85 >= el.percent) {
//         el.grade = 4
//     }
//     if (el.percent > 85 && 100 >= el.percent) {
//         el.grade = 5
//     }
//     return el
// })

// console.log(getNames);





// HOF 2





// const animals = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];

// const wordCount = animals.reduce((acc, el) => {
//     acc[el] = (acc[el] || 0) + 1;
//     return acc;
// }, {});

// console.log(wordCount);




// HOF 3



// massiv = [1, 2, 3, 4, 5]


// let massivPow = massiv.map((el) => {
//     return el**2;
// });


// console.log(massivPow);






// HOF 4





// const numbers = [1, -4, 12, 0, -3, 29, -150];

// const musbat = numbers.filter(num => num > 0);
// const sum = musbat.reduce((acc, curr) => acc + curr, 0);

// console.log(sum);




// HOF 5


// const input = 'George Raymond Richard Martin';

// const initials = input
//     .split(' ')
//     .map(word => word[0])
//     .join('');
//     console.log(initials);




// HOF 6




// const people = [
//     { name: 'John', age: 13 },
//     { name: 'Mark', age: 56 },
//     { name: 'Rachel', age: 45 },
//     { name: 'Nate', age: 67 },
//     { name: 'Jeniffer', age: 65 }
// ];

// people.sort((a, b) => a.age - b.age);

// const youngest = people[0];
// const oldest = people[people.length - 1];

// const ageDifference = oldest.age - youngest.age;

// console.log(ageDifference);




// HOF 7

// const massiv = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// let juftlar = massiv.filter((el) => el % 2 === 0)
// let toqlar = massiv.filter((el) => el % 2 === 1)


// console.log("Juftlar:", juftlar);
// console.log("Toqlar:", toqlar);




// HOF 8


// function ochirBirXilQiymat(arr) {
// return arr.reduce((result, element, index) => {
//     if (arr.indexOf(element) === index) {
//         result.push(element);
//     }
//     return result;
// }, []);
// }

// var testMassiv = [1, 2, 3, 2, 4, 5, 6, 5, 7, 8];
// var natija = ochirBirXilQiymat(testMassiv);

// console.log("Output:", natija);







// HOF 9



// var products = [
//     { id: 1, name: 'Product A', price: 50, rating: 4.5, discount: 10 },
//     { id: 2, name: 'Product B', price: 30, rating: 3.8, discount: 5 },
//     { id: 3, name: 'Product C', price: 70, rating: 4.0, discount: 15 },
// ];

// let id = products.sort((a, b) => a.id - b.id);
// let name = products.sort((a, b) => a.name - b.name);
// let price = products.sort((a, b) => a.price - b.price);
// let rating = products.sort((a, b) => a.rating - b.rating);
// let discount = products.sort((a, b) => a.discount - b.discount);


// console.log(id);
// console.log(name);
// console.log(price);
// console.log(rating);
// console.log(discount);




// HOF 10




// let products = [
//     { id: 1, name: 'Product A', price: 50, rating: 4.5, discount: 10 },
//     { id: 2, name: 'Product B', price: 30, rating: 3.8, discount: 5 },
//     { id: 3, name: 'Product C', price: 70, rating: 4.8, discount: 15 },
// ];

// let engKuchliMahsulot = products.reduce(function (maxRatingProduct, currentProduct) {
//     return maxRatingProduct.rating > currentProduct.rating ? maxRatingProduct : currentProduct;
// }, {});

// console.log("Eng kuchli mahsulot:", engKuchliMahsulot);




// HOF 11



// var products = [
//     { id: 1, name: 'Product A', price: 50, rating: 4.5, discount: 10 },
//     { id: 2, name: 'Product B', price: 30, rating: 3.8, discount: 5 },
//     { id: 3, name: 'Product C', price: 70, rating: 4.0, discount: 15 },
// ];

// var engPastMahsulot = products.reduce( (minPriceProduct, currentProduct) =>{
//     return minPriceProduct.price < currentProduct.price ? minPriceProduct : currentProduct;
// }, {});

// console.log("Eng past narxli mahsulot:", engPastMahsulot);



// HOF 12



// let products = [
//     { id: 1, name: 'Product A', price: 50, rating: 4.5, discount: 10 },
//     { id: 2, name: 'Product B', price: 30, rating: 3.8, discount: 5 },
//     { id: 3, name: 'Product C', price: 70, rating: 4.0, discount: 15 },
// ];

// let narxlarYigindisi = products.reduce(function (acc, el) {
//     return acc + el.price;
// }, 0);

// console.log("Barcha mahsulotlar narxlari yig'indisi:", narxlarYigindisi);




// HOF 13



// let products = [
//     { id: 1, name: 'Product A', price: 50, rating: 4.5, discount: 10 },
//     { id: 2, name: 'Product B', price: 30, rating: 3.8, discount: 5 },
//     { id: 3, name: 'Product C', price: 70, rating: 4.0, discount: 15 },
// ];

// let faqatNomlar = products.map( (product) => {
//     return product.name;
// });

// console.log("Faqatgina nomlardan iborat massiv:", faqatNomlar);



// HOF 14


// let products = [
//     { id: 1, name: 'Product A', price: 50, rating: 4.5, discount: 10 },
//     { id: 2, name: 'Product B', price: 30, rating: 3.8, discount: 5 },
//     { id: 3, name: 'Product C', price: 70, rating: 4.0, discount: 15 },
//     { id: 4, name: 'Product D', price: 70, rating: 4.0, discount: 15 },
//     { id: 5, name: 'Product E', price: 70, rating: 4.0, discount: 15 },
//     { id: 6, name: 'Product F', price: 70, rating: 4.0, discount: 15 },
// ];

// function nomniTop(id) {
//     let product = products.find( (element) => element.id === id);

//     return product ? product.name : "Element topilmadi";
// }
// let nom = nomniTop(5);
// console.log("Id si 5 bo'lgan element nomi:", nom);




// HOF 15





// let products = [
//     {
//         id: 6,
//         name: "Smarthpone",
//         price: 12000,
//         rating: 4.5,
//         discount: 20,
//     },
//     {
//         id: 2,
//         name: "Acer",
//         price: 10000,
//         rating: 4.3,
//         discount: 10,
//     },
//     {
//         id: 1,
//         name: "Mac book",
//         price: 17000,
//         rating: 4.7,
//         discount: 40,
//     },
//     {
//         id: 4,
//         name: "HP",
//         price: 21000,
//         rating: 4.1,
//         discount: 30,
//     },
//     {
//         id: 5,
//         name: "Dell",
//         price: 35000,
//         rating: 4.9,
//         discount: 30,
//     },
// ];

// function ochirishById(arr, id) {
// return arr.filter((element) =>element.id !== id);
// }

// let yangiProducts = ochirishById(products, 4);
// console.log("Id si 4 bo'lgan elementni o'chirilgan mahsulotlar:", yangiProducts);




// HOF 16



// function faqatHarflar(str) {
//     let harflar = str.split('');
//     let faqatHarflarMi = harflar.every((harf) => /^[a-zA-Z]+$/.test(harf));

//     return faqatHarflarMi;
// }

// let testSatr1 = "FaqatHarflar";
// let testSatr2 = "Harflar123";

// console.log(testSatr1 + " faqat harflardan iboratmi? " + faqatHarflar(testSatr1));
// console.log(testSatr2 + " faqat harflardan iboratmi? " + faqatHarflar(testSatr2));




// HOF 17


// let inputArray = [false, 1, 10, "", null, "zafarbek", 1.13, 0];


//     let truthy = inputArray.filter((element) =>Boolean(element));
//     console.log(truthy);
//     let falsy = inputArray.filter((element) => !Boolean(element));
//     console.log(falsy);



// HOF 18


// let inputSatr = "Men Abdulaziz Programmerman";

//     let sozlar = inputSatr.split(' ');
//     let uzunliklar = sozlar.map((soz) => soz.length);

// console.log("Input:", uzunliklar);



// HOF 19

// let inputSatr = "Men Abdulaziz Programmerman";

//     let sozlar = inputSatr.split(' ');
//     let natija = sozlar.some((soz) => soz === '');

// console.log("Input:", inputSatr);
// console.log("Output:", natija);




// HOF 20


// let inputObject = { a: 2, b: 5, c: 7 };

//     let massiv = Object.entries(inputObject).map(([kalit, qiymat]) =>kalit + qiymat);

// console.log("Input:", inputObject);





// HOF 21



// function digitSum(son) {
//     let sonString = son.toString();

//     if (sonString.length > 1) {
//         return Number(sonString[0]) + digitSum(Number(sonString.slice(1)));
//     } else {
//         return son;
//     }
// }

// let testSon = 12345;
// let natija = digitSum(testSon);

// console.log("Input:", testSon);
// console.log("Output:", natija);




// HOF 22



// let pupils = [
//     { name: 'Ali', marks: [80, 90, 75] },
//     { name: 'Vali', marks: [85, 88, 92] },
//     { name: 'Hasan', marks: [92, 88, 95] },
// ];

// let barchaOquvchilarProtsetlari = pupils.map(function (oquvchi) {
//     let oquvchiMarks = oquvchi.marks.reduce((total, mark) =>  total + mark, 0);

//     let oquvchiOrtacha = oquvchiMarks / oquvchi.marks.length;
//     return { name: oquvchi.name, average: oquvchiOrtacha };
// });

// let oquvchilarOrtacha = barchaOquvchilarProtsetlari.reduce((total, oquvchi) => total + oquvchi.average, 0) / barchaOquvchilarProtsetlari.length;

// console.log("Barcha o'quvchilar protsentlarining o'rtachasi:", oquvchilarOrtacha);
// console.log("O'quvchilar protsentlar va ismi:", barchaOquvchilarProtsetlari);





// HOF 23



// let pupils = [
//     { name: 'Ali', marks: [80, 90, 75] },
//     { name: 'Vali', marks: [85, 88, 92] },
//     { name: 'Hasan', marks: [92, 88, 95] },
// ];

// let barchaOquvchilar = pupils.map(function (oquvchi) {
//     let oquvchiMarksSum = oquvchi.marks.reduce((total, mark) => total + mark, 0);

//     let oquvchiOrtacha = oquvchiMarksSum / oquvchi.marks.length;

//     let grade;
//     if (oquvchiOrtacha >= 90 && oquvchiOrtacha <= 100) {
//         grade = 5;
//     } else if (oquvchiOrtacha >= 80 && oquvchiOrtacha < 90) {
//         grade = 4;
//     } else if (oquvchiOrtacha >= 70 && oquvchiOrtacha < 80) {
//         grade = 3;
//     } else {
//         grade = 2;
//     }

//     return { name: oquvchi.name, grade: grade };
// });

// console.log("O'quvchilar va baho:", barchaOquvchilar);






// HOF 24





// let pupils = [
//     { name: 'Ali', marks: [80, 90, 75] },
//     { name: 'Vali', marks: [85, 88, 92] },
//     { name: 'Hasan', marks: [92, 88, 95] },
// ];

// let barchaOquvchilar = pupils.map(function (oquvchi) {
//     let oquvchiMarksSum = oquvchi.marks.reduce((total, mark) => total + mark, 0);

//     let oquvchiOrtacha = oquvchiMarksSum / oquvchi.marks.length;

//     let isPassed = oquvchiOrtacha >= 70;

//     return { name: oquvchi.name, isPassed: isPassed };
// });

// console.log("O'quvchilar va baho:", barchaOquvchilar);






// HOF 25




// const pupils = [
//     { name: "Elbek", percent: 95 },
//     { name: "Zafar", percent: 78 },
//     { name: "Aziz", percent: 83 },
//     { name: "Jasur", percent: 88 },
//     { name: "Bobur", percent: 66 },
//     { name: "Kamron", percent: 75 },
// ];

// let otganlarSon = pupils.reduce((total, oquvchi) => total + (oquvchi.percent >= 70 ? 1 : 0), 0);

// let otmaganlarSon = pupils.reduce((total, oquvchi) =>total + (oquvchi.percent < 70 ? 1 : 0), 0);

// console.log("Imtihondan o'tganlar soni:", otganlarSon);
// console.log("Imtihonda o'ta olmaganlar soni:", otmaganlarSon);

