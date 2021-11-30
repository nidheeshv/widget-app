import React from "react";
import WidgetBox from "./WidgetBox";
import { GlobalStateContext } from "../context/GlobalStateContext";
const WidgetView = () => {
  const {
    globalState: { widgets },
  } = React.useContext(GlobalStateContext);
  return widgets.map((widget: any, index: number) => {
    return <WidgetBox key={index} index={index} widget={widget} />;
  });
};

export default WidgetView;
