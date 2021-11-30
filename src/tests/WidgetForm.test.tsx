import React from "react";
import { render, screen } from "@testing-library/react";
import WidgetForm from "../components/WidgetForm";
import GlobalStateContextProvider from "../context/GlobalStateContext";

test("renders WidgetForm", () => {
  render(
    <GlobalStateContextProvider>
      <WidgetForm />
    </GlobalStateContextProvider>
  );
  const element = screen.getByText("Create Buttons");
  expect(element).toBeInTheDocument();
});
