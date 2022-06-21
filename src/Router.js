import GlobalStyle from "./Styles/GlobalStyle";
import { Login } from "./Components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Router() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
