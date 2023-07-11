import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import ProductDetail from "./components/ProductDetail";
import Header from "./components/Header";
import ProductListing from "./components/ProductListing";
import { useSelector } from "react-redux";

import ViewDetail from "./components/ViewDetail";
import AddCart from "./components/AddCart";
import MensCloth from "./components/MensCloth";

const App = () => {
  /*  const { user } = useSelector(state => state.data)
   console.log(user) */
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productlisting" element={<ProductListing />} />
          <Route path="/menscloth" element={<MensCloth />} />
          {/* <Route path="/view/:id" element={<ViewDetail />} />*/}
          <Route path="/addcart" element={<AddCart />} />

          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
