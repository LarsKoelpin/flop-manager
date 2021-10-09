import { MockManagerRule, Scenario } from "../../Mock";
import { initializeMockSW } from "./initializeMockSw";

type Api = {
  setActiveScenarios: (s: string[]) => any;
  addEventListener: (e: string, f: Function) => any;
  start: () => any;
  stop: () => any;
  getScenarios: () => Scenario[];
  getActiveScenarios: () => Scenario[];
};

export const setupMockManager = (options: any, scenarios: Scenario[]): Api => {
  const handlers = [];
  let worker: any | null = null;

  let activeScenario: string[] = [];

  return {
    getActiveScenarios: () => {
      return scenarios.filter((x) => activeScenario.includes(x.name));
    },
    getScenarios: () => {
      return scenarios;
    },
    addEventListener: (event: string, handler: Function) => {
      handlers.push(handler);
    },
    setActiveScenarios: (sc: string[]) => {
      activeScenario = sc;
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
