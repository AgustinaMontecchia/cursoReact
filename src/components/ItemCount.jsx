import { useContext, useState} from 'react'
import { CartContext } from '../context/CartContext';
import { Button, ButtonGroup, IconButton, Center } from '@chakra-ui/react'
import { AddIcon, MinusIcon } from '@chakra-ui/icons'

const ItemCount = ( { id, nombre, precio, imagen } ) => {

    const [cart, setCart] = useContext(CartContext);
    const [counter, setCounter] = useState(1);

    const sum = () => {
        setCounter(counter + 1);
    };

    const min = () => {
        if (counter > 0) {
            setCounter(counter - 1);
        } else {
            console.log("No se encuentran más productos en el carrito")
        }
    };

    const addToCart = () => {
        setCart((cartAtm) => {
            const alrdyIn = cartAtm.find((item) => item.id === id);
            if (alrdyIn) {
                return cartAtm.map((item) => {
                    if (item.id === id) {
                        return { ...item, stock: item.stock + counter };
                    } else {
                    return item;
                    }
                });
            } else {
            return [...cartAtm, { id, stock: counter, precio, nombre, imagen }]
            }
        })
    }

    return (
        <>
            <ButtonGroup size="md" isAttached variant="outline">
                <IconButton icon={<MinusIcon/>} onClick={min} />
                <Center>
                    <Button onClick={() => addToCart()}colorScheme="blue">
                        Add to cart: {counter}
                    </Button>
                </Center>
                <IconButton icon={<AddIcon />} onClick={sum} />
            </ButtonGroup>

        </>

    )
}

export default ItemCount;