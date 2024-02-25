import React from "react";
import Aboutushero from "../chunkpages/Aboutushero";
import Verttimeline from "../chunkpages/Verttimeline";
import Mediagal from "../chunkpages/Mediagal";
import Footer from "../UIcomp/Footer";
import Ourteam from "../chunkpages/Ourteam";

export default function Aboutus() {
  return (
    <div>
       <Aboutushero/>
       <Verttimeline/>
       <Mediagal/>
       <Ourteam/>
       <Footer/>
    </div>
  );
}
