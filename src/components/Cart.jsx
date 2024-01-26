import {  useContext } from 'react'
import { CartContext } from '../context/CartContext';
import { Box, Card, Divider, Heading, Stack, Text, CardFooter,Button, Container, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom'

const Cart = () => {
    const [cart, setCart] = useContext(CartContext);

    const clearCart = () => {
        setCart([]);
    };
    const eraseOne = (itemId) => {
        const itemIndex = cart.findIndex((item) => item.id === itemId);

        if (itemIndex !== -1) {
            const newCart = [...cart];
            newCart[itemIndex].stock--;

            if (newCart[itemIndex].stock === 0) {
                newCart.splice(itemIndex, 1);
            }
            setCart(newCart);
        }
    };
    const increaseOne = (itemId) => {
        const itemIndex = cart.findIndex((item) => item.id === itemId);

        if (itemIndex !== -1) {
            const newCart = [...cart];
            newCart[itemIndex].stock++;

            if (newCart[itemIndex].stock === 0) {
                newCart.splice(itemIndex, 1);
            }
            setCart(newCart);
        }
    };
    const fullPrice = () => {
        if (!Array.isArray(cart)) {
            return 0;
        } else {
            return cart.reduce((acu, item) => acu + item.precio * item.stock, 0);
    }}

    return (
        <Container>
            <br />
            <Heading color="#F64040" >
                Carrito
            </Heading>
            <br />
            {cart.map((item) => (
                <Box key={item.id}>
                    <Divider />
                    <Card>
                        <Box>
                            <Image src={item.imagen} alt={item.nombre} />
                            <Stack>
                                <Heading color="#F64040" size="md">
                                    Nombre: {item.nombre}
                                </Heading>
                                <Heading color="#F64040" size="md">
                                    Precio: ${item.precio}.-
                                </Heading>
                                <Heading color="#F64040" size="md">
                                    Cantidad: {item.stock}.-
                                </Heading>
                            </Stack>
                            <CardFooter>
                                <Button colorScheme="red" onClick={() => eraseOne(item.id)}>
                                    -
                                </Button>
                                <Text fontSize="lg" fontWeight="bold">
                                    Modificar tu compra
                                </Text>
                                <Button colorScheme="blue" onClick={() => increaseOne(item.id)} >
                                    +
                                </Button>
                            </CardFooter>
                        </Box>
                    </Card>
                    <Divider />
                </Box>
            ))}
            <Heading >
                Precio total: ${fullPrice()}.-
            </Heading>
            <Button  colorScheme="#F64040" onClick={clearCart}>
                Vaciar Carrito
            </Button>
            <Link to="/orden">
                <Button colorScheme="blue">
                Confirmar compra
                </Button>
            </Link>
        </Container>
    );
};

export default Cart;