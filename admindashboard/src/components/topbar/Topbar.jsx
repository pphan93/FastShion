import React from "react";
import styles from "./Topbar.module.css";
import { NotificationsNone } from "@mui/icons-material";

const Topbar = () => {
  return (
    <div className={styles.topbar}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <span className={styles.logo}>FastAdmin</span>
        </div>
        <div className={styles.right}>
          <div className={styles.iconwrapper}>
            <NotificationsNone />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
