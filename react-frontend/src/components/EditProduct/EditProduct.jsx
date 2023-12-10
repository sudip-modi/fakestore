import React, { useState } from "react";
import { useParams } from "react-router";
import styles from "./EditProduct.module.css";

const EditProduct = ({ products, match }) => {
  const { productId } = useParams();

  const product = products.find((product) => product.id === Number(productId));
  const [updatedProduct, setUpdatedProduct] = useState(product);

  const handleChange = (event) => {
    setUpdatedProduct({
      ...updatedProduct,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/${productId}`,
        {
          method: "PATCH",
          body: JSON.stringify(updatedProduct),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const updatedProductData = await response.json();
        // Update the local state with updated product data
        setUpdatedProduct(updatedProductData);
        // Show success message
        console.log("Product updated successfully!");
      } else {
        // Show error message
        console.error("Error updating product:", await response.text());
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.editProductWrapper}>
      <h2 className={styles.heading}>Edit Product</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title" className={styles.label}>
          Title:
        </label>
        <input
          className={styles.input}
          type="text"
          name="title"
          value={updatedProduct.title}
          onChange={handleChange}
        />
        <label htmlFor="price" className={styles.label}>
          Price:
        </label>
        <input
          className={styles.input}
          type="number"
          name="price"
          value={updatedProduct.price}
          onChange={handleChange}
        />
        <label htmlFor="category" className={styles.label}>
          Category:
        </label>
        <input
          className={styles.input}
          type="text"
          name="category"
          value={updatedProduct.category}
          onChange={handleChange}
        />
        <button type="submit" className={styles.button}>
          Update Product
        </button>
      </form>
    </div>
  );
};

export default EditProduct;
