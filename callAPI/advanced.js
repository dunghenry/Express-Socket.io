const X = x => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(x);
        }, 4000)
    })
}
const Y = y => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(y);
        }, 2000)
    })
}
 //Sd async-await mất hơn 7s, sd promise mất hơn 4s
async function sum(x, y) {
    console.time("time process");
    //const _x = await X(x);//Mất 4s để lấy ra x
    // const _y = await Y(y);//Mất 3s để lấy ra y
    //const data = await Promise.all([Y(y), X(x)]); //Có thể dùng destructuring 
    //console.log("sum", _x, _y);

    const awaitX = X(x);
    const awaitY = Y(y);
    const _x = await awaitX;
    const _y = await awaitY;

    console.timeEnd("time process");
    // return _x + _y;
    //return data[0] + data[1];
    return _x + _y;
} 
sum(1, 2).then(data => console.log(data))