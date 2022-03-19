import React from "react";
import styles from "./SideBar.module.css";
import { LineStyle, Timeline, TrendingUp } from "@mui/icons-material";

const SideBar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.wrapper}>
        <div className={styles.menu}>
          <h3 className={styles.title}>Dashboard</h3>
          <ul className={styles.sidebarList}>
            <li className={`${styles.sidebarListItem} ${styles.active}`}>
              <LineStyle className={styles.icon} />
              Home
            </li>
            <li className={styles.sidebarListItem}>
              <Timeline className={styles.icon} />
              Analytics
            </li>
            <li className={styles.sidebarListItem}>
              <TrendingUp className={styles.icon} />
              Sales
            </li>
          </ul>
        </div>
        <div className={styles.menu}>
          <h3 className={styles.title}>Quick Menu</h3>
          <ul className={styles.sidebarList}>
            <li className={`${styles.sidebarListItem} ${styles.active}`}>
              <LineStyle className={styles.icon} />
              Home
            </li>
            <li className={styles.sidebarListItem}>
              <Timeline className={styles.icon} />
              Analytics
            </li>
            <li className={styles.sidebarListItem}>
              <TrendingUp className={styles.icon} />
              Sales
            </li>
          </ul>
        </div>
        <div className={styles.menu}>
          <h3 className={styles.title}>Notification</h3>
          <ul className={styles.sidebarList}>
            <li className={`${styles.sidebarListItem} ${styles.active}`}>
              <LineStyle className={styles.icon} />
              Home
            </li>
            <li className={styles.sidebarListItem}>
              <Timeline className={styles.icon} />
              Analytics
            </li>
            <li className={styles.sidebarListItem}>
              <TrendingUp className={styles.icon} />
              Sales
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
