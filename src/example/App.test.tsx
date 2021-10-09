import React from "react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom";

import {
  tweetsEmptyWiremockData,
  tweetsRefWiremockData,
  tweetsWiremockData,
} from "../mock-manager-dx/initializer";
import { initializeMockServer as initializeMock } from "../mock-manager-api/out/initializeMock";

describe("app", () => {
  describe("Should render happy app", () => {
    const server = initializeMock(tweetsWiremockData);
    beforeAll(() => server.listen());
    afterEach(() => server.resetHandlers());
    afterAll(() => server.close());

    it("Should render happy app", async () => {
      const app = render(<App />);
      const appDiv = await app.findByTestId("my-app");
      expect(appDiv).toBeInTheDocument();
      await waitFor(() =>
        expect(app.queryAllByTestId("some-entry")).toHaveLength(1)
      );
    });
  });

  describe("Should render perf app", () => {
    const server = initializeMock(tweetsRefWiremockData);
    beforeAll(() => server.listen());
    afterEach(() => server.resetHandlers());
    afterAll(() => server.close());

    it("Should render app", async () => {
      const app = render(<App />);
      const appDiv = await app.findByTestId("my-app");
      expect(appDiv).toBeInTheDocument();
      await waitFor(() =>
        expect(app.queryAllByTestId("some-entry")).toHaveLength(2)
      );
    });
  });

  describe("Should render happy app", () => {
    const server = initializeMock(tweetsEmptyWiremockData);
    beforeAll(() => server.listen());
    afterEach(() => server.resetHandlers());
    afterAll(() => server.close());

    it("Should render happy app", async () => {
      const app = render(<App />);
      const appDiv = await app.findByTestId("my-app");
      expect(appDiv).toBeInTheDocument();
      await waitFor(() =>
        expect(app.queryAllByTestId("some-entry")).toHaveLength(0)
      );
    });
  });
});
