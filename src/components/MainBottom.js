import React from "react";
import "../css/mainbottom.css";
import MainBottomCards from "./MainBottomCards";
import MainBottomList from "./MainBottomList";
const MainBottom = () => {
  return (
    <div className="main-bottom">
      <MainBottomList></MainBottomList>
      <MainBottomCards></MainBottomCards>
    </div>
  );
};

export default MainBottom;
