import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import MbHeader from "./components/MbHeader";
import Popup from "./components/Popup";
import Footer from "./components/Footer";
import Main from "./components/Main";
import "./css/reset.css";
import "./css/common.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

// 컴포넌트 만들기

root.render(
  <>
    <Popup></Popup>
    <div className="wrap">
      <Header></Header>
      <MbHeader></MbHeader>
      <Main></Main>
      <Footer></Footer>
    </div>
  </>
);
