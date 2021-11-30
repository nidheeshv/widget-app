import React from "react";
import { GlobalStateContext } from "../context/GlobalStateContext";
const InputWidget = (props: any) => {
  const { widget } = props;
  const {
    globalState: { values },
    updateValues,
  } = React.useContext(GlobalStateContext);
  return (
    <input
      type="text"
      className="appearance-none block w-full md:w-full text-gray-700 border border-gray-300 rounded py-2 px-4 m-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      value={values[widget.value]}
      // onBlur={(e) => updateValues(widget.value, e.target.value)}
      onChange={(e) => updateValues(widget.value, e.target.value)}
    />
  );
};

export default InputWidget;
