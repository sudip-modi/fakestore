import React, { useState } from "react";

const EditProduct = ({ products, match }) => {
  const product = products.find((product) => product.id === Number(match.params.productId));
  const [updatedProduct, setUpdatedProduct] = useState(product);

  const handleChange = (event) => {
    setUpdatedProduct({ ...updatedProduct, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement logic to update product on server
  };

  return (
    <div>
      <h2>Edit Product</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input type="text" name="title" value={updatedProduct.title} onChange={handleChange} />
        <label htmlFor="price">Price:</label>
        <input type="number" name="price" value={updatedProduct.price} onChange={handleChange} />
        <label htmlFor="category">Category:</label>
        <input type="text" name="category" value={updatedProduct.category} onChange={handleChange} />
        <button type="submit">Update Product</button>
      </form>
    </div>
  );
};

export default EditProduct;
