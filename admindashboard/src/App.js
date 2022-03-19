import SideBar from "./components/sidebar/SideBar";
import Topbar from "./components/topbar/Topbar";
import styles from "./App.module.css";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className={styles.container}>
        <SideBar />
        <div className={styles.mainContainer}>
          <Home />
        </div>
      </div>
    </div>
  );
}

export default App;
