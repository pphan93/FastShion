import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";

import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Success from "./pages/Success";
import NotFound from "./pages/NotFound";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);

  // console.log(useSelector((state) => state.user.currentUser));
  return (
    <Router>
      <Routes>
        <Route path="*" element={<NotFound />} />

        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />}>
          <Route path=":category" element={<ProductList />} />
        </Route>
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/success" element={<Success />} />
        <Route
          path="/login"
          element={user ? <Navigate replace to="/" /> : <Login />}
        />
        <Route
          path="/register"
          element={user ? <Navigate replace to="/" /> : <Register />}
        />
      </Routes>
    </Router>
  );
};

export default App;
