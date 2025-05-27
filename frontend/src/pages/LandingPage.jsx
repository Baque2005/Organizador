import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import logoUG from '../assets/LogoUGcolor.png';

const integrantes = [
  {
    nombre: 'Ronald Baque',
    rol: 'Desarrollador Backend',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    nombre: 'Briggitte Mora',
    rol: 'Diseñadora UI/UX',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    nombre: 'Jennifer Malave',
    rol: 'Desarrolladora Frontend',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    nombre: 'Damian Leon',
    rol: 'Líder de Proyecto',
    avatar: 'https://randomuser.me/api/portraits/men/85.jpg',
  },
];

const testimonios = [
  {
    nombre: 'Lucía Pérez',
    comentario: 'Este organizador me ha ayudado a gestionar mejor mi tiempo y mis tareas diarias. ¡Es muy intuitivo!',
    imagen: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&h=100',
  },
  {
    nombre: 'Carlos Méndez',
    comentario: 'Desde que lo uso, mis proyectos en grupo han sido mucho más eficientes.',
    imagen: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&h=100',
  },
];

const LandingPage = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/login');
  };

  const inicioRef = useRef(null);
  const beneficiosRef = useRef(null);
  const caracteristicasRef = useRef(null);
  const quienesSomosRef = useRef(null);
  const testimoniosRef = useRef(null);
  const faqRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed text-gray-800"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1536305030431-e3f46b579aaf?auto=compress&cs=tinysrgb&dpr=2&h=1080&w=1920')",
      }}
    >
      <div className="min-h-screen backdrop-blur-lg bg-white/80">

        {/* Encabezado */}
        <header className="bg-white/90 text-blue-900 py-5 shadow-md sticky top-0 z-50">
          <div className="container mx-auto px-6 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <img src={logoUG} alt="Logo UG" className="h-10 rounded-full bg-white shadow p-1" />
              <h1 className="text-2xl md:text-3xl font-bold tracking-wide">SYSTECLINX</h1>
            </div>
            <div className="flex gap-4">
              <button onClick={() => scrollToSection(inicioRef)} className="text-sm text-blue-900 hover:underline">Inicio</button>
              <button onClick={() => scrollToSection(beneficiosRef)} className="text-sm text-blue-900 hover:underline">Beneficios</button>
              <button onClick={() => scrollToSection(caracteristicasRef)} className="text-sm text-blue-900 hover:underline">Características</button>
              <button onClick={() => scrollToSection(quienesSomosRef)} className="text-sm text-blue-900 hover:underline">¿Quiénes somos?</button>
              <button onClick={() => scrollToSection(testimoniosRef)} className="text-sm text-blue-900 hover:underline">Testimonios</button>
              <button onClick={() => scrollToSection(faqRef)} className="text-sm text-blue-900 hover:underline">FAQ</button>
              <button
                onClick={handleStart}
                className="bg-blue-800 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-full transition shadow-md"
              >
                Empezar
              </button>
            </div>
          </div>
        </header>

        {/* Hero */}
        <section ref={inicioRef} className="py-24 px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-6">
            Organiza tus tareas de forma inteligente
          </h2>
          <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto text-gray-700">
            Una herramienta moderna, eficiente y fácil de usar para que tu equipo trabaje mejor y más organizado.
          </p>
          <button
            onClick={handleStart}
            className="bg-blue-700 text-white px-8 py-3 rounded-full text-lg shadow-lg hover:bg-blue-600 transition duration-300"
          >
            Comienza ahora
          </button>
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Ilustración"
            className="w-40 md:w-48 mx-auto mt-10 animate-bounce"
          />
        </section>

        {/* Beneficios */}
        <section ref={beneficiosRef} className="bg-white/90 py-20 px-6 text-center">
          <h3 className="text-3xl font-semibold mb-10 text-blue-900">¿Por qué usar nuestro organizador?</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {["Colaboración en tiempo real", "Tareas y recordatorios", "Panel de control inteligente"].map((titulo, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition border-t-4 border-blue-600"
              >
                <h4 className="font-bold mb-2 text-xl text-blue-800">{titulo}</h4>
                <p className="text-gray-600">
                  {i === 0
                    ? "Trabaja con tu equipo desde cualquier lugar, todos conectados."
                    : i === 1
                    ? "Organiza tus pendientes, asigna responsables y nunca olvides nada."
                    : "Visualiza tu productividad y el avance de tus proyectos."}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Características */}
        <section ref={caracteristicasRef} className="py-20 px-6 bg-white/95">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-semibold mb-10 text-center text-blue-900">
              Características destacadas
            </h3>
            <ul className="grid md:grid-cols-2 gap-6 text-lg list-disc list-inside text-gray-700">
              <li>Interfaz moderna y amigable</li>
              <li>Gestión de usuarios y permisos</li>
              <li>Calendario integrado</li>
              <li>Notificaciones automáticas</li>
              <li>Control de progreso de tareas</li>
              <li>Modo oscuro y personalización</li>
            </ul>
          </div>
        </section>

        {/* ¿Quiénes somos? */}
        <section ref={quienesSomosRef} className="bg-white/90 py-20 px-6">
          <h3 className="text-3xl font-bold text-center mb-10 text-blue-900">¿Quiénes somos?</h3>
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {integrantes.map((i, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-md p-6 text-center hover:scale-105 transform transition duration-300"
              >
                <img
                  src={i.avatar}
                  alt={`Avatar de ${i.nombre}`}
                  className="w-24 h-24 mx-auto mb-4 rounded-full object-cover shadow"
                />
                <h4 className="font-semibold text-lg text-blue-800">{i.nombre}</h4>
                <p className="text-gray-600 text-sm italic">{i.rol}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonios */}
        <section ref={testimoniosRef} className="py-20 px-6 bg-white/95">
          <h3 className="text-3xl font-bold text-center mb-10 text-blue-900">
            Lo que dicen nuestros usuarios
          </h3>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {testimonios.map((t, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-tr from-blue-100 to-white rounded-xl p-6 shadow text-center hover:shadow-md transition"
              >
                <img
                  src={t.imagen}
                  alt={`Foto de ${t.nombre}`}
                  className="w-16 h-16 mx-auto mb-4 rounded-full object-cover"
                />
                <p className="italic mb-4 text-gray-700">“{t.comentario}”</p>
                <h4 className="font-semibold text-blue-800">{t.nombre}</h4>
              </div>
            ))}
          </div>
        </section>

{/* FAQ */}
<section ref={faqRef} className="bg-white/90 py-20 px-6">
  <h3 className="text-3xl font-bold text-center mb-10 text-blue-900">
    Preguntas Frecuentes
  </h3>
  <div className="max-w-4xl mx-auto space-y-6">

    <details className="bg-white p-4 rounded shadow hover:shadow-md">
      <summary className="font-semibold cursor-pointer">¿Cómo empiezo a usar la página?</summary>
      <p className="mt-2 text-sm text-gray-600">
        Para empezar, haz clic en el botón <strong>“Empezar”</strong> que se encuentra en la parte superior derecha de la página. 
        Este botón te llevará al formulario de inicio de sesión o registro. 
        Una vez que hayas iniciado sesión, accederás a tu panel principal donde podrás organizar tus tareas de manera sencilla.
      </p>
    </details>

    <details className="bg-white p-4 rounded shadow hover:shadow-md">
      <summary className="font-semibold cursor-pointer">¿El sistema es gratuito?</summary>
      <p className="mt-2 text-sm text-gray-600">
        Sí, nuestro organizador de tareas es completamente gratuito para uso académico.
      </p>
    </details>

    <details className="bg-white p-4 rounded shadow hover:shadow-md">
      <summary className="font-semibold cursor-pointer">¿Mis datos están seguros?</summary>
      <p className="mt-2 text-sm text-gray-600">
        Sí, utilizamos buenas prácticas de seguridad para proteger tu información y garantizar que tus tareas estén a salvo.
      </p>
    </details>

  </div>
</section>

        {/* Footer */}
        <footer className="bg-blue-900 text-white text-center py-6">
          <p className="text-sm mb-2">© {new Date().getFullYear()} SYSTECLINX. Todos los derechos reservados.</p>
          <div className="flex justify-center gap-4">
            <a
              href="https://www.facebook.com/profile.php?id=61576900643053"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-sm"
            >
              Facebook del Proyecto
            </a>
            <a
              href="https://www.ug.edu.ec"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-sm"
            >
              Universidad de Guayaquil
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default LandingPage;