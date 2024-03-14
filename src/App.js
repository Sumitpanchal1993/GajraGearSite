import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Assly/Home";
import Customer from "./Assly/Customer";
import Footer from "./Components/Footer";
import Product from "./Assly/Product";
import Career from "./Assly/Career";
import Contact from "./Assly/Contact";
import GDGL from "./Assly/GDGL";
import GGPL from "./Assly/GGPL";
import Elve from "./Assly/Elve";

export default function App() {
  return (
    <>
      <Router>
        <header>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="customer" element={<Customer />}></Route>
            <Route path="product" element={<Product />}></Route>
            <Route path="career" element={<Career />}></Route>
            <Route path="contactus" element={<Contact />}></Route>
            <Route path="elve" element={<Elve />}></Route>
            <Route path="ggpl" element={<GGPL />}></Route>
            <Route path="gdgl" element={<GDGL />}></Route>
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </Router>
    </>
  );
}
