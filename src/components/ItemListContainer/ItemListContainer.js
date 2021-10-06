import React from 'react'
import './ItemListContainer.css'

//Components
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({greeting}) => {

    return (
        <div className='container'>
            <h1 className='title'>{greeting}</h1>
            <ItemList></ItemList>
            
        </div>
    )
}

export default ItemListContainer
