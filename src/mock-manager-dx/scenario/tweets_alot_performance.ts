import faker from "faker";
import { Tweet } from "../../example/Tweet";
import {
  CreateMockManagerRule,
  MockManagerRule,
} from "../../mock-manager-api/model/Mock";

export default (): MockManagerRule => {
  const tweets: Tweet[] = [];
  for (let i = 0; i < 1000; i++) {
    tweets.push({
      sender: faker.hacker.abbreviation(),
      text: faker.lorem.sentence(),
    });
  }
  return CreateMockManagerRule({
    method: "GET",
    path: "http://localhost:8080/tweets",
    responseBody: tweets,
  });
};
