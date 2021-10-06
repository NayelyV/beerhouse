import React from 'react'
import './Item.css'

//Component
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'

const Item = ({ data }) => {
    return (
        <div className='item-container'>
            <div><img className='item-image' src={data.image} alt={data.name}></img></div>
            <h2>{data.name}</h2>
            <p>{data.company}</p>
            <p className='item-price'>{data.price}</p>
            <ItemDetailContainer product={data}></ItemDetailContainer>
        </div>
    )
}

export default Item
