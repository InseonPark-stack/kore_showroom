import React from "react";
import "./App.css";
import UncontrolledExample from "./Main/Carousel";
import FillExample from "./Main/Tabs/Tabs";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <UncontrolledExample></UncontrolledExample>
      <FillExample></FillExample>
      <Footer></Footer>
    </div>
  );
}

export default App;
