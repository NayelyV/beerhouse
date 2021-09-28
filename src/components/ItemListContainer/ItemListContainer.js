import React from 'react'
import './ItemListContainer.css'

//Components
import ItemCount from '../ItemCount/ItemCount'

const ItemListContainer = ({greeting}) => {

    const onAdd = (counter) => {
        console.log('Cantidad: ', counter)
    }

    return (
        <div className='container'>
            <h1 className='title'>{greeting}</h1>
            <ItemCount stock={5} initial={1} onAdd={onAdd}/>
        </div>
    )
}

export default ItemListContainer
