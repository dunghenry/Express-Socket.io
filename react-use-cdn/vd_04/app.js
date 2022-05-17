const root = document.getElementById('root');

const Header = () => {
    const courses = [
        {
            id: 1,
            name: "HTML/CSS"
        },
        {
            id: 2,
            name: "JavaScript"
        },
        {
            id: 3,
            name: "React"
        }
    ];
    return(
        <div>
            <h1>Header Component</h1>
            <ul>
                {
                    courses.map(course => <li key={course.id}>{ course.name}</li>)
                }
            </ul>
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
    

ReactDOM.render(app, root)