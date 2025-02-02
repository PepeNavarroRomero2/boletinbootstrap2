"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function LoginPage() {
  return (
    <div className="container-fluid vh-100 d-flex justify-content-center align-items-center">
      <div className="card p-4" style={{ minWidth: "300px", maxWidth: "400px" }}>
        <h3 className="text-center mb-4">Iniciar Sesión</h3>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Correo Electrónico</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="nombre@ejemplo.com"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Contraseña</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Contraseña"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Iniciar sesión
          </button>
          <div className="text-center mt-3">
            <a href="#">¿Olvidaste tu contraseña?</a>
          </div>
        </form>
      </div>
    </div>
  );
}
