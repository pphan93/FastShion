import React from "react";
import styles from "./ProductDetail.module.css";
import { Link } from "react-router-dom";
import Chart from "../../components/chart/Chart";
import { Publish } from "@mui/icons-material";

const productData = [
  {
    name: "Jan",
    sales: 400,
  },
  {
    name: "Feb",
    sales: 400,
  },
  {
    name: "Mar",
    sales: 500,
  },
];

const ProductDetail = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Product</h1>
        <Link to="/newProduct">
          <button className={styles.addButton}>Create</button>
        </Link>
      </div>
      <div className={styles.productTop}>
        <div className={styles.topLeft}>
          <Chart data={productData} dataKey="sales" title="Sales" />
        </div>
        <div className={styles.topRight}>
          <div className={styles.infoTop}>
            <img className={styles.productImg} src="" alt=""></img>
            <span className={styles.productName}>Apple Airpods</span>
          </div>
          <div className={styles.infoBottom}>
            <div className={styles.infoItem}>
              <span className={styles.infoKey}>id: </span>
              <span className={styles.infoValue}>123</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoKey}>sale:$ </span>
              <span className={styles.infoValue}>123</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoKey}>active: </span>
              <span className={styles.infoValue}>yes</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoKey}>in stock: </span>
              <span className={styles.infoValue}>no</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.productBottom}>
        <form className={styles.productForm}>
          <div className={styles.formLeft}>
            <label>Product name</label>
            <input type="text" placeholder="Apple Airpod"></input>
            <label>In Stock</label>
            <select name="instock" id="inStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>

            <label>Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className={styles.formRight}>
            <div className={styles.productUpload}>
              <img className={styles.uploadImg} src="" alt=""></img>
              <label htmlFor="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: "none" }}></input>
            </div>
            <button className={styles.button}>Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductDetail;
