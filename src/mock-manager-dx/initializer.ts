import { wireMockToMockManager } from "../mock-manager-api/in/wiremockToMockManager";
import tweetsWiremock from "./scenario/tweets.mock.json";
import tweetsPerf from "./scenario/tweets_performance.mock.json";
import tweetsEmpty from "./scenario/tweets_empty.mock.json";
import { Scenario } from "../mock-manager-api/model/Mock";

export const tweetsWiremockData = wireMockToMockManager(tweetsWiremock);
export const tweetsRefWiremockData = wireMockToMockManager(tweetsPerf);
export const tweetsEmptyWiremockData = wireMockToMockManager(tweetsEmpty);

export const happyScenario = {
  name: "Happy Timeline",
  rules: [tweetsWiremockData],
};

export const performanceScenaro = {
  name: "Performance",
  rules: [tweetsRefWiremockData],
};

export const emptyScenario = {
  name: "Empty Timeline",
  rules: [tweetsEmptyWiremockData],
};

export const scenarios: Scenario[] = [
  happyScenario,
  performanceScenaro,
  emptyScenario,
];
