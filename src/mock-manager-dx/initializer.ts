import { wireMockToMockManager } from "../mock-manager-api/in/wiremockToMockManager";
import tweetsWiremock from "./scenario/tweets.mock.json";
import tweetsPerf from "./scenario/tweets_performance.mock.json";
import tweetsEmpty from "./scenario/tweets_empty.mock.json";
import { Scenario } from "../mock-manager-api/model/Mock";

export const tweetsWiremockData = wireMockToMockManager(tweetsWiremock);
export const tweetsRefWiremockData = wireMockToMockManager(tweetsPerf);
export const tweetsEmptyWiremockData = wireMockToMockManager(tweetsEmpty);

export const scenarios: Scenario[] = [
  {
    name: "Happy Timeline",
    rules: [tweetsWiremockData],
  },
  {
    name: "Performance",
    rules: [tweetsRefWiremockData],
  },
  {
    name: "Empty Timeline",
    rules: [tweetsEmptyWiremockData],
  },
];
