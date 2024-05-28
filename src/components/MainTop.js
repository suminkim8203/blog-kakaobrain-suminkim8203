import React from "react";
import "../css/maintop.css";
import SlideTopBanner from "./SlideTopBanner";
import SlideTopMain from "./SlideTopMain";
const MainTop = () => {
  return (
    <div className="main-top">
      <SlideTopMain></SlideTopMain>
      <SlideTopBanner></SlideTopBanner>
    </div>
  );
};

export default MainTop;
