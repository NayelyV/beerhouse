import React, { useContext } from 'react'
import { Icon } from 'semantic-ui-react'

//Styles
import './CartWidget.css'

//Context
import { CartContext } from '../../CartContext'

const CartWidget = () => {
  const [items] = useContext(CartContext)
  console.log("CartWidget items:", items);

  const getTotal = () => {
    let total = 0
    for (let item of items) {
        total = total + item.quantity
    }
    return total
  }

  return (
    <div className='shopping'>
      {items.length > 0 && <div className='cart-number'><h5>{getTotal()}</h5></div>}
      <Icon link name='shopping cart' size='large' className='shopping-icon' />
    </div>
  )
}

export default CartWidget