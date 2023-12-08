import React from 'react'
import ProductsTable from '../ProductsTable/ProductsTable'
import { useEffect, useState } from 'react';

const Main = () => {
    const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
    <h1>Product List</h1>
      <ProductsTable products={products} />
    </div>
  )
}

export default Main