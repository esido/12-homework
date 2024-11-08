// 1
// function getLast(arr) {
//   if (arr.length) {
//     return arr[arr.length - 1];
//   } else {
//     return -1;
//   }
// }

// console.log(getLast([]));

// 2

// function getNum(n) {
//   return () => {
//     return n++;
//   };
// }

// const num = getNum(10);

// console.log(num());
// console.log(num());
// console.log(num());

// 3

// function sleep(millis) {
//   return new Promise((res) => setTimeout(res, millis));
// }

// let t = Date.now();
// sleep(100).then(() => {
//   console.log(Date.now() - t);
// });

// sleep(200).then(() => {
//   console.log(Date.now() - t);
// });

// 4
// function myReduce(arr, callback, val) {
//   let ac = val;
//   let start = 0;

//   if (ac === undefined) {
//     ac = arr[0];
//     start = 1;
//   }

//   for (let i = start; i < arr.length; i++) {
//     ac = callback(ac, arr[i], i, arr);
//   }

//   return ac;
// }

// let arr = [1, 2, 3];
// let result = myReduce(arr, (a, b) => a + b, 0);
// console.log(result);

// 4b

// 5

// class Shakl {
//   perimetr() {}

//   yuza() {}
// }

// class Togri_turtburchak extends Shakl {
//   constructor(a, b) {
//     super();
//     this.a = a;
//     this.b = b;
//   }

//   perimetr() {
//     return 2 * (this.a + this.b);
//   }

//   yuza() {
//     return this.a * this.b;
//   }
// }

// class Aylana extends Shakl {
//   constructor(radius) {
//     super();
//     this.radius = radius;
//   }

//   perimetr() {
//     return 2 * Math.PI * this.radius;
//   }

//   yuza() {
//     return Math.PI * this.radius ** 2;
//   }
// }

// const turtburchak = new Togri_turtburchak(5, 10);
// const aylana = new Aylana(7);

// console.log(turtburchak.perimetr());
// console.log(turtburchak.yuza());
// console.log(aylana.perimetr());
// console.log(aylana.yuza());

// 6

// const discountClosure = (p) => {
//   let percentage = p / 100;
//   return function (n) {
//     return n - n * percentage;
//   };
// };

// const discount = discountClosure(20);
// console.log(discount(100));

// 7

// const savatcha = () => {
//   const arr = [];

//   return (item) => {
//     if (item) {
//       arr.push(item);
//     }

//     return arr;
//   };
// };

// const res = savatcha();

// console.log(res("olma"));
// console.log(res("nok"));

// 8

// const plusNum = (first) => {
//   return function (second) {
//     return first + second;
//   };
// };

// const addNum = plusNum(5);
// console.log(addNum(10));

// 9

// function checkPassword(password) {
//   return function (p) {
//     return p === password;
//   };
// }

// const res = checkPassword("hello");

// console.log(res("world"));
// console.log(res("hello"));

// 10

// 11

// function pow(base, exponent) {
//   if (exponent === 0) {
//     return 1;
//   }

//   return base * pow(base, exponent - 1);
// }

// console.log(pow(2, 3));

// 12

// function faktoriyal(n) {
//   if (n === 0 || n === 1) {
//     return 1;
//   }

//   return n * faktoriyal(n - 1);
// }

// console.log(faktoriyal(3));

// 13

// function promise1() {
//   return new Promise((res) => {
//     setTimeout(() => {
//       res("1");
//     }, 1000);
//   });
// }

// function promise2() {
//   return new Promise((res) => {
//     setTimeout(() => {
//       res("2");
//     }, 1000);
//   });
// }

// function promise3() {
//   return new Promise((res) => {
//     setTimeout(() => {
//       res("3");
//     }, 1000);
//   });
// }

// Promise.all([promise1(), promise2(), promise3()]).then((results) => {
//   console.log(results);
// });

// 14

// function promise1() {
//   return new Promise((res) => {
//     setTimeout(() => {
//       res("1");
//     }, 1000);
//   });
// }

// function promise2() {
//   return new Promise((res) => {
//     setTimeout(() => {
//       res("2");
//     }, 2000);
//   });
// }

// function promise3() {
//   return new Promise((res) => {
//     setTimeout(() => {
//       res("3");
//     }, 3000);
//   });
// }

// Promise.race([promise1(), promise2(), promise3()]).then((result) => {
//   console.log(result);
// });
