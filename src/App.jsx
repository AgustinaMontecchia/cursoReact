import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartProvider from './context/CartContext.jsx';
import ItemDetailContainer from './components/ItemDetailContainer.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';
import NavBar from './components/NavBar.jsx'
import Cart from './components/Cart.jsx';
import React from 'react'
import Formulario from './components/Formulario.jsx';

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />  
        <Routes>
        <Route path="/" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/orden" element={<Formulario />} />
        </Routes>
      </BrowserRouter>
      </CartProvider>
  )
}

export default App;