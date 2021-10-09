import { wireMockToMockManager, Scenario } from "mock-manager";
import tweetsWiremock from "../adapters/mocks/tweets_happy.mock.json";
import tweetsPerf from "../adapters/mocks/tweets_performance.mock.json";
import tweetsEmpty from "../adapters/mocks/tweets_empty.mock.json";
import alotPerforanceData from "../adapters/mocks/tweets_alot_performance";

export const tweetsWiremockData = wireMockToMockManager(tweetsWiremock);
export const tweetsRefWiremockData = wireMockToMockManager(tweetsPerf);
export const tweetsEmptyWiremockData = wireMockToMockManager(tweetsEmpty);

export const happyScenario = {
  name: "Happy Timeline",
  rules: tweetsWiremockData,
  description: "",
};

export const performanceScenaro = {
  name: "Performance Timeline",
  rules: tweetsRefWiremockData,
  description: "",
};

export const aLotPerformanceScenario = {
  name: "AlotPerformance Timeline",
  rules: [alotPerforanceData()],
  description: "",
};

export const emptyScenario = {
  name: "Empty Timeline",
  rules: tweetsEmptyWiremockData,
  description: "",
};

export const tweetScenarios: Scenario[] = [
  happyScenario,
  performanceScenaro,
  emptyScenario,
  aLotPerformanceScenario,
];
