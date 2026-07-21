import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

test("renders the Little Lemon navbar logo", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  const logoElements = screen.getAllByAltText("Little Lemon logo");

  expect(logoElements.length).toBeGreaterThan(0);
});

test("renders the hero heading", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  const heading = screen.getByRole("heading", { level: 1, name: /little lemon/i });

  expect(heading).toBeInTheDocument();
});