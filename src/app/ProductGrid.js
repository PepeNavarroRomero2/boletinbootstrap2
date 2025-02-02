import "bootstrap/dist/css/bootstrap.min.css";

export default function ProductGrid() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Nuestros Productos</h2>
      <div className="row">
        {[
          { img: "https://i.imgur.com/kHCk6eM.jpeg", title: "Producto 1", desc: "Descripción del producto 1." },
          { img: "https://i.imgur.com/UBLi3O3.jpeg", title: "Producto 2", desc: "Descripción del producto 2." },
          { img: "https://i.imgur.com/SaxQAQ0.jpeg", title: "Producto 3", desc: "Descripción del producto 3." },
          { img: "https://i.imgur.com/2qqVGRW.jpeg", title: "Producto 4", desc: "Descripción del producto 4." }
        ].map((product, index) => (
          <div className="col-lg-3 col-md-6 mb-4" key={index}>
            <div className="card h-100 d-flex flex-column">
              <img
                src={product.img}
                className="card-img-top w-100 h-100 object-fit-cover"
                style={{ height: "200px" }} 
                alt={product.title}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.desc}</p>
                <a href="#" className="btn btn-primary mt-auto">
                  Comprar ahora
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
