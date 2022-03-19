import SideBar from "./components/sidebar/SideBar";
import Topbar from "./components/topbar/Topbar";
import styles from "./App.module.css";

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className={styles.container}>
        <SideBar />
        <div className={styles.other}>asdfsd</div>
      </div>
    </div>
  );
}

export default App;
