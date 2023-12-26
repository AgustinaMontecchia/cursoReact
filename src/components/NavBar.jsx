import React from 'react'
import CartWidget from './CartWidget';
import { Flex, Spacer, Box, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import '../styles.css'

const NavBar = () => {
    return (
        <Flex className='nav'>
            <Box p='4'>
                <Link to={'/'}>
                    <h1>Camiflex Pinturería </h1>
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
            <Box p='4'>
                <Link to={"/cart"}>
                    <CartWidget />
                </Link>
            </Box>
        </Flex>
    );
}
export default NavBar