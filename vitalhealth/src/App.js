import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/components/home";
import Navbar from "../src/components/navbar";
import Footer from "./components/footer";
import About from "./components/about";
import Quality from "./components/quality";
import Contact from "./components/contact";
import Products from "./components/products";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/home" element={<Home />} />
          <Route path="/quality" element={<Quality />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
