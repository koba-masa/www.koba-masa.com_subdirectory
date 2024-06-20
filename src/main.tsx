import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import OrbSkill from "@/heaven_burns_red/orb_skill/OrbSkill.tsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/heaven-burns-red/orb-skill" element={<OrbSkill />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
