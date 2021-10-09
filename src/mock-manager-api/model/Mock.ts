import { RestHandler } from "msw";

export type Mock = RestHandler;
export type Scenario = {
  rules: Mock[];
  name: string;
};

export type Scenarios = Scenario[];
