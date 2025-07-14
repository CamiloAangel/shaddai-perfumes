// src/pages/Catalogo.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import Fondo from '../utils/images/FondoHome.jpg';
import { useCarrito } from '../context/CarritoContext';

// Asegurar accesibilidad del modal
Modal.setAppElement('#root');

// Lista simulada de productos
const productos = [
  {
    nombre: 'Bharara Viking Cairo',
    precio: 170000,
    descripcion: 'Inspirada en la fuerza de un vikingo moderno. Aroma robusto y elegante.',
    imagenes: [
      'https://aisbd561426atremendousbird.wordpress.com/wp-content/uploads/2025/07/imagen_2025-07-12_115532445.png',
      'https://aisbd561426atremendousbird.wordpress.com/wp-content/uploads/2025/07/imagen_2025-07-12_115406282.png',
      'https://aisbd561426atremendousbird.wordpress.com/wp-content/uploads/2025/07/imagen_2025-07-12_115446300.png'
    ]
  },
  // Agrega más productos si deseas
];

const Catalogo = () => {
  const [busqueda, setBusqueda] = useState('');
  const [productoActivo, setProductoActivo] = useState(null);
  const { agregarProducto } = useCarrito();

  // Filtrar productos con coincidencias parciales
  const productosFiltrados = productos.filter(p =>
    p.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="font-inter text-[#1D352F]">
      {/* Hero + Navbar */}
      <header className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: `url(${Fondo})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-40" />

        <nav className="relative z-10 flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
          <h1 className="text-white text-2xl font-bold">Shaddai Perfumes</h1>

          <div className="flex gap-4 items-center w-full max-w-lg">
            <input
              type="text"
              placeholder="Buscar loción"
              className="w-full px-4 py-2 rounded-md outline-none text-[#1D352F]"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
          </div>

          <div className="space-x-6 text-white flex items-center">
            <Link to="/home" className="hover:text-purple-200">Inicio</Link>
            <Link to="/catalogo" className="hover:text-purple-200">Catálogo</Link>
            <Link to="/contacto" className="hover:text-purple-200">Contacto</Link>
          </div>
        </nav>

        <div className="relative z-10 text-center text-white mt-20 px-4">
          <h2 className="text-4xl font-semibold">Explora nuestro catálogo de lociones</h2>
        </div>
      </header>

      {/* Sección de productos */}
      <section className="bg-[#C9E4C5] py-16 px-6">
        <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-3">
          {productosFiltrados.map((producto, idx) => (
            <div
              key={idx}
              onClick={() => setProductoActivo(producto)}
              className="bg-white rounded-xl shadow hover:shadow-xl transition cursor-pointer"
            >
              <img src={producto.imagenes[0]} alt={producto.nombre} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-bold">{producto.nombre}</h3>
                <p className="text-[#32286F] font-semibold">${producto.precio.toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal con detalles del producto */}
      {productoActivo && (
        <Modal
          isOpen={true}
          onRequestClose={() => setProductoActivo(null)}
          className="max-w-3xl mx-auto my-16 bg-white p-6 rounded-lg shadow-xl outline-none"
          overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start z-50"
        >
          <button
            onClick={() => setProductoActivo(null)}
            className="text-red-500 text-right block ml-auto text-2xl font-bold"
          >
            ×
          </button>

          <h2 className="text-2xl font-bold mb-4 text-[#1D352F]">{productoActivo.nombre}</h2>
          <div className="flex flex-col md:flex-row gap-6">
            {/* Carrusel de imágenes */}
            <div className="w-full md:w-1/2">
              <Swiper spaceBetween={10} slidesPerView={1}>
                {productoActivo.imagenes.map((img, i) => (
                  <SwiperSlide key={i}>
                    <img src={img} alt={`img-${i}`} className="object-cover w-full h-64 rounded" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Descripción y acción */}
            <div className="flex-1">
              <p className="mb-4 text-[#1D352F]">{productoActivo.descripcion}</p>
              <p className="text-[#32286F] font-bold text-xl mb-4">${productoActivo.precio.toLocaleString()}</p>
              <button
                onClick={() => {
                  agregarProducto(productoActivo);
                  setProductoActivo(null);
                }}
                className="bg-[#32286F] text-white px-6 py-2 rounded hover:bg-[#271f5a] transition"
              >
                Agregar al carrito
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Catalogo;
