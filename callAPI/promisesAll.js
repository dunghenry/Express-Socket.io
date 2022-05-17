const promise1 = new Promise(function (resolve) {
    setInterval(function () {
        resolve("Promise 1");
    }, 2000)
})
const promise2 = new Promise(function (resolve) {
    setInterval(function () {
        resolve("Promise 2");
    }, 5000)
})
//Sync: 7s

promise1.then((data) =>console.log(data))
promise2.then((data) => console.log(data))

// Async : 5s
async function run() {
    let data;
    console.time("time process");
    data = await Promise.all([promise1, promise2])
    // console.log(data)
    console.timeEnd("time process");
    return data;
}

run(); //return promise
const a = run();
a.then((data) => console.log(data)) //(2) ['Promise 1', 'Promise 2']
