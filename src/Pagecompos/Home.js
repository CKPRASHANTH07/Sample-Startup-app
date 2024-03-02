import React from "react";
import Landingpage from "../chunkpages/Landingpage";
import Stats from "../chunkpages/Stats";
import Testimonials from "../chunkpages/Testimonials";
import Endofhome from "../chunkpages/Endofhome";
import Cards from "../chunkpages/Cards";
import Footer from "../UIcomp/Footer";
import Trainingsintens from "../chunkpages/Trainings&intens";
import Domains from "../chunkpages/Domains";


export default function Home() {
  return (
    <div>
      <Landingpage/>
      <Stats/>
      <Trainingsintens />
      <Domains />
      <Cards/>
      <Testimonials/>
      <Endofhome/>
     
      <Footer/>
    </div>
  );
}
