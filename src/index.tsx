import React from "react";
import ReactDOM from "react-dom";
import { setupMockManager } from "./mock-manager-api/outbound/web/initializeApi";
import { scenarios } from "./example/scenarios/timeline";
import App from "./example/components/App";

if (process.env.NODE_ENV === "development") {
  (window as any).mockManager = setupMockManager({}, scenarios);
  console.log("Registering");
  (window as any).mockManager.addEventListener(
    "active-scenario-changed",
    () => {
      ReactDOM.render(
        <React.StrictMode>
          <App />
        </React.StrictMode>,
        document.getElementById("root")
      );
      window.location.reload();
    }
  );
  (window as any).mockManager.start();
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
