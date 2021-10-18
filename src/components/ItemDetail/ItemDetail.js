import React from 'react'
import { Grid } from 'semantic-ui-react'
import ItemCount from '../ItemCount/ItemCount'

//Styles
import './ItemDetail.css'

const ItemDetail = ({ product }) => {

    const onAdd = (counter) => {
        console.log('Cantidad: ', counter)
    }

    return (
        <Grid>
            <Grid.Column width={6} className='product-image'>
                <img src={product.image} alt={product.name}></img>
            </Grid.Column>
            <Grid.Column width={8} className='product-detail'>
                <h2>{product.name}</h2>
                <p className="company">{product.company}</p>
                <p className='price'>{product.price}</p>
                <p><strong>País: </strong>{product.country}</p>
                <p><strong>Volumen: </strong>{product.volume}</p>
                <p><strong>Estilo: </strong>{product.style}</p>
                <p><strong>Descripción: </strong>{product.description}</p>
                <ItemCount stock={product.stock} initial={1} onAdd={onAdd}/>
                
            </Grid.Column>
        </Grid>
    )
}

export default ItemDetail
