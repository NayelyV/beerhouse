import React from 'react'
import './Item.css'

const Item = ({ data }) => {
    return (
        <div className='item-container'>
            <div><img className='item-image' src={data.image} alt={data.name}></img></div>
            <h2>{data.name}</h2>
            <p>{data.company}</p>
            <p className='item-price'>{data.price}</p>
            <button className='detail-button'>Ver detalle</button>
        </div>
    )
}

export default Item
