import React from "react";
import ReactDOM from "react-dom";
import { setupMockManager } from "./mock-manager-api/out/web/initializeApi";
import { scenarios } from "./example/scenarios/scenario";
import App from "./example/components/App";

if (process.env.NODE_ENV === "development") {
  (window as any).mockManager = setupMockManager({}, scenarios);
  (window as any).mockManager.start();
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
