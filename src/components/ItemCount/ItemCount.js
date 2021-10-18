import React, {useState, useEffect, useRef} from 'react'
import {Redirect} from 'react-router-dom'

//Styles
import './ItemCount.css'

const ItemCount = ({stock, initial, onAdd}) => {

    const [counter, setCounter] = useState(initial);
    const isInitialMount = useRef(true);
    const [goCart, setGoCart] = useState(false)

    const handleIncrement = () => {
        if (counter < stock) {
            setCounter(counter + 1)
        }
    }
    
    const handleDecrement = () => {
        if (counter  > initial) {
            setCounter(counter - 1)
        }
    }

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
         } else {
            onAdd(counter)
         }
    })

    const handleCart = () => {
        setGoCart(true)
    }

    return (
        <div className='item-count-container'>
            <div className='counter-container'>
                <button className='counter-button' onClick={handleDecrement}>-</button>
                <p>{counter}</p>
                <button className='counter-button' onClick={handleIncrement}>+</button>
            </div>
            {goCart && <Redirect push to="/cart" />}
            <button className='add-button' onClick={handleCart}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount
