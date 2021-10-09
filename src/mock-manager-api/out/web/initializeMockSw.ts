import { setupWorker, rest } from "msw";
import { late } from "zod";
import { MockManagerRule, Scenario } from "../../model/Mock";

export const initializeMockSW = (m: Scenario[]) => {
  let handlers: any[] = [];

  for (const sc of m) {
    const newHandlers = sc.rules.map((rule) => {
      return rest.get(rule.path, (req, res, ctx) => {
        return res(ctx.json(rule.responseBody));
      });
    });
    handlers = [...handlers, ...newHandlers];
  }

  const server = setupWorker(...handlers);
  return server;
};
