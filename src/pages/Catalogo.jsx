import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import Fondo from '../utils/images/FondoHome.jpg';
import { useCarrito } from '../context/CarritoContext';

Modal.setAppElement('#root');

const productos = [
  {
    nombre: 'Bharara Viking Cairo',
    precio: 170000,
    stock: 3,
    descripcion: 'Inspirada en la fuerza de un vikingo moderno. Aroma robusto y elegante.',
    imagenes: [
      'https://aisbd561426atremendousbird.wordpress.com/wp-content/uploads/2025/07/imagen_2025-07-12_115532445.png',
      'https://aisbd561426atremendousbird.wordpress.com/wp-content/uploads/2025/07/imagen_2025-07-12_115406282.png',
      'https://aisbd561426atremendousbird.wordpress.com/wp-content/uploads/2025/07/imagen_2025-07-12_115446300.png'
    ]
  },
];

const Catalogo = ({ toggleCarrito }) => {
  const [busqueda, setBusqueda] = useState('');
  const [productoActivo, setProductoActivo] = useState(null);
  const { agregarProducto } = useCarrito();

  const productosFiltrados = productos.filter(p =>
    p.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="font-inter text-[#1D352F]">
      {/* Hero */}
      <header className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: `url(${Fondo})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-40" />

        <nav className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-4 px-6 py-6 max-w-7xl mx-auto">
          <h1 className="text-white text-2xl font-bold">Shaddai Perfumes</h1>

          <div className="w-full max-w-lg">
            <input
              type="text"
              placeholder="Buscar loción"
              className="w-full px-4 py-2 rounded-md outline-none text-primary"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
          </div>

          <div className="flex gap-4 text-white text-sm font-medium">
            <Link to="/home" className="hover:text-purple-200">Inicio</Link>
            <Link to="/catalogo" className="hover:text-purple-200">Catálogo</Link>
            <Link to="/contacto" className="hover:text-purple-200">Contacto</Link>
            <Link to="#" className="hover:text-purple-200">Ver carrito</Link>
          </div>
        </nav>

        <div className="relative z-10 text-center text-white mt-20 px-4">
          <h2 className="text-4xl font-semibold">Explora nuestro catálogo de lociones</h2>
        </div>
      </header>

      {/* Productos */}
      <section className="bg-[#C9E4C5] py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {productosFiltrados.map((producto, idx) => (
            <div
              key={idx}
              onClick={() => setProductoActivo(producto)}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all cursor-pointer overflow-hidden border border-gray-200"
            >
              <img src={producto.imagenes[0]} alt={producto.nombre} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-bold">{producto.nombre}</h3>
                <p className="text-[#32286F] font-semibold mb-1">${producto.precio.toLocaleString()}</p>
                <p className="text-sm text-gray-600">{producto.stock} unidades disponibles</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {productoActivo && (
        <Modal
          isOpen={true}
          onRequestClose={() => setProductoActivo(null)}
          className="max-w-5xl mx-auto my-10 bg-white p-6 md:p-10 rounded-3xl shadow-2xl outline-none"
          overlayClassName="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-start z-50"
        >
          <button
            onClick={() => setProductoActivo(null)}
            className="text-red-500 text-right block ml-auto text-2xl font-bold"
          >
            ×
          </button>

          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">{productoActivo.nombre}</h2>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/2">
              <Swiper
                spaceBetween={10}
                slidesPerView={1}
                navigation
                className="rounded-xl"
                modules={[Navigation]}
              >
                {productoActivo.imagenes.map((img, i) => (
                  <SwiperSlide key={i}>
                    <img
                      src={img}
                      alt={`img-${i}`}
                      className="object-cover w-full h-72 rounded-lg cursor-zoom-in"
                      onClick={() => window.open(img, '_blank')}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="flex-1 flex flex-col justify-center">
              <p className="mb-4 text-primary text-sm md:text-base">{productoActivo.descripcion}</p>
              <p className="text-accent font-bold text-xl mb-2">${productoActivo.precio.toLocaleString()}</p>
              <p className="text-sm text-gray-600 mb-6">{productoActivo.stock} unidades disponibles</p>
              <button
                onClick={() => {
                  agregarProducto(productoActivo);
                  setProductoActivo(null);
                }}
                className="bg-[#32286F] text-white px-6 py-3 rounded-lg hover:bg-[#271f5a] transition"
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
