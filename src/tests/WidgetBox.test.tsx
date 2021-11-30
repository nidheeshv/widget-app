import React from "react";
import { render, screen } from "@testing-library/react";
import WidgetBox from "../components/WidgetBox";
import GlobalStateContextProvider from "../context/GlobalStateContext";

test("renders InputWidget", () => {
  render(
    <GlobalStateContextProvider>
      <WidgetBox widget={{ value: "1", name: "test", type: "inputbox" }} />
    </GlobalStateContextProvider>
  );
  const element = screen.getByText("Name");
  expect(element).toBeInTheDocument();
});
