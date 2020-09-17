import React, { useState, useReducer } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBarApp from "./components/ui-components/header/";
import AppRouter from "./components/containers/appRouter";
import { BrowserRouter as Router } from "react-router-dom";
import mealsReducer, { initialState } from "store/reducer";

export const MealsContext: any = React.createContext(null);
export const ConfigurationContext: any = React.createContext(null);

function App() {
  const [state, dispatch] = useReducer(mealsReducer, initialState);

  //   const [globalState, setGlobalState] = useState(initialState);
  const initialConfigurationState = { starsColor: "red" };
  const [getConfig, setConfig] = useState(initialConfigurationState);

  return (
    <Router>
      <ConfigurationContext.Provider value={[getConfig, setConfig]}>
        <MealsContext.Provider value={[state, dispatch]}>
          <div className="container">
            <NavBarApp />
            <AppRouter />
          </div>
        </MealsContext.Provider>
      </ConfigurationContext.Provider>
    </Router>
  );
}

export default App;
