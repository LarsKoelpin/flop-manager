import { RestHandler } from "msw";

export type Mock = {
  name: string;
  handler: RestHandler;
};
export type Scenario = {
  rules: Mock[];
  name: string;
  description: string;
};

export type Scenarios = Scenario[];
