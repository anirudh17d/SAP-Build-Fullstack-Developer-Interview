import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

test("renders SAP logo", () => {
  render(<App />);
  const logo = screen.getByAltText(/sap logo/i);
  expect(logo).toBeInTheDocument();
});

test("renders subheading text", () => {
  render(<App />);
  expect(
    screen.getByText(/Building with React, Node\.js, and CI\/CD/i)
  ).toBeInTheDocument();
});

test("renders analog clock", () => {
  render(<App />);
  const svgElement = screen.getByRole("img", { name: /analog clock/i });
  expect(svgElement).toBeInTheDocument();
});

test("renders digital time element", () => {
  render(<App />);
  const timeElements = screen.getAllByText(/CEST|CET/i);
  expect(timeElements.length).toBeGreaterThan(0);
});
