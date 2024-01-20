import { React, useContext} from 'react'
import { CartContext } from '../context/CartContext';
import { Box, Card, Divider, Heading, Stack, Text, CardFooter,Button } from '@chakra-ui/react';

const Cart = () => {
    const { cart, setCart } = useContext(CartContext)

    const clearCart = () => {
        eraseCart()
    }
    return (
        <div>
            <Heading size='md' color='pink'>
                <p>shopping cart</p>
            </Heading>
            {
                cart.map((p) => (
                    <div key={p.id}>
                        <Divider orientation='horizontal' />
                        <Card>
                        <Box backgroundColor='black'>
                            <Stack>
                                <Heading color='pink' size='md'>Nombre del producto: {p.nombre}</Heading>
                                <Heading color='pink' size='md'>Precio unitario: ${p.precio}</Heading>
                                <Heading color='pink' size='md'>Cantidad: {p.counter}</Heading>
                                <Heading color='pink' size='md'>Precio total : ${p.precio * p.counter}</Heading>
                            </Stack>
                            <CardFooter>
                            </CardFooter>
                        </Box>
                    </Card>
                    <Divider orientation='horizontal' />
                    </div>
                ))
            }
            <Text>PRECIO TOTAL: ${fullPrice()}</Text>
            <Button onClick={clearCart}>Vaciar Carrito</Button>
            </div>
        )
}

export default Cart;