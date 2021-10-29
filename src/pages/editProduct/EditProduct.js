import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { editProductApi, getProducts } from "../../api/eventsApi";
import Header from "../../components/header/Header";

const EditProduct = (props) => {
  const { match } = props;

  const id = match.params.id;
  const history = useHistory();
  console.log(history);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    image: "",
  });

  const getList = async () => {
    try {
      const resp = await getProducts();
      const events = resp.data.eventos;
      console.log(events);
      const item = events.find((e) => e.id === id);
      console.log(item);
      const { name, price, image } = item;
      setFormData({
        name: name,
        price: price,
        image: image,
      });
    } catch (err) {
    } finally {
    }
  };
  const goToInit = () => history.push("/");

  useEffect(() => {
    getList();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const update = async (e) => {
    e.preventDefault();

    try {
      await editProductApi(id, formData);
    } catch (err) {
      console.log(err);
    }
    history.push("/");
  };
  return (
    <div>
      <Header />
      <div className="container-fluid mt-4">
        <div className="card">
          <div className="card-body">
            <form onSubmit={update}>
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
                    <button type="submit" className="btn btn-primary text-left">
                      <span>Submit</span>
                    </button>
                    <button className="btn btn-light mx-4" onClick={goToInit}>
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

export default EditProduct;
