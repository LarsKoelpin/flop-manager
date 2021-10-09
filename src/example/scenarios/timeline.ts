import { wireMockToMockManager } from "../../mock-manager-api/inbound/wiremockToMockManager";
import { Scenario } from "../../mock-manager-api/model/Mock";
import tweetsWiremock from "../adapters/mocks/tweets.mock.json";
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
  name: "Performance",
  rules: tweetsRefWiremockData,
  description: "",
};

export const aLotPerformanceScenaro = {
  name: "AlotPerformance",
  rules: [alotPerforanceData()],
  description: "",
};

export const emptyScenario = {
  name: "Empty Timeline",
  rules: tweetsEmptyWiremockData,
  description: "",
};

export const scenarios: Scenario[] = [
  happyScenario,
  performanceScenaro,
  emptyScenario,
  aLotPerformanceScenaro,
];
