import React from 'react';
import { Link } from "react-router-dom";
import Fondo from '../utils/images/FondoHome.jpg';
import { useCarrito } from '../context/CarritoContext';

const Home = () => {
  const { agregarProducto } = useCarrito();

  // Productos simulados en promociones
  const promociones = [
    {
      nombre: "Básico",
      precio: 30000,
      descripcion: "Catálogo con características de cada loción.",
      imagen: "https://aisbd561426atremendousbird.wordpress.com/wp-content/uploads/2025/07/lociones-4.jpeg"
    },
    {
      nombre: "Estándar",
      precio: 75000,
      descripcion: "Todos los beneficios del plan Básico.",
      imagen: "https://aisbd561426atremendousbird.wordpress.com/wp-content/uploads/2025/07/lociones.jpeg"
    }
  ];

  return (
    <div className="flex flex-col gap-20 font-inter text-[#1D352F]">  
      {/* Sección Hero */}
      <section
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${Fondo})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 z-0" />

        {/* Barra de navegación */}
        <nav className="relative z-10 flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
          <h1 className="text-white text-2xl font-bold tracking-tight">Shaddai Perfumes</h1>
          <div className="space-x-6">
            <Link to="/home" className="text-white hover:text-purple-200 transition font-medium">Inicio</Link>
            <Link to="/catalogo" className="text-white hover:text-purple-200 transition font-medium">Catálogo</Link>
            <Link to="/contacto" className="text-white hover:text-purple-200 transition font-medium">Contacto</Link>
          </div>
        </nav>

        {/* Hero central */}
        <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-4">
          <h1 className="text-white text-5xl md:text-6xl font-semibold leading-tight mb-6">
            Encuentra tu loción<br />perfecta aquí
          </h1>
          <p className="text-white text-lg max-w-2xl font-medium">
            Explora nuestra colección de lociones elegantes y revitalizantes, diseñadas para complementar tu estilo y bienestar diario.
          </p>
        </div>
      </section>

      {/* Sección Catálogo Intro */}
      <section className="w-full px-4 py-12 flex flex-col md:flex-row items-center gap-10 max-w-7xl mx-auto">
        <div className="flex-1">
          <img
            src="https://aisbd561426atremendousbird.wordpress.com/wp-content/uploads/2025/07/lociones.jpeg"
            alt="Lociones elegantes y frescas"
            className="w-full aspect-square object-cover rounded-xl shadow-md"
          />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">Conoce nuestro catálogo de lociones elegantes y frescas, perfuma tu día con estilo.</h2>
          <p className="mb-6">
            En nuestra tienda online, elegancia y frescura se combinan en cada loción, diseñadas para realzar tu belleza natural y tu bienestar. Navega nuestro catálogo, elige tu aroma preferido y disfruta de diferentes métodos de pago con envío a todo el país.
          </p>
          <Link
            to="/catalogo"
            className="inline-block bg-[#32286F] text-white px-6 py-3 rounded-lg hover:bg-[#271f5a] transition"
          >
            Compra ahora
          </Link>
        </div>
      </section>

      {/* Promociones */}
      <section id="precios" className="w-full px-4 py-12 bg-[#C9E4C5]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">¡ Promociones !</h2>
          <div className="grid gap-10 md:grid-cols-2">
            {promociones.map((promo, i) => (
              <div key={i} className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center">
                <img
                  src={promo.imagen}
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
                title: '¡Excepcional!',
                review: 'Las lociones de Shaddai tienen un aroma encantador y son perfectas para cualquier momento del día.',
              },
              {
                title: '¡Lo recomiendo mucho!',
                review: 'Excelente calidad y servicio. Además, la entrega fue rápida y sin complicaciones.',
              },
              {
                title: '¡Cinco estrellas!',
                review: 'Me encanta la variedad de fragancias y lo fresco que se sienten las lociones.',
              },
            ].map((t, index) => (
              <div key={index} className="bg-gray-100 rounded-xl p-6 shadow">
                <h3 className="text-lg font-semibold mb-2">{t.title}</h3>
                <p className="mb-2">{t.review}</p>
                <p className="text-sm text-gray-500">Recomendación generada por IA</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
