import React from "react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom";

import { initializeMockServer as initializeMock } from "../../mock-manager-api/outbound/node/initializeMock";
import {
  emptyScenario,
  happyScenario,
  performanceScenaro,
} from "../scenarios/scenario";

describe("app", () => {
  describe("Should render happy app", () => {
    const server = initializeMock([happyScenario]);
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

  describe("Performance", () => {
    const server = initializeMock([performanceScenaro]);
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
    const server = initializeMock([emptyScenario]);
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
