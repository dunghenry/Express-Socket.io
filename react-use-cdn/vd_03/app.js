const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
const Header = () => {
    return(
        <div>
            <h1>Header Component</h1>
        </div>
    )
}
class Content extends React.Component {
    render() {
        return (
            <div>
                <h1>Content Component</h1>
            </div >
        )
    }
}
const app = (
    <div>
        <Header />
        <Content/>
    </div>
)
const h1 = React.createElement('h1', {}, "Xin chao")
//React@18
root.render(app)