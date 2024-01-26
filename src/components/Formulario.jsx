import { useContext, useState } from 'react';
import { Button, Text, Input, VStack, FormControl, FormLabel } from '@chakra-ui/react';
import { addDoc, getFirestore, collection } from 'firebase/firestore';
import { CartContext } from '../context/CartContext';

const FormPedido = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [orderId, setOrderId] = useState("");
    const [cart, setCart] = useContext(CartContext);

    const db = getFirestore();
    const ordersCollection = collection(db, "orden");

    const askCart = async (e) => {
        e.preventDefault();

        if (!name || !email || !phone || cart.length === 0) {
            Swal.fire("Error");
            return;
        }

        const order = {
            client: { name, email, phone },
            items: cart,
            date: Date(),
        };

        try {
            const docRef = await addDoc(ordersCollection, order);
            setOrderId(docRef.id);
        } catch (error) {
            Swal.fire("Error");
        }
    };

    return (
        <VStack>
            <form onSubmit={askCart}>
                <FormControl>
                    <FormLabel>NOMBRE</FormLabel>
                    <Input
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                    />
                    </FormControl>
                    <FormControl>
                        <FormLabel>EMAIL</FormLabel>
                        <Input
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel>TELEFONO</FormLabel>
                        <Input
                            type="tel"
                            onChange={(e) => setPhone(e.target.value)}
                            />
                        </FormControl>
                        <Button type="submit" colorScheme="red" w="50%" >
                            Enviar
                        </Button>
                    </form>
                    {orderId && (
                        <Text >
                            Orden ID: {orderId}
                        </Text>
                    )}
                </VStack>
            );
};

export default FormPedido;