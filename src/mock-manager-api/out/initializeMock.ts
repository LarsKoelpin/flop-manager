import { setupServer } from "msw/node";
import { MockManagerRule } from "../Mock";
import { rest } from "msw";

export const initializeMockServer = (m: MockManagerRule) => {
  const server = setupServer(
    rest.get(m.path, (req, res, ctx) => {
      return res(ctx.json(m.responseBody));
    })
  );
  return server;
};
