const myPromise = Promise.resolve(('Promise'))

function funcOne() {
    myPromise.then((res) => console.log(res))
    setTimeout(() => console.log("Timeout1"), 1000)
    console.log("Last line 1")
}
function funTwo() {
    setTimeout(() => console.log("Timeout2"), 500)
    console.log("Last line 2")
}
funcOne()
funTwo()

const arr = []
for (let i = 0; i < 10; i++){
    if (i % 2 === 0) {
        arr.push(i)
    }
}
console.log(arr)

var result = 0;
setTimeout(function () {
    result = 10;
}, 1000)
console.log(result)

setTimeout(() => {
    console.log(result)
},2000)
