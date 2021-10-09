import { setupServer } from "msw/node";
import { Scenario } from "../../model/Mock";
import { rest } from "msw";

export const initializeMockServer = (m: Scenario[]) => {
  let handlers: any[] = [];

  for (const sc of m) {
    const newHandlers = sc.rules.map((rule) => {
      return rest.get(rule.path, (req, res, ctx) => {
        return res(ctx.json(rule.responseBody));
      });
    });
    handlers = [...handlers, ...newHandlers];
  }

  const server = setupServer(...handlers);
  return server;
};
