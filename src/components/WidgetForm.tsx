import React, { useState } from "react";
import { GlobalStateContext } from "../context/GlobalStateContext";
function WidgetForm() {
  const { addWidget } = React.useContext(GlobalStateContext);
  //default value
  const initWdState = {
    name: "widget1",
    value: "value1",
    type: "",
  };
  const [widgetData, setWidgetData] = useState(initWdState);
  const wdChangeHandler = (e: any) => {
    setWidgetData({ ...widgetData, [e.target.name]: e.target.value });
  };
  const addNewWidget = (wdType: string) => {
    const wd = { ...widgetData, type: wdType };
    setWidgetData(wd);
    addWidget(wd);
  };
  return (
    <div className="m-4 p-2">
      <div className="text-base font-medium text-gray-900">Add Widget</div>
      <div className="flex flex-wrap -mx-3 mb-2">
        <input
          className="appearance-none block w-full md:w-1/5 text-gray-700 border border-gray-300 rounded py-2 px-4 m-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          name="name"
          type="text"
          value={widgetData.name}
          onChange={wdChangeHandler}
        />
        <input
          className="appearance-none block w-1/5 text-gray-700 border border-gray-300 rounded py-2 px-4 m-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          name="value"
          type="text"
          value={widgetData.value}
          onChange={wdChangeHandler}
        />

        <button
          className=" block justify-center w-1/5 py-2 px-4 m-2 border border-transparent shadow-sm text-lg font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={() => addNewWidget("inputbox")}
        >
          Create Inputbox
        </button>
        <button
          className=" block justify-center w-1/5 py-2 px-4 m-2 border border-transparent shadow-sm text-lg font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={() => addNewWidget("buttons")}
        >
          Create Buttons
        </button>
      </div>
    </div>
  );
}

export default WidgetForm;
