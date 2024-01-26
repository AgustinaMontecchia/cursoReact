import React from 'react'
import { Card, CardBody, Stack, Heading, Text, Divider, CardFooter, Button, Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

    const Item = ( { id, categoria, imagen, nombre } ) => {
    return (
        <div key={id}>
        <Card>
            <CardBody>
            <Stack>
                <Image src={imagen} alt={nombre}/>
                <Heading>
                    {nombre}
                </Heading>
                <Text>
                    Categoría: {categoria}
                </Text>
            </Stack>
            </CardBody>
            <CardFooter>
                <Link to={`/item/${id}`} >
                    <Button backgroundColor="#F64040" color="white">
                        Más detalles
                    </Button>
                </Link>
            </CardFooter>
            <Divider />
            </Card>
        </div>
    );
}

export default React.memo(Item);