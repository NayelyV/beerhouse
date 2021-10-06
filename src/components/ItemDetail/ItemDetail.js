import React from 'react'
import { Grid } from 'semantic-ui-react'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ product }) => {

    const onAdd = (counter) => {
        console.log('Cantidad: ', counter)
    }

    return (
        <Grid>
            <Grid.Column width={6}>
                <img className='item-image' src={product.image} alt={product.name}></img>
            </Grid.Column>
            <Grid.Column width={8}>
                <h2>{product.name}</h2>
                <p>{product.company}</p>
                <p className='item-price'>{product.price}</p>
                <p>País: {product.country}</p>
                <p>Volumen: {product.volume}</p>
                <p>Estilo: {product.style}</p>
                <ItemCount stock={product.stock} initial={1} onAdd={onAdd}/>
            </Grid.Column>
        </Grid>
    )
}

export default ItemDetail
