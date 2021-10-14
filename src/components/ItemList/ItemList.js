import './ItemList.css'

//Components
import Item from '../Item/Item'

const ItemList = ({products}) => {

    return (
        <div className='item-list-container'>
            <h1>Lista de cervezas</h1>

            <div className='products'>
                {products.map((product) => {
                return ( <div>
                        <Item data={product}></Item>
                    </div>
                    );
                })}
            </div>
        </div>
    )
}

export default ItemList
