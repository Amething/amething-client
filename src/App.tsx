import React from "react";
import GlobalStyle from "./Styles/GlobalStyle";
import { Login, SplashScreen } from "./Components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/splash" element={<SplashScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
