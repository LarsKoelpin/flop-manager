import { setupWorker, rest } from "msw";
import { MockManagerRule, Scenario } from "../../model/Mock";

export const initializeMockSW = (m: Scenario) => {
  const handlers = m.rules.map((rule) => {
    return rest.get(rule.path, (req, res, ctx) => {
      return res(ctx.json(rule.responseBody));
    });
  });
  const server = setupWorker(...handlers);
  return server;
};
