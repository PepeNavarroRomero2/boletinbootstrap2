"use client"
import "bootstrap/dist/css/bootstrap.min.css";

export default function UserTable() {
  const users = [
    { id: 1, name: "Francisco Doblado", email: "paco@macho.com", date: "2000-01-10", status: "Activo" },
    { id: 2, name: "Paco", email: "paco@machoooo.com", date: "1600-12-05", status: "Inactivo" },
    { id: 3, name: "Macho", email: "machoooo@paco.com", date: "2024-02-15", status: "Activo" },
    { id: 4, name: "Machooo", email: "facto@macho.com", date: "2023-11-20", status: "Inactivo" },
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center">Lista de Usuarios</h2>

      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Correo Electrónico</th>
              <th>Fecha de Registro</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.date}</td>
                <td>
                  <span className={`badge ${user.status === "Activo" ? "bg-success" : "bg-danger"}`}>
                    {user.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
