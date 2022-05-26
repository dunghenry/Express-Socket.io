import React from 'react'

const Main = () => {
    const [name, setName] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [products, setProducts] = React.useState([]);
    const handleSubmit = () => {
        const product = {
            name,
            price: parseInt(price)
        }
        setProducts([...products, product]);
        setName('');
        setPrice('')
    }

    const total = React.useMemo(() => {
        console.log('Tính toán lại total!')
        const results = products.reduce((total, product) => {
            return total + product.price;
        }, 0)
        return results;
    }, [products.length])
    return (
        <div>
            <div>
                <label>Name : </label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <label>Price &nbsp;&nbsp;: </label>
                <input value={price} onChange={(e) => setPrice(e.target.value)} />
            </div>
            <button onClick={handleSubmit}>Add product</button>
            <h3>Total : { total }</h3>
            <div>

                {
                    products && products.map((product, index) => {
                        return <p key={index}>{product.name} - {product.price}</p>;
                    })
                }

            </div>
        </div>
    )
}

export default Main