import { MockManagerRule, Scenario } from "../../Mock";
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

  let activeScenario: string[] = [scenarios[0].name];

  return {
    getActiveScenariosNames: () => {
      return activeScenario;
    },
    getActiveScenarios: () => {
      return scenarios.filter((x) => activeScenario.includes(x.name));
    },
    getScenarios: () => {
      return scenarios;
    },
    addEventListener: (event: string, handler: Function) => {
      if (event === "active-scenario-changed") {
        handlers["active-scenario-changed"].push(handler);
      }
    },
    setActiveScenarios: (sc: string[]) => {
      activeScenario = sc;
      handlers["active-scenario-changed"].forEach((f) => f(activeScenario));
    },
    start: () => {
      worker = initializeMockSW(scenarios[0]);
      worker.start();
    },
    stop: () => {
      if (worker) {
        worker.stop();
      }
    },
  };
};
