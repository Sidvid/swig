/**
 * @jest-environment jsdom
 */
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Instamart from "../Instamart.js";
import "@testing-library/jest-dom";
describe("Instamart component", () => {
  it("should render without crashing", () => {
    render(<Instamart />);

    expect(screen.getByTestId("accordian_test")).toBeInTheDocument();
  });
});
describe("Instamart component", () => {
  it("should display the Accordion component", () => {
    render(<Instamart />);
    const allAccordian = screen.getAllByTestId("test-title");
    expect(allAccordian[0]).toBeVisible();
    expect(allAccordian[1]).toBeVisible();
    expect(allAccordian[2]).toBeVisible();
    fireEvent.click(allAccordian[0]);
    expect(allAccordian[0]).toBeInTheDocument();
  });
});
describe("Instamart component", () => {
  it("should display the correct number of accordion items", () => {
    render(<Instamart />);

    const accordionItems = screen.getAllByTestId("acc-test");
    expect(accordionItems.length).toBe(3);
  });
});
