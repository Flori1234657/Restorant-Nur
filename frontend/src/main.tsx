import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import theme from "./customTheme.tsx";
import { CssVarsProvider } from "@mui/joy/styles/CssVarsProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CssVarsProvider theme={theme}>
      <App />
    </CssVarsProvider>
  </React.StrictMode>
);
