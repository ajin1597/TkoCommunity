import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NoticePage from "./components/NoticePage";
import CommunityPage from "./components/CommunityPage";
import ChatGptPage from "./components/ChatGptPage";
import Login from "./components/Login";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="NoticePage" element={<NoticePage />} />
      <Route path="CommunityPage" element={<CommunityPage />} />
      <Route path="ChatGptPage" element={<ChatGptPage />} />
      <Route path="Login" element={<Login />} />
      {/* <Route path="LogIn" element={<ChatGptPage />} /> */}

    </Routes>
  </BrowserRouter>
);

reportWebVitals();
