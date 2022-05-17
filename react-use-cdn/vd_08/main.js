const root = document.getElementById('root');

const Button = ({ title, href, onClick }) => {
    let Component = 'button';
    const props = {}
    if (href) {
        Component = 'a';
        props.href = href;
    }
    if (onClick) {
        props.onClick = () => onClick(Math.random());
    }
    return (
        <React.Fragment>
            <Component {...props}>{ title }</Component>
        </React.Fragment>
    )
}

const App = () => {
    const isSuccess = true
    const handleClick = (random) => {
        console.log(random)
    }
    return (
        <React.Fragment>
            <Button
                title="Click me!"
                href="https://www.facebook.com"
                onClick={handleClick}
            />
            <br></br>
            {
                isSuccess ? "Successed!" : 'Failed!'
            }
            <br></br>
            {
                isSuccess && "Successed!"
            }
        </React.Fragment>

    )
}
ReactDOM.render(<App />, root)