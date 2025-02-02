"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function CardSystem() {
  return (
    <div className="container my-4">
      <div className="row">
        
        <div className="col-12 col-lg-4 mb-4">
          <div className="card h-100">
            <img
              src="https://i.imgur.com/OHIQCdC.jpeg"
              className="card-img-top"
              alt="Servicio 1"
              style={{ objectFit: "cover", height: "200px" }}
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Servicio 1</h5>
              <p className="card-text">
                Esta es una breve descripción del servicio 1. Conoce más sobre lo que ofrecemos.
              </p>
              <div className="mt-auto">
                <button className="btn btn-primary w-100">Más información</button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-4 mb-4">
          <div className="card h-100">
            <img
              src="https://i.imgur.com/XgbZdeA.jpeg"
              className="card-img-top"
              alt="Servicio 2"
              style={{ objectFit: "cover", height: "200px" }}
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Servicio 2</h5>
              <p className="card-text">
                Esta es una breve descripción del servicio 2. Descubre todas las ventajas que tenemos para ti.
              </p>
              <div className="mt-auto">
                <button className="btn btn-primary w-100">Más información</button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-4 mb-4">
          <div className="card h-100">
            <img
              src="https://i.imgur.com/0OXyb26.jpeg"
              className="card-img-top"
              alt="Servicio 3"
              style={{ objectFit: "cover", height: "200px" }}
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Servicio 3</h5>
              <p className="card-text">
                Esta es una breve descripción del servicio 3. Infórmate y mejora tu experiencia con nuestros servicios.
              </p>
              <div className="mt-auto">
                <button className="btn btn-primary w-100">Más información</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
