import React from 'react'
import CartWidget from './CartWidget';
import { Heading, Flex, Spacer, Box, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import '../styles.css'

function NavBar () {
    return (
        <Box backgroundColor='#A5B381'>
            <Flex>
                <Box p='4' backgroundColor='pink'>
                <Link to={'/'}>
                    <Heading size='x1'>Camiflex Pinturería </Heading>
                </Link>
            </Box>
            <Spacer />
            <Menu>
                <MenuButton>
                    Categorias
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
            <Box p='4' backgroundColor='pink'>
                <Link to={"/cart"}>
                    <CartWidget />
                </Link>
            </Box>
        </Flex>
        </Box>
    );
}
export default NavBar