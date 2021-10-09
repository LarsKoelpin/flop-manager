import { MockManagerRule, Scenario } from "../../model/Mock";
import { initializeMockSW } from "./initializeMockSw";

export type MockManager = {
  setActiveScenarios: (s: string[]) => any;
  addEventListener: (e: string, f: Function) => any;
  start: () => any;
  stop: () => any;
  getScenarios: () => Scenario[];
  getActiveScenarios: () => Scenario[];
  getActiveScenariosNames: () => string[];
};

export const setupMockManager = (
  options: any,
  scenarios: Scenario[]
): MockManager => {
  const handlers = { "active-scenario-changed": [] as Function[] };
  let worker: any | null = null;
  return {
    getActiveScenariosNames() {
      return JSON.parse(localStorage.getItem("mm-active") || "[]");
    },
    getActiveScenarios() {
      return scenarios.filter((scenario) =>
        this.getActiveScenariosNames().includes(scenario.name)
      );
    },
    getScenarios: () => {
      return scenarios;
    },
    addEventListener: (event: string, handler: Function) => {
      if (event === "active-scenario-changed") {
        handlers["active-scenario-changed"].push(handler);
      }
    },
    setActiveScenarios(sc: string[]) {
      localStorage.setItem("mm-active", JSON.stringify(sc));
      handlers["active-scenario-changed"].forEach((f) =>
        f(this.getActiveScenariosNames())
      );
    },
    start() {
      worker = initializeMockSW(this.getActiveScenarios());
      worker.start();
    },
    stop: () => {
      if (worker) {
        worker.stop();
      }
    },
  };
};
