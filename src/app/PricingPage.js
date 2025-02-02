"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function PricingPage() {
  return (
    <div className="container my-5">
      <div className="row">
        
        <div className="col-12 col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-header text-center">
              <h3>Básico</h3>
            </div>
            <div className="card-body text-center">
              <h4 className="card-title">$9.99/mes</h4>
              <ul className="list-unstyled my-3">
                <li>Característica 1</li>
                <li>Característica 2</li>
                <li>Característica 3</li>
              </ul>
              <button className="btn btn-outline-primary">Seleccionar plan</button>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4 mb-4">
          <div className="card h-100 border-primary">
            <div className="card-header text-center bg-primary text-white">
              <h3>Pro</h3>
            </div>
            <div className="card-body text-center">
              <h4 className="card-title">$19.99/mes</h4>
              <ul className="list-unstyled my-3">
                <li>Característica 1</li>
                <li>Característica 2</li>
                <li>Característica 3</li>
                <li>Característica 4</li>
              </ul>
              <button className="btn btn-primary">Seleccionar plan</button>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-header text-center">
              <h3>Premium</h3>
            </div>
            <div className="card-body text-center">
              <h4 className="card-title">$29.99/mes</h4>
              <ul className="list-unstyled my-3">
                <li>Característica 1</li>
                <li>Característica 2</li>
                <li>Característica 3</li>
                <li>Característica 4</li>
                <li>Característica 5</li>
              </ul>
              <button className="btn btn-outline-primary">Seleccionar plan</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
