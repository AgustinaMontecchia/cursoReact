import React from 'react'
import CartWidget from './CartWidget';
import { Heading, Flex, Spacer, Box, Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom';

function NavBar () {
    return (
        <Box backgroundColor='#F64040'>
            <Flex>
                <Box backgroundColor='#F64040'>
                <Link to={'/'}>
                    <Heading >Camiflex Pinturería</Heading>
                </Link>
            </Box>
            <Spacer />
            <Menu>
                <MenuButton>
                    Categorías
                </MenuButton>
                <MenuList>
                    <MenuItem>
                        <Link to='/category/interior'>
                            <p>Interior</p>
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to='/category/exterior'>
                            <p>Exterior</p>
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to='/category/industrial'>
                            <p>Industrial</p>
                        </Link>
                    </MenuItem>
                </MenuList>
            </Menu>
            <Spacer />
            <Box backgroundColor='#F64040'>
                <Link to={"/cart"}>
                    <CartWidget />
                </Link>
            </Box>
        </Flex>
        </Box>
    );
}
export default NavBar