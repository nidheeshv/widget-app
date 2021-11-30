import React from "react";
import InputWidget from "./InputWidget";
import ButtonWidget from "./ButtonWidget";
import { GlobalStateContext } from "../context/GlobalStateContext";

const WidgetBox = (props: any) => {
  const { removeWidget } = React.useContext(GlobalStateContext);
  const { widget, index } = props;
  const getWidget = (type: string) => {
    if (type === "inputbox") return <InputWidget widget={widget} />;
    else return <ButtonWidget widget={widget} />;
  };

  return (
    <div className="w-full max-w-xs">
      <div className="bg-white shadow-md rounded px-8 pt-2 pb-2 mb-4 relative">
        <div className="absolute top-2 right-2 h-5 w-5  text-black p-1 text-lg flex items-center justify-center rounded-md cursor-pointer">
          <button
            type="button"
            className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            onClick={() => removeWidget(index)}
          >
            <span className="sr-only">Close menu</span>
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="md:flex md:items-center mb-1">
          <div className="md:w-1/3">Name</div>
          <div className="md:w-w/3">{widget.name}</div>
        </div>
        <div className="md:flex md:items-center mb-1">
          <div className="md:w-1/3">Value</div>
          <div className="md:w-w/3">{widget.value}</div>
        </div>
        <div className="md:flex md:items-center mb-1">
          <div className="md:w-1/3">Type</div>
          <div className="md:w-w/3">{widget.type}</div>
        </div>
        {getWidget(widget.type)}
      </div>
    </div>
  );
};

export default WidgetBox;
