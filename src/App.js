import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ProductListing from "./components/ProductListing";
import MensCloth from "./components/MensCloth";
import { Toaster } from "react-hot-toast";
import AddCart from "./components/AddCart";

const App = () => {
  /*  const { user } = useSelector(state => state.data)
   console.log(user) */
  return (
    <div>
      <div>
        <Toaster />
      </div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productlisting" element={<ProductListing />} />
          <Route path="/menscloth" element={<MensCloth />} />
          <Route path="/addcart" element={<AddCart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
