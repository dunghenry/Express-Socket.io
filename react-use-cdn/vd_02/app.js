const root = document.getElementById('root');

const h1 = React.createElement('h1', {title: "Hello", style:{color: 'red'}}, "Hello guys!");

const app = React.createElement('div',
    {
        id: 'div',
        className: 'div',
        style: {color: 'red'},
    },
    React.createElement('h2', { title: 'Học React tại F8' }, 'Học ReactJS'),
    React.createElement('p', {id: 'p', className: 'p', style:{color: 'black'}}, 'Học ReactJS từ cơ bản tới nâng cao')
)

ReactDOM.render(h1, root)