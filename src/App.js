import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Shop from "./components/Shop";
import ShoppingCart from './components/ShoppingCart';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path='/cart' element={<ShoppingCart />} /> 
      </Routes>
    </>
  );
}

export default App;
