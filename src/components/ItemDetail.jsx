import { useEffect, useState } from 'react'
import { Card, CardBody, Stack, Heading, Text, Divider, CardFooter, Image, Container } from '@chakra-ui/react'
import ItemCount from './ItemCount'
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from 'firebase/firestore';

const ItemDetail = ( {items} ) => {
  const {id} = useParams();
  const [item, setItem] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const paintRef = doc(db, "Pinturas", `${id}`);

    getDoc(paintRef).then((snapshot) => {
      if (snapshot.exists()) {
        setItem(snapshot.data());
      } else {
        console.log("No se encuentra el producto");
      }
    });
  }, [id]);

  const itemFilter = items.filter((item) => item.id == id);

  return (
    <Container>
      {itemFilter.map((item) => (
        <div key={item.id}>
          <Card >
            <Image src={item.imagen} alt={item.nombre}/>
            <CardBody>
              <Stack>
                <Heading>
                  {item.nombre}
                </Heading>
                <Text>
                  Categoría: {item.categoria}
                </Text>
                <Text>
                  Descripción: {item.descripcion}
                </Text>
                <Text >
                  Precio: ${item.precio}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter >
              <ItemCount
                id={item.id}
                nombre={item.nombre}
                precio={item.precio}
                stock={item.stock}
                item={item}
                imagen={item.imagen}
              />
            </CardFooter>
          </Card>
        </div>
      ))}
    </Container>
  );
};

export default ItemDetail;