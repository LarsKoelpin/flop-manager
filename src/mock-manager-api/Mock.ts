export interface MockManagerRule {
  path: string;
  method: string;
  responseBody: any;
}

export type Scenario = {
  rules: MockManagerRule[];
  name: string;
};

export type Scenarios = Scenario[];
