import React from "react";
import { NavLink } from "react-router-dom";

const Table = ({ products, history, deleteProduct }) => {
  const goToEdit = (id) => history.push(`/edit/${id}`);
  const edit = (product) => {
    goToEdit(product.id);
  };
  return (
    <div className="container-fluid mt-4">
      <div className="card mb-4">
        <div className="card-body">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Precio</th>
                <th>&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, i) => (
                <tr key={i}>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td className="text-right">
                    <div className="btn">
                      <i className="fa fa-eye"></i>
                    </div>
                    <div className="btn" onClick={() => edit(product)}>
                      <i className="fa fa-pencil"></i>
                    </div>
                    <button
                      type="button"
                      className="btn"
                      onClick={() => deleteProduct(product.id)}
                    >
                      <i className="fa fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <NavLink to="/createProduct">
        <button className="btn btn-primary">Agregar</button>
      </NavLink>
    </div>
  );
};

export default Table;
