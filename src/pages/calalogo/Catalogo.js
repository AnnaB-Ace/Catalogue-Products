import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { deleteProdutsApi, getProducts } from "../../api/eventsApi";
import Header from "../../components/header/Header";
import Table from "../../components/table/Table";
import "./Catalogo.css";

const Catalogo = () => {
  const [products, setProducts] = useState([]);
  const history = useHistory();

  const getList = async () => {
    try {
      const resp = await getProducts();
      setProducts(resp.data.eventos);
    } catch (err) {
    } finally {
    }
  };

  const deleteProduct = async (id) => {
    try {
      console.log(id);
      await deleteProdutsApi(id);
      getList();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <div>
      <Header />
      <Table {...{ products, history }} deleteProduct={deleteProduct} />
    </div>
  );
};

export default Catalogo;
