import { Routes, Route } from 'react-router'
import Products from './Products'
import Users3 from './Users3'

export default function Pages() {
    return (
        <Routes>
            <Route path='products' element={<Products />} />
            <Route path='users' element={<Users3 />} />
        </Routes>
    )
}