import { BrowserRouter, Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Props from "./components/Props";
import UseStateHook from "./components/UseStateHook";
import LiftingStateUp from "./components/LiftingStateUp";
import UseEffectHook from "./components/UseEffectHook";

function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <div className="wrapper">
        <Props name="Welcome to react" />
      </div>
      <div className="wrapper">
        <UseStateHook />
      </div>
      <div className="wrapper">
        <LiftingStateUp />
      </div>
      <div className="wrapper">
        <UseEffectHook />
      </div>
    </>
  );
}

export default App;
