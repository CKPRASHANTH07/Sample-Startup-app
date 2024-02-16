import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/Pagecompos/Home";
import Training from "../src/Pagecompos/Training";
import Navbar from "./UIcomp/Navbar";
import Ipss from "./Pagecompos/Ipss";
import Services from "./Pagecompos/Services";
import Contactus from "./Pagecompos/Contactus";
import Aboutus from "./Pagecompos/Aboutus";

function App() {
  return (
    <Router>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Training" element={<Training />} />
        <Route path="/Ipss" element={<Ipss/>} />
        <Route path="/Services" element={<Services/>}/>
        <Route path="/Contactus" element={<Contactus/>}/>
        <Route path="/Aboutus" element={<Aboutus/>}/>
      </Routes>
    </Router>
  );
}

export default App;
