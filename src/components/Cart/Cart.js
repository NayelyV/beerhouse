import React, { useContext }  from 'react'

//Styles
import './Cart.css'
import { Button } from 'semantic-ui-react'

//Context
import { CartContext } from '../../CartContext'

//Components
import ItemCart from '../ItemCart/ItemCart'
import EmptyCart from '../EmptyCart/EmptyCart'

const Cart = () => {
    const [items] = useContext(CartContext)

    const getTotal = () => {
        let total = 0
        for (let item of items) {
            total = total + (item.quantity * item.priceNumber)
        }
        return total
    }

    return (
        <div className="cart-container">
            {items.length > 0 ? <div>{items.map((item) => {
                return ( 
                    <div key={item.productId}>
                        <ItemCart item={item}></ItemCart>
                    </div>
                    );
                })}
                    <h2>Total: ${getTotal()} MXN</h2>
                    <Button primary color='blue' className='finish-button'>Terminar mi compra</Button>
                </div> : <EmptyCart></EmptyCart> }
                
            
        </div>
    )
}

export default Cart
