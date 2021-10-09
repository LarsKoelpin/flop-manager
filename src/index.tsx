import React from "react";
import ReactDOM from "react-dom";
import App from "./example/App";
import { setupMockManager } from "./mock-manager-api/out/web/initializeApi";
import { scenarios } from "./mock-manager-dx/initializer";

const global = window as any;
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
