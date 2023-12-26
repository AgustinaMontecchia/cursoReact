import React from 'react'
import { Card, CardBody, Stack, Heading, Text, Divider, CardFooter, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import '../styles.css'

    const Item = ( {producto} ) => {
    return (
        <div>
        <Card>
            <CardBody>
            <Stack>
                <Heading>
                <img src={producto.imagen} alt={producto.nombre} />
                <p>Producto: {producto.nombre}</p>
                </Heading>
                <Text>Categoría: {producto.categoria}</Text>
            </Stack>
            </CardBody>
            <CardFooter>
            <Link to={`/item/${producto.id}`} >
                <Button className='btn'>Más detalles</Button>
            </Link>
            </CardFooter>
            <Divider />
        </Card>
        </div>
    )
}

export default Item;