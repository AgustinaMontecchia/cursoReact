import React, { useContext, useState} from 'react'
import { Card, CardBody, Stack, Heading, Text, Divider, CardFooter, Button } from '@chakra-ui/react'
import ItemCount from './ItemCount'
import { CartContext } from '../context/CartContext'
import '../styles.css'

const ItemDetail = ( {item} ) => {
  const { cart, addToCart } = useContext(CartContext)
  const [counter, setCounter] = useState(1)
  const min = () => counter > 1 && setCounter(counter - 1)
  const sum = () => counter < item.stock && setCounter(counter + 1)
  return (
    <div>
      <Card>
        <CardBody>
          <Stack>
            <Heading className='titulo'>
              <img src={item.imagen} alt={item.nombre} />
              <br />
              <br />
              <p>Producto: {item.nombre}</p>
            </Heading>
            <Text>Categoría: {item.categoria}</Text>
            <Text>Descripción: {item.descripcion}</Text>
            <Text>Precio: ${item.precio}</Text>
          </Stack>
        </CardBody>
        <CardFooter>
          <ItemCount 
          counter={counter}
          addToCart={()=> {addToCart(item, counter)} }
          sum={sum}
          min={min}
          stock={item.stock}
          />
        </CardFooter>
        <Divider />
      </Card>
    </div>
  )
}

export default ItemDetail;