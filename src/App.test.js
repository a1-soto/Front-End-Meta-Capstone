import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the Little Lemon navbar logo", () => {

  render(<App />);

  const logoElements = screen.getAllByAltText("Little Lemon logo");

  expect(logoElements.length).toBeGreaterThan(0);
});

test("renders the hero heading", () => {
  render(<App />);

  const heading = screen.getByRole("heading", { level: 1, name: /little lemon/i });

  expect(heading).toBeInTheDocument();
});

