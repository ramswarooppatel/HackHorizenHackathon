import React from 'react'
import {BrowserRouter,Routes,Route,Navigate} from"react-router-dom"
import Navbar from './components/Navbar'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Marketplace from './pages/marketplace/marketplace'
import Profile from './pages/Userprofile/Profile'
import ProductList from './pages/ProductList/Productlist';
import AddProduct from './pages/AddProducts/Addproducts'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home />
          }
          />
        <Route
          path="/login"
          element={
            <Login />
          }
          />
        <Route
          path="/register"
          element={
            <Register />
          }
          />
        
        <Route
          path="/marketplace"
          element={
            <Marketplace />
          }
          />
        <Route
          path="/profile"
          element={
            <Profile />
          }
          />
          <Route path="/products" element={<ProductList />} />
          <Route path="/add-product" element={<AddProduct />}/>
        
      </Routes>

    </BrowserRouter>
  )
}

export default App
