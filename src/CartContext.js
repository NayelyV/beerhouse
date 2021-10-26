import React, {useState, createContext} from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [items, setItems] = useState([])

    const addItem = (item, quantity) => {
        console.log("Item:", item)
        console.log("Cantidad: ", quantity)
        const newItems = items.slice()
        console.log("Insertar") 
        if (isInCart(item.id)) {
            //Update item
            console.log("Actualizar") 
            const index = newItems.findIndex((element => element.product.id == item.id))
            newItems[index].quantity = quantity
            setItems(newItems)

        } else {
            //Insert item
            console.log("Insertar") 
            newItems.push({product: item, quantity: quantity})
            setItems(newItems)
            
        } 
        console.log("AddItem: ", items)
        
    }

    const removeItem = (itemId) => {
        if (isInCart(itemId)) {
            //Delete item
            const newItems = items.filter((element => element.product.id != itemId))
            setItems(newItems)
        } else {
            //Error item
            alert("Este producto no estaba en tu carrito")
        }

        console.log(items) 
    }

    const clear = () => {
        setItems([])
    }

    const isInCart = (itemId) => {
        console.log("itemId", itemId)
        const product = items.find(element => element.product.id === itemId)
        if (product) {
            console.log("Ya existe el producto")
            return true
        }
        console.log("No existe el producto")
        return false
    }

    return(
        <CartContext.Provider value={[items, setItems, addItem, removeItem, clear, isInCart]}>
          {children}
        </CartContext.Provider>
    )
}