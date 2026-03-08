import { Routes, Route } from 'react-router'
import Products from './Products'
import Product from './Product'
import Users3 from './Users3'
import Home from './Home'
import P404 from './P404'

export default function Pages() {
    return (
        <Routes>
            <Route path='products' element={<Products />} />
            <Route path='products/:id' element={<Product />} />
            <Route path='users' element={<Users3 />} />
            <Route path='' element={<Home />} />
            <Route path='*' element={<P404 />} />
        </Routes>
    )
}