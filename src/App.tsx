import React from "react";
import WidgetForm from "./components/WidgetForm";
import WidgetView from "./components/WidgetView";
import GlobalStateView from "./components/GlobalStateView";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <h1>widget app</h1>
      <div className="flex justify-around max-h-96">
        <div className="column bg-gray-50">
          <GlobalStateView />
        </div>
        <div className="column">
          <WidgetView />
        </div>
      </div>
      <WidgetForm />
    </div>
  );
};

export default App;
