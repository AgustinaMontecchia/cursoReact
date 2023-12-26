import React from 'react'
import { Card, CardBody, Stack, Heading, Text, Divider, CardFooter, Button } from '@chakra-ui/react'
import ItemCount from './ItemCount'
import '../styles.css'

const ItemDetail = ( {item} ) => {
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
          <ItemCount />
        </CardFooter>
        <Divider />
      </Card>
    </div>
  )
}

export default ItemDetail;