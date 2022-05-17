const root = document.getElementById('root');

const Form = {
    Input() {
        return <input type="text"/>
    },
    Checkbox() {
        return <input type="checkbox"/>
    }
}

const App = () => {
    const type = "Checkbox";
    const Component = Form[type];
    return (
        <React.Fragment>
            <Form.Input />
            <br></br>
            <Component/>
        </React.Fragment>
        
        )
}
ReactDOM.render(<App/>, root)