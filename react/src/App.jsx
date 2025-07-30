import { BrowserRouter, Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Props from "./components/Props";
import UseStateHook from "./components/UseStateHook";
import LiftingStateUp from "./components/LiftingStateUp";
import UseEffectHook from "./components/UseEffectHook";
import ContextAPI from "./components/ContextAPI";
import Redux from "./components/Redux";
import ReduxToolkitQuery from "./components/ReduxToolkitQuery";
import Jwt from "./components/JWT";
import MiddlewareGuards from "./components/MiddlewareGuards";
import ReactRouteGuards from "./components/ReactRouteGuards";
import RoleGuard from "./components/RoleGuard";
import { useEffect, useState } from "react";

function App() {
  const [activeTab, setActiveTab] = useState(1);
  const [tabData, setTabData] = useState(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const BACKEND_URL = import.meta.env.VITE_API_BACKEND_URL;

  // Mock API URLs for each tab
  const tabApis = {
    1: BACKEND_URL + "/concepts",
    2: BACKEND_URL + "/users",
    3: BACKEND_URL + "/products",
    4: BACKEND_URL + "/orders",
    5: BACKEND_URL + "/posts",
  };

  const tabs = [
    {
      id: 1,
      label: "Concepts",
      content: (
        <div className="space-y-6">
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
          <div className="wrapper">
            <ContextAPI />
          </div>
          <div className="wrapper">
            <Redux />
          </div>
          <div className="wrapper">
            <ReduxToolkitQuery />
          </div>
          <div className="wrapper">
            <Jwt />
          </div>
          <div className="wrapper">
            <MiddlewareGuards />
          </div>
          <div className="wrapper">
            <ReactRouteGuards />
          </div>
          <div className="wrapper">
            <RoleGuard />
          </div>
        </div>
      ),
    },
    { id: 2, label: "Users", content: "Content for Tab 2" },
    { id: 3, label: "Products", content: "Content for Tab 3" },
    { id: 4, label: "Orders", content: "Content for Tab 3" },
    { id: 5, label: "Posts", content: "Content for Tab 3" },
  ];

  const handleTabClick = async (tabId) => {
    setActiveTab(tabId);
    setLoading(true);
    setError(null);
    try {
      // Replace with your actual API call
      if (tabId != 1) {
        const response = await fetch(tabApis[tabId]);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setTabData(data);
      } else {
      }
    } catch (err) {
      setError(err.message);
      console.error("Error fetching data:", err);
    } finally {
      setLoading(false);
    }
  };

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
      <h1 className="text-3xl font-bold underline">Vite + React</h1>

      <div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <p>Below tabs are built using tailwind css for vite</p>
      </div>

      <div className="max-w-md mx-auto p-4">
        {/* Tab Buttons */}
        <div className="flex border-b">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`py-2 px-4 font-medium text-sm ${
                activeTab === tab.id
                  ? "border-b-2 border-blue-500 text-blue-600"
                  : "text-gray-500 hover:text-blue-600"
              }`}
              disabled={loading}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="py-4 min-h-[600px] max-w-[600px]">
          {loading ? (
            <div className="flex justify-center items-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
            </div>
          ) : error ? (
            <div className="text-red-500 p-4 bg-red-50 rounded">{error}</div>
          ) : tabData && activeTab != 1 ? (
            <div>
              <h3 className="text-lg font-semibold mb-2">API Data:</h3>
              <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
                {JSON.stringify(tabData, null, 2)}
              </pre>
            </div>
          ) : (
            <div className="text-gray-500">{tabs[0].content}</div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
