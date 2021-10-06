import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'semantic-ui-react'
import axios from 'axios';

import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = ({ product }) => {
    const [item, setItem] = useState(product)
    const [open, setOpen] = useState(false)
    
    return (
        <div>
            <Modal onClose={() => setOpen(false)} onOpen={() => setOpen(true)} open={open} trigger={<Button className='detail-button' primary>Ver detalle</Button>}>
                <ItemDetail product={item}></ItemDetail>
            </Modal>
        </div>

    )
}

export default ItemDetailContainer
