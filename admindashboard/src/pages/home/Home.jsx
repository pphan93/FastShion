import React from "react";
import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import WidgetLarge from "../../components/widgetLarge/WidgetLarge";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import styles from "./Home.module.css";

const data = [
  {
    name: "Jan",
    activeUser: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Feb",
    activeUser: 2000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Mar",
    activeUser: 5000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Apr",
    activeUser: 6000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "May",
    activeUser: 1000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Jun",
    activeUser: 9000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Jul",
    activeUser: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Aug",
    activeUser: 5000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Sep",
    activeUser: 6000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Oct",
    activeUser: 2000,
    pv: 2400,
    amt: 2400,
  },
];

const Home = () => {
  return (
    <div className={styles.home}>
      <FeaturedInfo />
      <Chart
        data={data}
        title="Sales Analytics"
        grid="true"
        dataKey="activeUser"
      />
      <div className={styles.widgets}>
        <WidgetSm />
        <WidgetLarge />
      </div>
    </div>
  );
};

export default Home;
