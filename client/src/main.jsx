import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Icons from "./helper/Icons";
import Home from "./pages/Home/Home";
import Gallery from "./pages/Gallery/Gallery";
import HowToPlay from "./pages/HowToPlay/HowToPlay";
import Game from "./pages/Game/Game";
import Login from "./pages/Login/Login";
import PapuaTengah from "./pages/PapuaTengah/PapuaTengah";
import JawaTimur from "./pages/JawaTimur/JawaTimur";
import "./main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Icons />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/how-to-play" element={<HowToPlay />} />
        <Route path="/login" element={<Login />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
