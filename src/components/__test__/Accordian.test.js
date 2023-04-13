/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Accordian from "../Accordian.js";
import "@testing-library/jest-dom";
const list = [
  {
    title: "Title 1",
    data: "Data 1",
  },
  {
    title: "Title 2",
    data: "Data 2",
  },
];

describe("Accordian", () => {
  it("should render the title and data of the first item in the list by default", () => {
    render(<Accordian list={list} />);
    const elem = screen.getAllByTestId("test-title");
    expect(elem[0]).toHaveTextContent("Title 1");
  });

  it("should toggle between the items when the title is clicked", () => {
    render(<Accordian list={list} />);
    const title1 = screen.getAllByTestId("test-title");

    fireEvent.click(title1[0]);
    expect(title1[0]).toBeInTheDocument();

    fireEvent.click(title1[0]);
    expect(title1[0]).toHaveTextContent("Title 1");

    fireEvent.click(title1[0]);
    expect(title1[0]).not.toHaveClass("icon_rotate");
  });
});
