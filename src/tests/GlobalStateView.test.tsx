import React from "react";
import { render, screen } from "@testing-library/react";
import GlobalStateView from "../components/GlobalStateView";
import GlobalStateContextProvider from "../context/GlobalStateContext";

test("renders widget app", () => {
  render(
    <GlobalStateContextProvider>
      <GlobalStateView />
    </GlobalStateContextProvider>
  );
  const element = screen.getByText(/"values"/i);
  expect(element).toBeInTheDocument();
});
