import SideBar from "./components/sidebar/SideBar";
import Topbar from "./components/topbar/Topbar";
import styles from "./App.module.css";
import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./pages/user/User";

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className={styles.container}>
        <SideBar />
        <div className={styles.mainContainer}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<User />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
