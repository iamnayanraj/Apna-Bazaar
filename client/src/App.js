import "./App.css";
import Header from "./component/layout/header/header.js";
import webFontLoader from "webfontloader";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import Footer from "./component/layout/footer/footer";
import Home from "./component/home/home";
function App() {
  React.useEffect(() => {
    webFontLoader.load({
      google: {
        families: ["Roboto", "Open Sans"],
      },
    });
  });
  // const mode = useSelector((state) => {
  //   return state.toggleDarkLightMode.mode;
  // });
  // const theme = createTheme({
  //   palette: {
  //     mode: mode,
  //   },
  // });
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
