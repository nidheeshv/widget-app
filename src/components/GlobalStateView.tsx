import React from "react";
import { GlobalStateContext } from "../context/GlobalStateContext";
const GlobalStateView = (props: any) => {
  const { globalState } = React.useContext(GlobalStateContext);
  return <pre>{JSON.stringify(globalState, null, 2)}</pre>;
};

export default GlobalStateView;
