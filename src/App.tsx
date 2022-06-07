import React from "react";
import GlobalStyle from "./Styles/GlobalStyle";
import PageTemplate from "./pages/template/PageTemplate";
import Router from "./Router";
import { type } from "os";

function App() {
  return (
    <PageTemplate>
      <Router />
    </PageTemplate>
  );
}

export default App;
