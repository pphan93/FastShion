import React from "react";
import styles from "./FeaturedInfo.module.css";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";

const FeaturedInfo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <span className={styles.title}>Revenue</span>
        <div className={styles.moneyContainer}>
          <span className={styles.money}>$2,123</span>
          <span className={styles.rate}>
            <ArrowDownward className={`${styles.icon} ${styles.negative}`} />
            -11.4
          </span>
        </div>
        <span className={styles.sub}>Compared to last month</span>
      </div>
      <div className={styles.item}>
        <span className={styles.title}>Sales</span>
        <div className={styles.moneyContainer}>
          <span className={styles.money}>$2,123</span>
          <span className={styles.rate}>
            <ArrowDownward className={`${styles.icon} ${styles.negative}`} />
            -11.4
          </span>
        </div>
        <span className={styles.sub}>Compared to last month</span>
      </div>
      <div className={styles.item}>
        <span className={styles.title}>Cost</span>
        <div className={styles.moneyContainer}>
          <span className={styles.money}>$2,123</span>
          <span className={styles.rate}>
            <ArrowUpward className={styles.icon} />
            +11.4
          </span>
        </div>
        <span className={styles.sub}>Compared to last month</span>
      </div>
    </div>
  );
};

export default FeaturedInfo;
