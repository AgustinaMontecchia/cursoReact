import React from 'react'
import { Button } from '@chakra-ui/react'
import '../styles.css'

const ItemCount = ({ stock, counter, min, sum, addToCart}) => {  
    
    return (
        <div>
            {counter > 0 ? <Button colorScheme='red' size='sm' onClick={min}>Quitar</Button> : <Button disabled>Quitar</Button>}
            <Button colorScheme='blue' size='md' onClick={addToCart}>
                Agregar al Carrito {counter}
            </Button>
            {counter < stock ? <Button colorScheme='green' size='sm' onClick={sum}>Agregar</Button> : <Button disabled>Agregar</Button>}
        </div>

    )
}

export default ItemCount;