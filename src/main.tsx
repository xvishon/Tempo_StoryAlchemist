import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";

import { TempoDevtools } from "tempo-devtools";
TempoDevtools.init();

const basename = import.meta.env.BASE_URL;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode className="items-start">
    <ThemeProvider defaultTheme="light">
      <BrowserRouter basename={basename}>
        <App className="items-start" />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
);
