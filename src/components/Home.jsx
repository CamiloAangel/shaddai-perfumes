// src/components/Home.jsx (ahora incluye Catálogo internamente)
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

// Productos principales (Catálogo y Promociones)
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
  }
];

const promociones = [
  {
    nombre: 'Básico',
    precio: 30000,
    descripcion: 'Catálogo con características de cada loción.',
    imagenes: ['https://aisbd561426atremendousbird.wordpress.com/wp-content/uploads/2025/07/lociones-4.jpeg'],
    stock: 5
  },
  {
    nombre: 'Estándar',
    precio: 75000,
    descripcion: 'Todos los beneficios del plan Básico.',
    imagenes: ['https://aisbd561426atremendousbird.wordpress.com/wp-content/uploads/2025/07/lociones.jpeg'],
    stock: 2
  }
];

const Home = ({ busqueda }) => {
  const [productoActivo, setProductoActivo] = useState(null);
  const { agregarProducto } = useCarrito();

  const productosFiltrados = productos.filter(p =>
    p.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="font-inter text-[#1D352F]">
      {/* Hero */}
      <header className="relative h-[90vh] bg-cover bg-center flex items-center justify-center text-white" style={{ backgroundImage: `url(${Fondo})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">Encuentra tu loción perfecta aquí</h1>
          <p className="mt-6 text-lg md:text-xl text-gray-200">
            Explora nuestra colección de lociones elegantes y revitalizantes, diseñadas para complementar tu estilo y bienestar diario.
          </p>
        </div>
      </header>
      
      {/* Catálogo */}
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

      {/* Promociones */}
      <section className="w-full px-4 py-12 bg-[#C9E4C5]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Promociones</h2>
          <div className="grid gap-10 md:grid-cols-2">
            {promociones.map((promo, i) => (
              <div key={i} className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center">
                <img
                  src={promo.imagenes[0]}
                  alt={promo.nombre}
                  className="w-full aspect-video object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold mb-1">{promo.nombre}</h3>
                <p className="text-[#32286F] font-bold mb-2">${promo.precio.toLocaleString()}</p>
                <p className="mb-4 text-center">{promo.descripcion}</p>
                <button
                  className="bg-[#32286F] text-white px-4 py-2 rounded hover:bg-[#271f5a] transition"
                  onClick={() => agregarProducto(promo)}
                >
                  Agregar al carrito
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reseñas */}
      <section className="w-full px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-10">Reseñas</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: 'Excepcional',
                review: 'Las lociones tienen un aroma encantador y son perfectas para cualquier momento del día.'
              },
              {
                title: 'Muy recomendado',
                review: 'Excelente calidad y servicio. Además, la entrega fue rápida.'
              },
              {
                title: 'Cinco estrellas',
                review: 'Me encanta la variedad de fragancias y lo fresco que se sienten.'
              }
            ].map((r, index) => (
              <div key={index} className="bg-gray-100 rounded-xl p-6 shadow">
                <h3 className="text-lg font-semibold mb-2">{r.title}</h3>
                <p className="mb-2">{r.review}</p>
                <p className="text-sm text-gray-500">Recomendación generada por IA</p>
              </div>
            ))}
          </div>
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

export default Home;
