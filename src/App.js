// import logo from './logo.svg';
import './App.css';

import React from "react";
// import Radio from "@material-ui/core/Radio";
import Navbar from "./Navbar";
import Slider1 from "./Slider1";
import Slider3 from "./Slider3";
import Slider4 from "./Slider4";
import Slider5 from "./Slider5";
import Slider6 from "./Slider6";
import Footer from "./Footer";

export default function RadioButtonsGroup() {
  return (
    <>
      <div>
        <Navbar />
        <Slider1 />
        <div className="side-padding">
          <div className="slider2">
            <img src="https://image.wedmegood.com/resized-nw/1200X/uploads/images/006baed3d1d24576942b3482224cede3catdeskbannerhome/Bridaloutfit.png" />
          </div>
          <Slider3 />
          <Slider4 />
          <Slider5 />
          <Slider6 />
          <Footer />
        </div>
      </div>
    </>
  );
}
