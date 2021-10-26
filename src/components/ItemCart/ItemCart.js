import React, {useContext} from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
import './ItemCart.css'

//Context
import { CartContext } from '../../CartContext'

const ItemCart = ({ item }) => {

    const [, , addItem, removeItem] = useContext(CartContext)

    const handleDelete = () => {
        console.log("Delete")
        removeItem(item.product.id)
    }

    return (
        <div>
            <Card id="item-cart">
                <Card.Content>
                    <Image
                    floated='left'
                    size='mini'
                    src={item.product.image}
                    />
                    <Card.Header>{item.product.name}</Card.Header>
                    <Card.Meta>{item.product.price}</Card.Meta>
                    <Card.Meta>Cantidad: {item.quantity}</Card.Meta>
                    <Button basic color='red' onClick={handleDelete}>
                        Eliminar
                    </Button>
                </Card.Content>
            </Card>
        </div>
    )
}

export default ItemCart
