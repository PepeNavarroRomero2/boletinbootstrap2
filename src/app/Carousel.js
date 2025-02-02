"use client"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function Carousel() {
  return (
    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>

      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="5000">
          <img
            src="https://i.imgur.com/FKUjDXp.jpeg"
            className="d-block w-100"
            style={{ height: "400px", objectFit: "cover" }}
            alt="Imagen 1"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Título de la imagen 1</h5>
            <p>Descripción de la imagen 1.</p>
          </div>
        </div>

        <div className="carousel-item" data-bs-interval="5000">
          <img
            src="https://i.imgur.com/BdtBEfw.jpeg"
            className="d-block w-100"
            style={{ height: "400px", objectFit: "cover" }}
            alt="Imagen 2"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Título de la imagen 2</h5>
            <p>Descripción de la imagen 2.</p>
          </div>
        </div>

        <div className="carousel-item" data-bs-interval="5000">
          <img
            src="https://i.imgur.com/prs0Oxa.jpeg"
            className="d-block w-100"
            style={{ height: "400px", objectFit: "cover" }}
            alt="Imagen 3"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Título de la imagen 3</h5>
            <p>Descripción de la imagen 3.</p>
          </div>
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Anterior</span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Siguiente</span>
      </button>
    </div>
  );
}
