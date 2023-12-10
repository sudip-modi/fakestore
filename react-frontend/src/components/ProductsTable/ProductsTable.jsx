import React from "react";
import "./ProductsTable.css";
import { Link } from "react-router-dom";

const ProductsTable = ({ products }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Price</th>
          <th>Category</th>
          <th>Image</th>
          <th>Rating</th>
          <th>Description</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.title}</td>
            <td>${product.price}</td>
            <td>{product.category}</td>
            <td>
              <img src={product.image} alt={product.title} width="100" />
            </td>
            <td>
              <span>
                &#9733; {product.rating.rate} ({product.rating.count})
              </span>
            </td>
            <td>{product.description}</td>
            <td>
              <Link to={`/product/edit/${product.id}`}>Edit</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductsTable;
