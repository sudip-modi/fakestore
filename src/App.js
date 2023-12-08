import React, { useState, useEffect } from "react";
import { Routes, Route, Switch, Link, BrowserRouter } from "react-router-dom";
import ProductsTable from "./components/ProductsTable/ProductsTable.jsx";
import EditProduct from "./components/EditProduct/EditProduct.jsx";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<ProductsTable products={products}/>} />
        <Route
          path="/product/edit/:productId"
          element={<EditProduct products={products} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
