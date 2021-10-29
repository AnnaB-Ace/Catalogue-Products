import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { editProductApi, getProducts } from "../../api/eventsApi";
import Header from "../../components/header/Header";

const EditProduct = (props) => {
  const { match } = props;
  const id = match.params.id;
  const history = useHistory();
  const [items, setItems] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    image: "",
  });
  const filterProduct = items.find((product) => product.id === id);
  console.log(filterProduct);

  const getList = async (filterProduct) => {
    console.log(filterProduct);
    try {
      const resp = await getProducts();
      setItems(resp.data.eventos);
      const { name, price, image } = filterProduct;
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
    getList(filterProduct);
  }, []);

  // editProductApi(formData.id);  mandando el id actualiza los cambios

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const update = async () => {
    try {
      await editProductApi(formData.id);
      history.push("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <Header />
      <div className="container-fluid mt-4">
        <div className="card">
          <div className="card-body">
            <form>
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
                    <button
                      type="submit"
                      className="btn btn-primary text-left"
                      onClick={update}
                    >
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
