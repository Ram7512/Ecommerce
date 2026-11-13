import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css"
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router';
import ProductDetails from './pages/ProductDetails';
import CartItems from './pages/CartItems';
import Products from './pages/Products';
import { NuqsAdapter } from 'nuqs/adapters/react'
import Wishlist from './pages/WishlistItems';
import Login from './pages/Login';
import Register from './pages/Register';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <NuqsAdapter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path='/cart' element={<CartItems />} />
          <Route path='/products' element={<Products />} />
          <Route  path='/wishlist' element={<Wishlist />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </NuqsAdapter>
    </BrowserRouter>
  </StrictMode>,
)

