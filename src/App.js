import React from "react";
import Navbar from "./UIcomp/Navbar";
import Home from "./Pagecompos/Home";
import Aboutus from "./Pagecompos/Aboutus";
import Footer from "./UIcomp/Footer";
import Services from "./Pagecompos/Services";
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Services />
      <Aboutus />
      <Footer />
    </div>
  );
}

export default App;
