import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const mock = new MockAdapter(axios);

describe("Test App component", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  mock.onPost("https://poker247tech.ru/get_horoscope/").reply(200, {
    horoscope: {
      aquarius: "string",
      aries: "string",
      cancer: "string",
      capricorn: "string",
      gemini: "string",
      leo: "string",
      libra: "string",
      pisces: "string",
      sagittarius: "string",
      scorpio: "string",
      taurus: "string",
      virgo: "string",
    },
  });
  render(<App />);

  test("check render", async () => {

    await waitFor(() => {
      expect(screen.getByText("aries")).toBeInTheDocument();
    });
  });
});
