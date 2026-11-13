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
import ProtectedRoute from './components/AuthProtectedRoute';
import Posts from './pages/Post';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <NuqsAdapter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path='/products' element={<Products />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path="/posts" element={<Posts />} />
          <Route element={<ProtectedRoute />}>
            <Route path='/cart' element={<CartItems />} />
            <Route path='/wishlist' element={<Wishlist />} />
          </Route>
        </Routes>
      </NuqsAdapter>
    </BrowserRouter>
  </StrictMode>,
)

