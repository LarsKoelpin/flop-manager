import type { Tweet } from "../models/Tweet";

export const fetchTweets = async (): Promise<Tweet[]> => {
  return window
    .fetch("http://localhost:8080/tweets", {})
    .then((res) => res.json())
    .catch((err) => []);
};
