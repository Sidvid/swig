/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, waitFor } from "@testing-library/react";

import PrivateRoute from "../PrivateRoute";
import { useStore } from "../../utils/hooks/Store";
import useHttp from "../../utils/hooks/useHttp";
import "@testing-library/jest-dom";
jest.mock("../../utils/hooks/Store.js");
jest.mock("../../utils/hooks/useHttp.js");

describe("PrivateRoute", () => {
  const mockChild = <div>Test Child</div>;

  beforeEach(() => {
    useStore.mockReturnValue({
      store: {},
      setStore: jest.fn(),
    });

    useHttp.mockReturnValue({
      isLoading: false,
      error: null,
      data: {
        data: {
          cards: [
            {
              cardType: "seeAllRestaurants",
              data: {
                data: {
                  cards: [{ name: "Restaurant 1" }, { name: "Restaurant 2" }],
                },
              },
            },
          ],
        },
      },
    });
  });

  it("should set restrauntData and name in store on successful API call", async () => {
    render(<PrivateRoute>{mockChild}</PrivateRoute>);
    await waitFor(() => expect(useHttp).toHaveBeenCalled());

    expect(useStore().setStore).toHaveBeenCalledWith({
      restrauntData: [{ name: "Restaurant 1" }, { name: "Restaurant 2" }],
      name: "siddhartha",
    });
  });

  it("should render the child component when there is no error and data is not loading", async () => {
    const { getByText } = render(<PrivateRoute>{mockChild}</PrivateRoute>);
    await waitFor(() => expect(useHttp).toHaveBeenCalled());

    expect(getByText("Test Child")).toBeInTheDocument();
  });

  it("should render the Loader component when data is loading", () => {
    useHttp.mockReturnValue({
      isLoading: true,
      error: null,
      data: null,
    });

    const { getByText } = render(<PrivateRoute>{mockChild}</PrivateRoute>);
    expect(getByText("loading please wait!!")).toBeInTheDocument();
  });

  it("should render the Error component when there is an error", async () => {
    useHttp.mockReturnValue({
      isLoading: false,
      error: "Something went wrong",
      data: null,
    });

    const { getByText } = render(<PrivateRoute>{mockChild}</PrivateRoute>);
    await waitFor(() =>
      expect(getByText("Unexpected Error occur!!")).toBeInTheDocument()
    );
  });
});
