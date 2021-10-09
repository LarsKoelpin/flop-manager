import { rest } from "msw";
import { Mock } from "../model/Mock";

type Wiremock = any;

export const wireMockToMockManager = (input: Wiremock): Mock[] => {
  if (input.request.method === "GET") {
    return [
      rest.get(
        "http://localhost:8080" + input.request.urlPath,
        (req, res, ctx) => {
          return res(ctx.json(input.response.body));
        }
      ),
    ];
  }

  return [];
};
