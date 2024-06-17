// ========================== 1 - misol =======================

// (function(){
//     console.log("hello");
// })()



// (function(){
//     console.log("bye");
// })()
  


// (function(){
//     console.log("good");
// })()
  


// (function(){
//     console.log("frends");
// })()
  


// bizga bu IIFE e'lon qilinishi bilan ishlaydi:
//  tashqaridan to'sish u-n ishlatamiz : 
//  yani himoyalash sifatida k-k boladi:


// ========================== 2 - misol =======================

// a)


// function filters(arr) {
//     return arr.filter(function(number) {
//         return number % 2 === 0;
//     });
// }
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const res = filters(numbers);
// console.log(res);


// b) 


// function sumarr(arr) {
//     return arr.reduce(function(sum , number){
//         return sum + number;
//     }, );
// }
// const number = [1, 2, 3, 4, 5];
// const sum = sumarr(number);
// console.log(sum);



// c)  


// function sumarr(arr) {
//     return arr.reduce(function(sum, number){

//     },);
// }
// const arr = +prompt('sonni kiriting');
// console.log(arr ** 5);

// d)


// Pure function sof funksiya - doim bir xil argument qabul qilganda 
// bir xil natija chiqaradigan funksiya




// ========================== 3 - misol =======================
// Callback function



// a ) 

// function mapArray(arr, map) {
//     return arr.map(map);
// }
// const numbers = [1, 2, 3, 4];
// console.log(numbers);



// function square(number) {
//     return number * number;
// }
// console.log(mapArray(numbers, square)); 



// function double(number) {
//     return number * 2;
// }
// console.log(mapArray(numbers, double));




// b ) 



// setTimeout(function(){
//     console.log("salom");
// }, 2000)



// c ) 


// natijani keyinchalik chiqarib berish un soniyalar orqali 




// ========================== 4 - misol =======================



// a )


// function countDown(number) {
//     if (number <= 0) {
//         return;
//     }
//     console.log(number);
//     countDown(number - 1);
// }

// countDown(5);




// =============== 3 - Q ism masalalari  ================

// ========================== 1 - misol =======================

// function sum(obj) {
//     const keys = Object.keys(obj);
//     keys.forEach(function(key) {
//         console.log(key);
//     });
// }
// const ras = {
//     name: "John",
//     age: 30
// };
// sum(ras);



// ========================== 2 - misol =======================


// function sum(obj) {
//     const keys = Object.keys(obj);
//     keys.forEach(function(key){
//         console.log(result);
//     }) 
// }
// const result = {
//     name : 'shuhratbek',
//     age : 21,
// };
// sum(result);

 

// ========================== 3 - misol =======================

