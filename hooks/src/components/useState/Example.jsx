import React from 'react'
const gifts = [
    'CPU i9',
    'RAM 32GB RGB',
    'Keyboard RGB'
]
const Example = () => {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [gift, setGift] = React.useState('');
    const handleClick = () => {
        const index = Math.floor(Math.random() * gifts.length)
        setGift(gifts[index]);
    }
    const handleSubmit = () => {
        setName('');
        setEmail('')
        console.log({name, email})
    }
    return (
        <div>

            <h1>{gift || "Chưa có phần thưởng"}</h1>
            <button onClick={handleClick}>Lấy thưởng</button>
            <br></br>
            <div>
                <label>Name: </label>
                <input value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <label>Email: </label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <button onClick={handleSubmit}>Register</button>
        </div>
    )
}
export default Example;