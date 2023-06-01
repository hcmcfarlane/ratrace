import React from "react";
import App from "./App";
import { render, screen } from "@testing-library/react";

describe("App component", () => {
  render(<App />);
  expect(
    screen.getByRole("heading", { name: /rat race/i })
  ).toBeInTheDocument();
});
