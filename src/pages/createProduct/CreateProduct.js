import React, { useState } from "react";
import { useHistory } from "react-router";
import { createProdutsApi } from "../../api/eventsApi";

import Header from "../../components/header/Header";
import Spinner from "../../components/spinner/Spinner";
import "./CreateProduct.css";

const CreateProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    image: "http://via.placeholder.com/150x150",
  });
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const goToBack = () => history.push("/");

  const saveSubmit = async (e) => {
    e.preventDefault();
    setFormData(formData);
    try {
      setLoading(true);
      await createProdutsApi(formData);
      history.push("/");
    } catch (err) {
      console.log("error en la base de datos");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Header />
      <div className="container-fluid mt-4">
        <div className="card">
          <div className="card-body">
            <form onSubmit={saveSubmit}>
              <div className="row">
                <div className="col mb-4 hola">
                  <img
                    className="foto"
                    src="http://via.placeholder.com/150x150"
                    alt="foto"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-sm-3">
                  <div className="form-group">
                    <label className="label">URL de la imagen</label>
                    <input
                      className="form-control"
                      type="url"
                      name="image"
                      value={formData.image}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-3">
                  <div className="form-group">
                    <label className="label">Nombre del producto</label>
                    <input
                      className="form-control"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-3">
                  <div className="form-group">
                    <label className="label">Precio</label>
                    <input
                      className="form-control"
                      type="number"
                      name="price"
                      value={formData.price}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <div className="label">
                    {
                      <button
                        type="submit"
                        className="btn btn-primary text-left"
                      >
                        {loading ? <Spinner /> : <span>Submit</span>}
                      </button>
                    }
                    <button className="btn btn-light mx-4" onClick={goToBack}>
                      Volver
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
