import SideBar from "./components/sidebar/SideBar";
import Topbar from "./components/topbar/Topbar";
import styles from "./App.module.css";
import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./pages/user/User";
import UserDetail from "./pages/userDetail/UserDetail";
import NewUser from "./pages/newUser/NewUser";
import Product from "./pages/product/Product";
import ProductDetail from "./pages/productDetail/ProductDetail";

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
            <Route path="/user/:id" element={<UserDetail />} />
            <Route path="/newUser" element={<NewUser />} />{" "}
            <Route path="/products" element={<Product />} />
            <Route path="/product/:productId" element={<ProductDetail />} />
            <Route path="/newProduct" element={<ProductDetail />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
