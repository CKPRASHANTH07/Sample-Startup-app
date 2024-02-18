import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Main Page Import
import Home from "../src/Pagecompos/Home";
import Navbar from "./UIcomp/Navbar";
import Ipss from "./Pagecompos/Ipss";
import Services from "./Pagecompos/Services";
import Contactus from "./Pagecompos/Contactus";
import Aboutus from "./Pagecompos/Aboutus";
import AILaunchpad  from './Pagecompos/AILaunchpad'
import StartupLaunchpad from "./Pagecompos/StartupLaunchpad";
import Eventsprogram from "./Pagecompos/Eventsprogram";
// SubPage Import
import Training from "./SubPagesCompos/Training";
import Appdevelopment from "./SubPagesCompos/Appdevelopment";
import Webdevelopment from "./SubPagesCompos/Webdevelopment";
import Graphicdesigning from "./SubPagesCompos/Graphicdesigning";
import Digitalmarketing from "./SubPagesCompos/Digitalmarketing";
import Internshipprogram from "./SubPagesCompos/Internshipprogram";
import Eventsandcompetition from "./SubPagesCompos/Eventsandcompetition";
import Pastprogramlog from "./SubPagesCompos/Pastprogramlog";
import Hosteventprogram from "./SubPagesCompos/Hosteventprogram";

function App() {
  return (
    <Router>
     <Navbar/>
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/Services" element={<Services/>}/>
        <Route path="/Ipss" element={<Ipss/>} />
        <Route path="/AILaunchPad" element={<AILaunchpad/>}/>
        <Route path="/StartupLaunchPad" element={<StartupLaunchpad/>}/>
        <Route path="/Eventsprogram" element={<Eventsprogram/>}/>
        <Route path="/Contactus" element={<Contactus/>}/>
        <Route path="/Aboutus" element={<Aboutus/>}/>
        {/* Sub Pages */}
        <Route path="/training" element={<Training />} />
        <Route path="/appdevelopment" element={<Appdevelopment/>}/>
        <Route path="/webdevelopment" element={<Webdevelopment/>}/>
        <Route path="/graphicdesigning" element={<Graphicdesigning/>}/>
        <Route path="/digitalmarketing" element={<Digitalmarketing/>}/>
        <Route path="/internshipprogram" element={<Internshipprogram/>}/>
        <Route path="/eventsandcompetition" element={<Eventsandcompetition/>}/>
        <Route path="/pastprogramlog" element={<Pastprogramlog/>}/>
        <Route path="/hosteventprogram" element={<Hosteventprogram/>}/>
      </Routes>
    </Router>
  );
}

export default App;
