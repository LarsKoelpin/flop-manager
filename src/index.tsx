import React from "react";
import ReactDOM from "react-dom";
import App from "./example/App";
import { initializeMockSW } from "./mock-manager-api/out/initializeMockSw";
import { rules } from "./mock-manager-dx/initializer";

(window as any).mockManager = {};
const global = window as any;
if (process.env.NODE_ENV === "development") {
  global.mockManager.scenarios = rules;
  const handlers: Function[] = [];
  global.mockManager.addEventHandler = (event: string, f: Function) => {
    console.log("ADDING EVENT HANDLER");
    handlers.push(f);
  };
  global.mockManager.changeScenario = (name: string) => {
    global.mockManager.worker.stop();
    const scenariotoStart = rules.find((r) => r.name === name);
    if (scenariotoStart) {
      global.mockManager.worker = initializeMockSW(scenariotoStart);
      global.mockManager.worker.start();
    }
    handlers.forEach((x) => x());
  };
  global.mockManager.worker = initializeMockSW(rules[0]);
  global.mockManager.worker.start();
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
