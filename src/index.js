import { useState } from "react";
import ReactDOM from "react-dom/client";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import MbHeader from "./components/MbHeader";
import Popup from "./components/Popup";
import "./css/common.css";
import "./css/reset.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Wrap = () => {
  // js 코드 자리
  const [mbMenuOpen, setMbMenuOpen] = useState(false);
  const clickMbbt = () => {
    setMbMenuOpen(prev => {
      return !prev;
    });
  };

  return (
    <div className="wrap">
      <Header clickMbbt={clickMbbt} mbMenuOpen={mbMenuOpen}></Header>
      <MbHeader
        mbMenuOpen={mbMenuOpen}
        setMbMenuOpen={setMbMenuOpen}
      ></MbHeader>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
};
root.render(
  <>
    <Popup></Popup>
    <Wrap></Wrap>
  </>,
);
