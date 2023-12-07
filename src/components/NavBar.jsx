import React from 'react'
import CartWidget from './CartWidget'
import { Flex, Spacer, Box, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'

const NavBar = () => {
  return (
    <div>

        <Flex>
        <Box p='4' >
            CamiFlex
        </Box>
        <Spacer />

        <Menu>
            <MenuButton >
                Categorías
            </MenuButton>
            <MenuList>
                <MenuItem>Empresa</MenuItem>
                <MenuItem>Contacto</MenuItem>
                <MenuItem>Productos</MenuItem>
                <MenuItem>Accesorios</MenuItem>
            </MenuList>
        </Menu>
        <Spacer />
        <Box p='4' >
            <CartWidget/>
        </Box>
        </Flex>
        

        
    </div>
  )
}

export default NavBar