import './App.css';
import { Outlet, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Shop from "./components/Shop";
import NavHeader from './components/NavHeader'

const App = () => {
  return (
    <>
      <NavHeader/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </>
  );
}

export default App;
