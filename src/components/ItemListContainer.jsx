import { React, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {getCat} from '../utils/getData'
import ItemList from './ItemList'


const ItemListContainer = () => {

    const [ item, setItems ] = useState([])
    const { categoria } = useParams()
    useEffect(() => {
        getCat()
            .then((res) => {
                if (categoria){
                    setItems(res.filter((item) => prod.categoria === categoria))
                }else {
                    setItems(res)
                }   
            })
    }, [catId])

    return (
        <div>
            <ItemList productos={productos}/>
        </div>
    )
}


export default ItemListContainer;