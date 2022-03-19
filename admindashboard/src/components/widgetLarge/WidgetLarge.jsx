import React from "react";
import styles from "./WidgetLarge.module.css";

const WidgetLarge = () => {
  const Button = ({ type }) => {
    return (
      <button className={`${styles.button} ${styles[type]}`}>{type}</button>
    );
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Latest Transactions</h3>
      <table className={styles.table}>
        <tr className={styles.tableRow}>
          <th className={styles.tableHeader}>Customer</th>
          <th className={styles.tableHeader}>Date</th>
          <th className={styles.tableHeader}>Amount</th>
          <th className={styles.tableHeader}>Status</th>
        </tr>
        <tr className={styles.tableRow}>
          <td className={styles.user}>
            <img
              src="https://i.pravatar.cc/"
              alt=""
              className={styles.img}
            ></img>
            <span className={styles.name}>Anna Keller</span>
          </td>
          <td className={styles.date}>2 Jne 2021</td>
          <td className={styles.amount}>$122.00</td>
          <td className={styles.status}>
            <Button type="Approved" />
          </td>
        </tr>

        <tr className={styles.tableRow}>
          <td className={styles.user}>
            <img
              src="https://i.pravatar.cc/"
              alt=""
              className={styles.img}
            ></img>
            <span className={styles.name}>Susan Carol</span>
          </td>
          <td className={styles.date}>2 Jne 2021</td>
          <td className={styles.amount}>$122.00</td>
          <td className={styles.status}>
            <Button type="Pending" />
          </td>
        </tr>
        <tr className={styles.tableRow}>
          <td className={styles.user}>
            <img
              src="https://i.pravatar.cc/"
              alt=""
              className={styles.img}
            ></img>
            <span className={styles.name}> Banada Meller</span>
          </td>
          <td className={styles.date}>2 Jne 2021</td>
          <td className={styles.amount}>$1222.00</td>
          <td className={styles.status}>
            <Button type="Declined" />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default WidgetLarge;
