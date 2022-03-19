import React from "react";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <FeaturedInfo />
    </div>
  );
};

export default Home;
