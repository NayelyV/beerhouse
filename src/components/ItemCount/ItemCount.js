import React, {useState, useEffect, useRef} from 'react'
import baltika from '../../img/baltika.jpg'
import './ItemCount.css'

const ItemCount = ({stock, initial, onAdd}) => {

    const [counter, setCounter] = useState(initial);
    const isInitialMount = useRef(true);

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

    return (
        <div className='item-container'>
            <div className='counter-container'>
                <button className='counter-button' onClick={handleDecrement}>-</button>
                <p>{counter}</p>
                <button className='counter-button' onClick={handleIncrement}>+</button>
            </div>
            <button className='add-button'>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount
