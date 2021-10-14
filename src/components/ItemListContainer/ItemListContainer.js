import React, {useState, useEffect} from 'react'
import './ItemListContainer.css'

//Components
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://6158ba3f5167ba00174bbbc9.mockapi.io/api/v1/products')
        .then((response) => response.json())
        .then((json) => setProducts(json))
    }, [])

    return (
        <div className='container'>
            <h1 className='title'>{greeting}</h1>
            <ItemList products={products}></ItemList>
        </div>
    )
}

export default ItemListContainer
