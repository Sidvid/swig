/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, waitFor, renderHook } from "@testing-library/react";
import useHttp from "../useHttp.js";

describe("useHttp hook", () => {
  it("should fetch data successfully", async () => {
    const data = { name: "John Doe", age: 30 };
    jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(data),
        status: 200,
      })
    );
    const { result, waitForNextUpdate } = renderHook(() =>
      useHttp(
        "/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
      )
    );

    expect(result.current.isLoading).toBeTruthy();
    await waitFor(() => expect(result.current.isLoading).toBeFalsy());
    expect(result.current.error).toBeFalsy();
    expect(result.current.data).toEqual(data);
  });

  it("should handle errors correctly", async () => {
    const error = { message: "Failed to fetch data" };
    jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(error),
        status: 404,
      })
    );
    const { result, waitForNextUpdate } = renderHook(() =>
      useHttp(
        "/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
      )
    );

    expect(result.current.isLoading).toBeTruthy();
    await waitFor(() => expect(result.current.isLoading).toBeFalsy());
    expect(result.current.error).toEqual(error);
    expect(result.current.data).toBeFalsy();
  });
});
