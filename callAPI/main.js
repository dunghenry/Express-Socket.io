const url = "https://jsonplaceholder.typicode.com/todos"
const app = async () => {
    const getData = async (url) => {
       return await fetch(url)
    }
    const getDataPro = async (url) => {
        return (await fetch(url)).json();
     }
    const btn = document.querySelector('button');
    if (btn) {
        btn.addEventListener('click', async (e) => {
            //C1
            // fetch(url)
            //     .then(res => res.json())
            //     .then(data => console.log(data))
            //     .catch(err => console.error(err))
            
            //C2
            // const todos = await getData(url)
            // const data = await todos.json();
            // console.log(data)

            //C3
            const data = await getDataPro(url);
            console.log(data)
        })
    }
}
document.addEventListener('DOMContentLoaded', app());