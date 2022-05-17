const root = document.getElementById("root");
const h1 = document.createElement("h1");
h1.innerText = "Hello guys!";
h1.id = 'heading-1';
h1.className = 'heading';
h1.style = 'color: red';
console.dir(document.getElementsByTagName('h1'))
// h1.style = 'color: red; background-color: blue';
// Object.assign(h1.style, {
//   color: 'red',
//   backgroundColor: 'blue'
// })
root.appendChild(h1);