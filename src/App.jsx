import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import CartPage from "./pages/CartPage";
import NavBar from "./components/NavBar/navbar";
function App() {
  const [cartItems, setItems] = useState([]);
  const totalItems = cartItems.length;
  console.log(cartItems);
  return (
    <div className="Wrapper">
      <NavBar totalCart={totalItems} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage AddItem={setItems} />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
