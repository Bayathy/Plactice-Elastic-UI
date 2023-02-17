import { EuiProvider } from "@elastic/eui";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.querySelector("#root") as HTMLElement).render(
  <React.StrictMode>
    <EuiProvider colorMode="light">
      <App />
    </EuiProvider>
  </React.StrictMode>
);
