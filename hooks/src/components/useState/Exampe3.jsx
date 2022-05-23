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
const Example3 = () => {
    const [checked, setChecked] = React.useState([]);
    const handleChecked = (id) => {
        console.log()
        if (!checked.includes(id)) {
            setChecked(prev => [...prev, id])
        }
        else {
            const newChecked = checked.filter(item => item !== id);
            setChecked(newChecked)
        } 
    }
    const handleClick = () => {
        let dl = []
        checked.map(item => {
            courses.map(course => {
                if (course.id === item) {
                    dl.push(course)
                };
            })
        })
        console.log(dl)
    
    }
    console.log(checked)
    return (
        <div style={{padding: 32}}>
            {
                courses.map(course => {
                    return (
                        <div key={course.id}>
                            <input type="checkbox" checked={checked.includes(course.id)} id={course.id} onChange={() => handleChecked(course.id)} />
                            <label htmlFor={course.id}>{course.name}</label>
                            
                        </div>
                    )
                })
            }
            <button onClick={handleClick}>Submit</button>
        </div>
    )
}

export default Example3