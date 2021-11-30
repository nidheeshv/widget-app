import React from "react";
import { GlobalStateContext } from "../context/GlobalStateContext";

const ButtonWidget = (props: any) => {
  const { widget } = props;
  const {
    globalState: { values },
    updateValues,
  } = React.useContext(GlobalStateContext);
  const update = (operation: string) => {
    let newVal = values[widget.value].toString() || 0;
    // console.log(newVal, "newcv", operation);
    try {
      if (operation === "plus") {
        newVal = parseInt(newVal) + 1;
      } else {
        newVal = parseInt(newVal) - 1;
      }
    } catch {
      console.log("Not a number");
    } finally {
      return updateValues(widget.value, newVal);
    }
  };
  return (
    <div>
      <button
        onClick={() => update("plus")}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 m-1 mx-1 rounded"
      >
        Increment +1
      </button>
      <button
        onClick={() => update("minus")}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 m-1 mx-1  rounded"
      >
        Decrement -1
      </button>
    </div>
  );
};

export default ButtonWidget;
