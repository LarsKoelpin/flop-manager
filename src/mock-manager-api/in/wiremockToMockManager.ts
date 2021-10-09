import type { MockManagerRule } from "../Mock";

type Wiremock = any;

export const wireMockToMockManager = (input: Wiremock): MockManagerRule => {
  return {
    path: "http://localhost:8080/tweets",
    method: "GET",
    responseBody: input.response.body,
  };
};
