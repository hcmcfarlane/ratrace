import React from "react";
import App from "./App";
import { render, screen } from "@testing-library/react";

describe("App component", () => {
  it("displays correct text", () => {
    render(<App />);
    expect(
      screen.getByRole("heading", { name: /rat race/i })
    ).toBeInTheDocument();
  });
});
