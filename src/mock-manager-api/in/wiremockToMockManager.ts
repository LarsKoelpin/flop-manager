import { MockManagerRule } from "../model/Mock";

type Wiremock = any;

export const wireMockToMockManager = (input: Wiremock): MockManagerRule => {
  return MockManagerRule({
    path: "http://localhost:8080/tweets",
    method: "GET",
    responseBody: input.response.body,
  });
};
