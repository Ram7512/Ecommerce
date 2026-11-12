import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css"
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router';
import ProductDetails from './pages/ProductDetails';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

