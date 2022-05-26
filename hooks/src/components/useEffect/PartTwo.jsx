import React from 'react';
import axios from 'axios';
const tabs = ['posts', 'comments', 'todos']
const PartTwo = () => {
    const [type, setType] = React.useState('posts');
    const [data, setData] = React.useState([])
    //Callback luôn được gọi sau khi component được mounted
    //Callback sẽ được gọi lại mỗi khi dependency thay đổi
    //Callback

    React.useEffect(async() => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${type}`)
        setData(response.data)
    }, [type])

    const [show, setShow] = React.useState(false);
    React.useEffect(() => {
        const handleScroll = () => {
            // if (window.scrollY > 300) {
            //     setShow(true)
            // }
            // else {
            //     setShow(false)
            // }
            setShow(window.scrollY > 300)
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const handleClick = () => {
        setShow(false);
        window.scrollTo(0, 0)
    }
    // console.log(type)
    // console.log(data)
    
    console.log(show)
    return (
        <div>
            {
                tabs.map((tab, index) => <button key={index} className={type === tab ? "active" : ""} onClick={(e) => setType(tab)}>{tab}</button>)
            }
            <ul>
                {
                    data.map(item =>
                        <li key={item.id}>{item.title || item.name}</li>
                    )
                }
            </ul>
            {
                show && <button className="btn" onClick={handleClick}>go to top</button>
            }
        </div>
    )
}

export default PartTwo;