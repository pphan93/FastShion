import React from "react";
import styles from "./WidgetSm.module.css";
import { Visibility } from "@mui/icons-material";

const WidgetSm = () => {
  return (
    <div className={styles.container}>
      <span className={styles.title}>New Join Members</span>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <img src="https://i.pravatar.cc/" alt="" className={styles.img}></img>
          <div className={styles.user}>
            <span className={styles.username}>Anna Keller</span>
            <span className={styles.jobTitle}>Hungry Eater</span>
          </div>
          <button className={styles.button}>
            <Visibility className={styles.icon} /> Display
          </button>
        </li>
        <li className={styles.listItem}>
          <img src="https://i.pravatar.cc/" alt="" className={styles.img}></img>
          <div className={styles.user}>
            <span className={styles.username}>Anna Keller</span>
            <span className={styles.jobTitle}>Hungry Eater</span>
          </div>
          <button className={styles.button}>
            <Visibility className={styles.icon} /> Display
          </button>
        </li>
        <li className={styles.listItem}>
          <img src="https://i.pravatar.cc/" alt="" className={styles.img}></img>
          <div className={styles.user}>
            <span className={styles.username}>Anna Keller</span>
            <span className={styles.jobTitle}>Hungry Eater</span>
          </div>
          <button className={styles.button}>
            <Visibility className={styles.icon} /> Display
          </button>
        </li>
        <li className={styles.listItem}>
          <img src="https://i.pravatar.cc/" alt="" className={styles.img}></img>
          <div className={styles.user}>
            <span className={styles.username}>Anna Keller</span>
            <span className={styles.jobTitle}>Hungry Eater</span>
          </div>
          <button className={styles.button}>
            <Visibility className={styles.icon} /> Display
          </button>
        </li>
        <li className={styles.listItem}>
          <img src="https://i.pravatar.cc/" alt="" className={styles.img}></img>
          <div className={styles.user}>
            <span className={styles.username}>Anna Keller</span>
            <span className={styles.jobTitle}>Hungry Eater</span>
          </div>
          <button className={styles.button}>
            <Visibility className={styles.icon} /> Display
          </button>
        </li>
      </ul>
    </div>
  );
};

export default WidgetSm;
