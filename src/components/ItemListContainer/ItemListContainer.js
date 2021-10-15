import React, {useState, useEffect} from 'react'
import axios from 'axios';

//Styles
import './ItemListContainer.css'

//Components
import ItemList from '../ItemList/ItemList'
import Loading from '../Loading/Loading';

const ItemListContainer = ({match}) => {
    let categoryId = match.params.id 
    
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        axios('https://6158ba3f5167ba00174bbbc9.mockapi.io/api/v1/products').then((res) => 
            setProducts(res.data) 
        )
        setIsLoading(false)
    }, [])

    const filterProducts = () => {
        // eslint-disable-next-line eqeqeq
        let items = categoryId ? products.filter(element => element.categoryId == categoryId) : products
        return items
    }

    return (
        <div className='container'>
            { isLoading && <Loading></Loading> }
            { filterProducts().length > 0 ? <ItemList products={filterProducts()}/> : <h1 className="title">No hay productos para esta categoría</h1>}
        </div>
    )
}

export default ItemListContainer
