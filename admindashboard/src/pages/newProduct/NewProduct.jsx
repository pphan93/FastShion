import React from "react";
import styles from "./NewProduct.module.css";

const NewProduct = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>New Product</h1>
      <form className={styles.form}>
        <div className={styles.item}>
          <label>Image</label>
          <input type="file" id="file"></input>
        </div>
        <div className={styles.item}>
          <label>Name</label>
          <input type="text" placeholder="Apple AirPods"></input>
        </div>
        <div className={styles.item}>
          <label>Stock</label>
          <input type="number" placeholder="123"></input>
        </div>
        <div className={styles.item}>
          <label>Active</label>
          <select className={styles.select} name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className={styles.button}>Create</button>
      </form>
    </div>
  );
};

export default NewProduct;
