import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./App";
import NoticePage from "./components/NoticePage";
import CommunityPage from "./components/CommunityPage";
import ChatGptPage from "./components/ChatGptPage";
import Login from "./components/Login";
import SingleNoticPage from "./components/SingleNoticPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="NoticePage/:page" element={<NoticePage />} />
      <Route path="SingleNoticPage/:postNum" element={<SingleNoticPage />} />
      <Route path="CommunityPage" element={<CommunityPage />} />
      <Route path="ChatGptPage" element={<ChatGptPage />} />
      <Route path="Login" element={<Login />} />

    </Routes>
  </BrowserRouter>
);

reportWebVitals();
