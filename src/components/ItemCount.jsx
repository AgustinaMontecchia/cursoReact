import React from 'react'
import { useState } from 'react'
import { Button } from '@chakra-ui/react'
import '../styles.css'

const ItemCount = () => {
    const [contador, setContador] = useState(0)
    const mostrarMensaje = () => {
        contador != 0 ? alert(`${contador} productos agregados exitosamente`) : alert(`No se puede agregar ${contador} productos en tu carrito`)
    }
    const resta = () => contador > 0 && setContador(contador - 1)


    const suma = () => contador < 10 && setContador(contador + 1)   
    
    return (
        <div>
            {contador > 0 ? <Button className='btn' onClick= {resta}>Eliminar</Button> : <Button className='btn'disabled>Eliminar</Button>}
            <Button className='btnMed'  onClick={mostrarMensaje}>
                Agregar al Carrito {contador}
            </Button>
            { contador < 10 ? <Button className='btn' size='sm' onClick= {suma}>Agregar</Button> : <Button disabled>Agregar</Button>}
        </div>
    )
}

export default ItemCount;