import "mock-manager-ui";

import React from "react";
import ReactDOM from "react-dom";
import { setupMockManager } from "mock-manager";
import { tweetScenarios } from "./scenarios/timeline";

import App from "./components/App";

if (process.env.NODE_ENV === "development") {
  (window as any).mockManager = setupMockManager({}, [...tweetScenarios]);
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
