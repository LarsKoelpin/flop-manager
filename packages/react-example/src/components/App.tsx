import React, { useState, useEffect } from "react";
import { fetchTweets } from "../adapters/fetch-tweets";
import { Tweet } from "../models/Tweet";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "mock-manager": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >; // Normal web component
    }
  }
}

function App(props: any) {
  const [data, setData] = useState<Tweet[]>([]);

  useEffect(() => {
    (async () => {
      const tweets = await fetchTweets();
      setData(tweets);
    })();
  }, []);

  return (
    <div className="App" data-testid="my-app">
      <mock-manager></mock-manager>
      <header className="App-header"></header>
      {data.map((x, idx) => {
        return (
          <div key={idx} data-testid="some-entry">
            {x.text} form {x.sender}
          </div>
        );
      })}
    </div>
  );
}

export default App;
