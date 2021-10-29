import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Catalogo from "./pages/calalogo/Catalogo";
import CreateProduct from "./pages/createProduct/CreateProduct";
import EditProduct from "./pages/editProduct/EditProduct";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Catalogo} exact />
          <Route path="/createProduct" component={CreateProduct} />
          <Route path="/edit/:id" component={EditProduct} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
