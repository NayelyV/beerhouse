import React, {useState, useEffect} from 'react'
import './ItemList.css'

//Components
import Item from '../Item/Item'

const ItemList = () => {
    const [products, setProducts] = useState([])
    console.log(products)

    useEffect(() => {
        fetch('https://6158ba3f5167ba00174bbbc9.mockapi.io/api/v1/products')
        .then((response) => response.json())
        .then((json) => setProducts(json))
    }, [])

    return (
        <div className='item-list-container'>
            <h1>Lista de cervezas</h1>

            <div className='products'>
                {products.map((product) => {
                return ( <div>
                        <Item data={product}></Item>
                    </div>
                    );
                })}
            </div>

            
            
        </div>
    )
}

export default ItemList
