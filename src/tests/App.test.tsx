import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";
import GlobalStateContextProvider from "../context/GlobalStateContext";

test("renders widget app", () => {
  render(
    <GlobalStateContextProvider>
      <App />
    </GlobalStateContextProvider>
  );
  const linkElement = screen.getByText(/Widget app/i);
  expect(linkElement).toBeInTheDocument();
});
