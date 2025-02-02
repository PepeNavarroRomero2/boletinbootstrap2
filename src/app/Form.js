"use client"
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function ContactForm() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    
    if (form.checkValidity()) {
      alert("Formulario enviado correctamente.");
    }
    
    setValidated(true);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Formulario de Contacto</h2>
      
      <form 
        className={`needs-validation ${validated ? "was-validated" : ""}`} 
        noValidate 
        onSubmit={handleSubmit}
      >
        <div className="form-group mb-3">
          <label htmlFor="name">Nombre</label>
          <input 
            type="text" 
            className="form-control" 
            id="name" 
            required 
            placeholder="Ingresa tu nombre" 
          />
          <div className="invalid-feedback">El nombre es obligatorio.</div>
        </div>

        <div className="form-group mb-3">
          <label htmlFor="email">Correo Electrónico</label>
          <input 
            type="email" 
            className="form-control" 
            id="email" 
            required 
            placeholder="correo@ejemplo.com" 
          />
          <div className="invalid-feedback">Por favor, introduce un correo válido.</div>
        </div>

        <div className="form-group mb-3">
          <label htmlFor="message">Mensaje</label>
          <textarea 
            className="form-control" 
            id="message" 
            rows="4" 
            placeholder="Escribe tu mensaje aquí..."
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary w-100">Enviar</button>
      </form>
    </div>
  );
}
