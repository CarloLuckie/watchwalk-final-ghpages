
import React, { useState } from "react";
import logo from "./logo.jpg"; // Ruta corregida

export default function WatchWalkLanding() {
  const [form, setForm] = useState({ nombre: "", correo: "", mensaje: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Gracias por tu mensaje. Nos pondremos en contacto pronto.");
    setForm({ nombre: "", correo: "", mensaje: "" });
  };

  return (
    <div className="font-sans text-gray-900 bg-white">
      {/* Sección Hero */}
      <section className="h-screen bg-[#0C0F14] text-[#C7A96B] flex items-center justify-center flex-col text-center px-6">
        <img src={logo} alt="WatchWalk Logo" className="w-32 h-32 mb-6" />
        <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-wide">WatchWalk</h1>
        <p className="text-xl md:text-2xl max-w-xl">Seikos Modificados y Automáticos Atemporales</p>
      </section>

      {/* Sección Sobre Nosotros */}
      <section className="py-20 px-6 md:px-20 bg-gray-100">
        <h2 className="text-3xl font-semibold mb-6">Hecho con Pasión</h2>
        <p className="text-lg max-w-3xl">
          En WatchWalk, transformamos relojes Seiko clásicos en piezas únicas. Cada reloj es una fusión de herencia, diseño y precisión.
        </p>
      </section>

      {/* Sección Productos */}
      <section className="py-20 px-6 md:px-20">
        <h2 className="text-3xl font-semibold mb-10">Nuestra Colección</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="border rounded-2xl shadow-lg overflow-hidden">
              <div className="h-60 bg-gray-200 flex items-center justify-center text-gray-500">
                Imagen del Producto
              </div>
              <div className="p-4">
                <h3 className="text-xl font-medium mb-2">Modelo {item}</h3>
                <p className="text-gray-700">Descripción del modelo {item}. Hecho con cuidado y diseñado para impresionar.</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sección ¿Por Qué Elegirnos? */}
      <section className="py-20 px-6 md:px-20 bg-gray-100">
        <h2 className="text-3xl font-semibold mb-6">¿Por Qué WatchWalk?</h2>
        <ul className="list-disc list-inside text-lg max-w-2xl space-y-2">
          <li>Modificaciones Premium de Seiko</li>
          <li>Mecanismos Automáticos de Alta Calidad</li>
          <li>Curado para Entusiastas de los Relojes</li>
          <li>Atención al Detalle y al Diseño</li>
        </ul>
      </section>

      {/* Sección Contacto */}
      <section className="py-20 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-semibold mb-4">Contáctanos</h2>
        <p className="text-lg mb-6">¿Quieres hacer un pedido o tienes preguntas? Llena el formulario y te responderemos pronto.</p>
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto text-left">
          <div className="mb-4">
            <label className="block mb-2 font-medium" htmlFor="nombre">Nombre</label>
            <input type="text" id="nombre" name="nombre" value={form.nombre} onChange={handleChange} required className="w-full border px-4 py-2 rounded-md" />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-medium" htmlFor="correo">Correo Electrónico</label>
            <input type="email" id="correo" name="correo" value={form.correo} onChange={handleChange} required className="w-full border px-4 py-2 rounded-md" />
          </div>
          <div className="mb-6">
            <label className="block mb-2 font-medium" htmlFor="mensaje">Mensaje</label>
            <textarea id="mensaje" name="mensaje" value={form.mensaje} onChange={handleChange} required className="w-full border px-4 py-2 rounded-md h-32"></textarea>
          </div>
          <button type="submit" className="bg-[#0C0F14] text-[#C7A96B] px-6 py-3 rounded-full hover:bg-[#1A1E25] transition w-full">Enviar</button>
        </form>
      </section>

      {/* Pie de Página */}
      <footer className="py-10 text-center text-sm text-gray-500 bg-[#0C0F14] text-[#C7A96B]">
        <img src={logo} alt="WatchWalk Logo" className="w-16 h-16 mx-auto mb-4" />
        &copy; {new Date().getFullYear()} WatchWalk. Todos los derechos reservados.
      </footer>
    </div>
  );
}
