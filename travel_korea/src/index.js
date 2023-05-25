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
import Writing from "./components/Writing";
import MyPage from "./components/MyPage";
import PostSearch from "./components/PostSearch";
import Oauth from "./components/Oauth";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="NoticePage/:page" element={<NoticePage />} />
      <Route path="SingleNoticPage/:postNum" element={<SingleNoticPage />} />
      <Route path="CommunityPage/:page" element={<CommunityPage />} />
      <Route path="ChatGptPage" element={<ChatGptPage />} />
      <Route path="Login" element={<Login />} />
      <Route path="Writing" element={<Writing />} />
      <Route path="MyPage" element={<MyPage />} />
      <Route path="PostSearch" element={<PostSearch />} />
      <Route path="Oauth" element={<Oauth />} />
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
