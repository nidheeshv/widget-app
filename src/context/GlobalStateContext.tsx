import React, { createContext, useState } from "react";
import { globalStateI, widgetI } from "../helpers/models";

export const GlobalStateContext = createContext<any>([{}, () => undefined]);

const GlobalStateContextProvider: React.FC = (props) => {
  const initGlobalState = {
    values: {},
    widgets: [],
  };
  const [globalState, setGlobalState] = useState<globalStateI>(initGlobalState);
  //add new
  const addWidget = (widgetData: widgetI) => {
    const gstate = {
      values: { [widgetData.value]: "", ...globalState.values },
      widgets: [...globalState.widgets, widgetData],
    };
    setGlobalState(gstate);
  };
  //update
  const updateValues = (valueName: string, value: string) => {
    const gstate = {
      ...globalState,
      values: { ...globalState.values, [valueName]: value },
    };
    setGlobalState(gstate);
  };
  //remove
  const removeWidget = (index: number) => {
    const widgets = globalState.widgets
      .slice(0, index)
      .concat(globalState.widgets.slice(index + 1));
    console.log("index", index, widgets);
    const gstate = {
      ...globalState,
      widgets,
    };
    setGlobalState(gstate);
  };
  return (
    <GlobalStateContext.Provider
      value={{
        globalState,
        setGlobalState,
        addWidget,
        updateValues,
        removeWidget,
      }}
    >
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalStateContextProvider;
