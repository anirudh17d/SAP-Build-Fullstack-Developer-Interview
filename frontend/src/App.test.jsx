// eslint-disable-next-line no-unused-vars
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
// eslint-disable-next-line no-unused-vars
import App from "./App";

test("renders app without crashing", () => {
  render(<App />);
  expect(screen.getByText(/React/i)).toBeInTheDocument();
  expect(screen.getByAltText(/sap logo/i)).toBeInTheDocument();
});
