import vod from "@renke/vod";
import * as zod from "zod";

export const MockManagerRuleSchema = vod(
  "MockManager",
  zod.object({
    path: zod.string().min(0),
    method: zod.string().min(0),
    responseBody: zod.any(),
  })
);
export const CreateMockManagerRule = MockManagerRuleSchema.create;
export type MockManagerRule = zod.infer<typeof MockManagerRuleSchema>;

export type Scenario = {
  rules: MockManagerRule[];
  name: string;
};

export type Scenarios = Scenario[];
