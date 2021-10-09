import faker from "faker";
import { rest } from "msw";
import { Mock } from "mock-manager";
import { Tweet } from "../../models/Tweet";

const generate = (): Mock => {
  const tweets: Tweet[] = [];
  for (let i = 0; i < 1000; i++) {
    tweets.push({
      sender: faker.hacker.abbreviation(),
      text: faker.lorem.sentence(),
    });
  }
  return {
    name: "tweets",
    handler: rest.get("http://localhost:8080/tweets", (req, res, ctx) => {
      return res(ctx.json(tweets));
    }),
  };
};
export default generate;
