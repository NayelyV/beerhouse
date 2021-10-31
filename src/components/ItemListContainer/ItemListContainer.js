import React, {useState, useEffect} from 'react'

//Firebase
import {collection, getDocs, query, where} from 'firebase/firestore'
import { db } from '../../firebase'

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
        const requestData = async() => {
            const docs = []
            const productsRef = collection(db, "products")
            const search = categoryId ? query(productsRef, where("categoryId", "==", parseInt(categoryId))) : productsRef
            const items = await getDocs(search)
            setIsLoading(false)
            items.forEach((doc) => {
              docs.push({...doc.data(), token: doc.id})
            })
            
            setProducts(docs)
          }
          requestData()
    }, [categoryId])

    return (
        <div className='container'>
            { isLoading && <Loading></Loading> }
            { products.length > 0 ? <ItemList products={products}/> : <h1 className="title">No hay productos para esta categoría</h1>}
        </div>
    )
}

export default ItemListContainer
