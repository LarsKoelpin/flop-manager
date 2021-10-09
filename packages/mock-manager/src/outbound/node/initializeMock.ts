import { setupServer } from "msw/node";
import { Scenario } from "../../model/Mock";
import { rest } from "msw";

export const initializeMockServer = (m: Scenario[]) => {
  let handlers: any[] = [];

  for (const sc of m) {
    const newHandlers = sc.rules.map((rule) => {
      return rule.handler;
    });
    handlers = [...handlers, ...newHandlers];
  }

  const server = setupServer(...handlers);
  return server;
};
