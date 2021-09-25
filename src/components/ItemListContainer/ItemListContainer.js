import React from 'react'
import './ItemListContainer.css'

const ItemListContainer = ({greeting}) => {
    return (
        <div className='container'>
            <h1 className='title'>{greeting}</h1>
        </div>
    )
}

export default ItemListContainer
