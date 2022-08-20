import * as React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header/Header.jsx'
import Checkout from './routes/checkout/checkout.jsx'
import Home from './routes/home/home.jsx'
import Login from './routes/login/login.jsx'

function App() {
  
  return (
    <Routes>
      <Route path='/' element={<Header />} >
        <Route index element={<Home />} />
        <Route path='checkout' element={<Checkout />} />
        <Route path='login' element={<Login />} />
      </Route>
    </Routes>
  )
}

export default App;