const myPromise = Promise.resolve("Promise");

function funcOne() {
  myPromise.then((res) => console.log(res));
  setTimeout(() => console.log("Timeout1"), 1000);
  console.log("Last line 1");
}
function funTwo() {
  setTimeout(() => console.log("Timeout2"), 500);
  console.log("Last line 2");
}
funcOne();
funTwo();

//Last line 1
//Last line 2
//Promise
//Timeout2
//Timeout1

const arr = [];
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    arr.push(i);
  }
}
console.log(arr); //[0, 2, 4, 6, 8]

var result = 0;
setTimeout(function () {
  result = 10;
}, 1000);
console.log(result); //0

setTimeout(() => {
  console.log(result); //10
}, 2000);
