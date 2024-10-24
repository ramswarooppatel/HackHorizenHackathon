import React from 'react'
import {BrowserRouter,Routes,Route,Navigate} from"react-router-dom"
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
// import Features from './components/Features'
// import Pricing from './components/Pricing'
// import About from './components/About'


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
        
      </Routes>

    </BrowserRouter>
  )
}

export default App
