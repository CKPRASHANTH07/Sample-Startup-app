import React from "react";
import Landingpage from "../chunkpages/Landingpage";
import Stats from "../chunkpages/Stats";
import Testimonials from "../chunkpages/Testimonials";
import Endofhome from "../chunkpages/Endofhome";

export default function Home() {
  return (
    <div>
      <Landingpage/>
      <Stats/>
      <Testimonials/>
      <Endofhome/>
    </div>
  );
}
