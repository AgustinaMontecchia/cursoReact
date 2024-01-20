import { React, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getId } from '../utils/getData'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

    const { id } = useParams()
    const [item, setItem] = useState([]);

    useEffect(() => {
        getId(Number(itemId))
            .then((res) => {
                setItem(res)
            })
    }, [itemId])

    return (
        <div>
            {item && <ItemDetail item={item} />}
        </div>
    )
}

export default ItemDetailContainer;