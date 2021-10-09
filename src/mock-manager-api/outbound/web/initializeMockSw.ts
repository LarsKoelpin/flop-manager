import { setupWorker } from "msw";
import { Scenario } from "../../model/Mock";

export const initializeMockSW = (m: Scenario[]) => {
  let handlers: any[] = [];

  for (const sc of m) {
    const newHandlers = sc.rules.map((rule) => {
      return rule;
    });
    handlers = [...handlers, ...newHandlers];
  }

  const server = setupWorker(...handlers);
  return server;
};
