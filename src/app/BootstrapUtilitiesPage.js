"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function BootstrapUtilitiesPage() {
  return (
    <section className="bg-light">
      <div className="container">
        <h1 className="text-center pt-3">Encabezado Centrado</h1>
        <p className="my-4 p-3">
          Margenes (my-4) y padding (p-3) 
        </p>
        <div className="d-flex justify-content-center">
          <button className="btn btn-primary">Boton</button>
        </div>
      </div>
    </section>
  );
}
