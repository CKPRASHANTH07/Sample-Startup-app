import React from "react";
import Landingpage from "../chunkpages/Landingpage";
import Stats from "../chunkpages/Stats";
import Testimonials from "../chunkpages/Testimonials";
import Endofhome from "../chunkpages/Endofhome";
import Cards from "../chunkpages/Cards";

export default function Home() {
  return (
    <div>
      <Landingpage/>
      <Stats/>
      <Cards/>
      <Testimonials/>
      <Endofhome/>
    </div>
  );
}
