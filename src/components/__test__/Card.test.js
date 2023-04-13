/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Card from "../Card.js";
import "@testing-library/jest-dom";

const mockData = {
  id: "1",
  data: {
    name: "Restaurant Name",
    avgRating: "4.5",
    sla: {
      deliveryTime: 30,
    },
    costForTwoString: "Rs. 500",
    cloudinaryImageId: "1234567890",
  },
};

describe("Card", () => {
  it("should render the restaurant name, image, rating, delivery time, and cost", () => {
    render(<Card data={mockData} />);
    expect(screen.getByText("Restaurant Name")).toBeInTheDocument();
    expect(screen.getByAltText("")).toBeInTheDocument();

    expect(screen.getByText("30 MINS")).toBeInTheDocument();
    expect(screen.getByText("Rs. 500")).toBeInTheDocument();
  });

  it("should call onCardClick when the card is clicked", () => {
    const mockOnClick = jest.fn();
    render(<Card data={mockData} onCardClick={mockOnClick} />);
    const card = screen.getByTestId("cards_test");
    fireEvent.click(card);
    expect(mockOnClick).toHaveBeenCalledWith(mockData);
  });
});
