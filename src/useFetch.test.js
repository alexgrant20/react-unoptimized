import { renderHook } from "@testing-library/react";
import { useFetch } from "./useFetch";
import jestFetch from "jest-fetch-mock";

// jestFetch.enableMocks();

describe("useFetch hook", () => {
  it("should emit request to book.json when initialized", async () => {
    const mockData = [{}, {}];
    jestFetch.mockResponseOnce(JSON.stringify(mockData));
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch("book.json")
    );

    expect(result.current[0]).toBe(true);
    await waitForNextUpdate();
    //jestFetch.
    expect(jestFetch).toHaveBeenCalledWith("books.json");
    // Wait for the request to resolve

    expect(result.isLoading).toBe(false);
  });
});
