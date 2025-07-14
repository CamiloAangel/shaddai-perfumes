import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useCarrito } from '../context/CarritoContext';

const Navbar = ({ toggleCarrito, busqueda, setBusqueda }) => {
  const { carrito } = useCarrito();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md shadow-md transition-shadow duration-300">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 px-6 py-6 max-w-7xl mx-auto">
        <h1 className="text-white text-2xl font-bold">Shaddai Perfumes</h1>

        <div className="w-full max-w-lg">
          <input
            type="text"
            placeholder="Buscar loción"
            className="w-full px-4 py-2 rounded-md outline-none text-[#1D352F] bg-white shadow-md"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </div>

        <div className="flex gap-4 items-center text-white text-sm font-medium">
          <Link to="/home" className="hover:text-purple-200">Inicio</Link>
          <Link to="/contacto" className="hover:text-purple-200">Contacto</Link>

          <button
            onClick={toggleCarrito}
            className="flex items-center gap-2 bg-[#32286F] px-4 py-2 rounded hover:bg-[#271f5a] transition"
          >
            <ShoppingCart className="w-5 h-5" />
            <span>Carrito ({carrito.length})</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
