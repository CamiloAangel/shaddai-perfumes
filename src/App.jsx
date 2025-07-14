// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Contacto from './pages/Contacto';
import Navbar from './components/Navbar';
import Carrito from './components/Carrito';
import { CarritoProvider } from './context/CarritoContext';

const App = () => {
  const [mostrarCarrito, setMostrarCarrito] = useState(false);
  const [busqueda, setBusqueda] = useState('');

  const toggleCarrito = () => {
    setMostrarCarrito(prev => !prev);
  };

  return (
    <CarritoProvider>
      <Router>
        <Navbar toggleCarrito={toggleCarrito} busqueda={busqueda} setBusqueda={setBusqueda} />
        <Carrito mostrar={mostrarCarrito} cerrar={() => setMostrarCarrito(false)} />

        <Routes>
          <Route path="/home" element={<Home busqueda={busqueda} />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<Home busqueda={busqueda} />} />
        </Routes>
      </Router>
    </CarritoProvider>
  );
};

export default App;
