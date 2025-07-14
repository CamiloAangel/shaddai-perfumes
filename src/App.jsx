// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { ShoppingCart } from 'lucide-react';

// Contexto global del carrito (asegúrate de que el archivo se llama exactamente: CarritoContext.js)
import { CarritoProvider } from './context/CarritoContext';

// Componentes principales
import Carrito from './components/Carrito';
import Home from "./components/Home";
import Catalogo from "./pages/Catalogo";
import Contacto from "./pages/Contacto";

// Componente auxiliar que usa location para el botón del carrito
const AppRoutes = ({ toggleCarrito }) => {
  const location = useLocation();

  return (
    <>
      {/* Botón flotante para mostrar carrito */}
      {location.pathname !== '/contacto' && (
        <div className="fixed top-4 right-4 z-50">
          <button
            onClick={toggleCarrito}
            className="bg-[#32286F] text-white px-4 py-2 rounded shadow hover:bg-[#271f5a] transition flex items-center gap-2"
          >
            <ShoppingCart className="w-5 h-5" />
            Ver carrito
          </button>
        </div>
      )}

      {/* Rutas de la aplicación */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </>
  );
};

function App() {
  const [mostrarCarrito, setMostrarCarrito] = useState(false);

  return (
    <Router>
      <CarritoProvider>
        {/* Carrito flotante en todas las páginas */}
        <Carrito mostrar={mostrarCarrito} cerrar={() => setMostrarCarrito(false)} />

        {/* Rutas con botón de carrito */}
        <AppRoutes toggleCarrito={() => setMostrarCarrito(true)} />
      </CarritoProvider>
    </Router>
  );
}

export default App;
