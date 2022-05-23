import React from 'react'
const courses = [
    {
        id: 1,
        name: "HTML / CSS"
    },
    {
        id: 2,
        name: "JavaScript"
    },
    {
        id: 3,
        name: "ReactJS"
    }
]
const Example2 = () => {
    const [checked, setChecked] = React.useState(1);
    const handleClick = () => {
        const course = courses.find(course => course.id === checked)
        console.log(course)
    }
    return (
        <div style={{padding: 32}}>
            {
                courses.map(course => {
                    return (
                        <div key={course.id}>
                            <input checked={checked === course.id} type="radio" id={course.id} onChange={() => setChecked(course.id)} />
                            <label htmlFor={course.id}>{course.name}</label>
                            
                        </div>
                    )
                })
            }
            <button onClick={handleClick}>Submit</button>
        </div>
    )
}

export default Example2