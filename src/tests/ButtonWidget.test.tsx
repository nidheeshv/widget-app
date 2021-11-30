import React from "react";
import { render, screen } from "@testing-library/react";
import ButtonWidget from "../components/ButtonWidget";
import GlobalStateContextProvider from "../context/GlobalStateContext";

test("renders widget app", () => {
  render(
    <GlobalStateContextProvider>
      <ButtonWidget />
    </GlobalStateContextProvider>
  );
  const element = screen.getByText("Increment +1");
  expect(element).toBeInTheDocument();
});
