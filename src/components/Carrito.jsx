// src/components/Carrito.jsx
import React from 'react';
import { useCarrito } from '../context/CarritoContext';

const Carrito = ({ mostrar, cerrar }) => {
  const { carrito, limpiarCarrito } = useCarrito();

  if (!mostrar) return null;

  return (
    <div className="fixed top-0 right-0 w-80 h-full bg-white shadow-lg p-6 z-50 overflow-y-auto">
      <h2 className="text-xl font-bold mb-4">Carrito de compras</h2>
      {carrito.length === 0 ? (
        <p className="text-gray-500">Tu carrito está vacío.</p>
      ) : (
        <ul className="space-y-2">
          {carrito.map((producto, index) => (
            <li key={index} className="border-b pb-2">
              <p className="font-semibold">{producto.nombre}</p>
              <p className="text-sm text-[#32286F]">${producto.precio.toLocaleString()}</p>
            </li>
          ))}
        </ul>
      )}
      <button
        onClick={limpiarCarrito}
        className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Vaciar carrito
      </button>
      <button
        onClick={cerrar}
        className="mt-2 block text-center bg-[#32286F] text-white px-4 py-2 rounded hover:bg-[#271f5a]"
      >
        Cerrar
      </button>
    </div>
  );
};

export default Carrito;
