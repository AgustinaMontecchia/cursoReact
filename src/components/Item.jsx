import React from 'react'
import { Card, CardBody, Stack, Heading, Text, Divider, CardFooter, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import '../styles.css'

    const Item = ( { id, categoria, imagen, nombre, precio, stock} ) => {
    return (
        <div key={id}>
        <Card>
            <CardBody>
            <Stack>
                <Heading>
                <img src={imagen} alt={nombre} />
                <p>Producto: {nombre}</p>
                </Heading>
                <Text>Categoría: {categoria}</Text>
            </Stack>
            </CardBody>
            <CardFooter>
            <Link to={`/item/${id}`} >
                <Button className='btn'>Más detalles</Button>
            </Link>
            </CardFooter>
            <Divider />
        </Card>
        </div>
    )
}

export default React.memo(Item);