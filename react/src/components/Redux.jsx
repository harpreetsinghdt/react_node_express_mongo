import React from "react";

const Redux = () => {
  const code = `// Action
const increment = () => ({ type: 'INCREMENT' });

// Reducer
function counterReducer(state = { count: 0 }, action) {
  switch (action.type) {
    case 'INCREMENT': return { count: state.count + 1 };
    default: return state;
  }
}

// Store Setup (using Redux Toolkit)
import { configureStore } from '@reduxjs/toolkit';
const store = configureStore({ reducer: counterReducer });
`;
  return (
    <div>
      <div style={{ textAlign: "left", paddingLeft: "40px" }}>
        <h2>Redux Core Concepts</h2>
        <p>
          Redux is an external library to manage global state in a predictable
          way.{" "}
        </p>
        <p>Uses a single source of truth (Store). </p>
        <p>Works based on Actions → Reducers → Store → React Component. </p>
        <p>
          {" "}
          Ideal for large apps with complex state flows (nested updates, API
          caching, etc).
        </p>
        <div style={{ textAlign: "left", paddingLeft: "20px" }}>
          <p>
            <b>Store:</b> Centralized state tree for the whole app{" "}
          </p>
          <p>
            <b>Actions:</b> Plain JS objects describing what happened{" "}
          </p>
          <p>
            <b>Reducers:</b> Pure functions that specify how state changes based
            on actions
          </p>
          <p>
            <b>Dispatch:</b> Method to send actions to reducers
          </p>
          <p>
            <b>Selectors:</b> Functions to read data from the store
          </p>
        </div>
      </div>
      <pre
        className="codepre"
        style={{
          background: "#f5f5f5",
          paddingTop: "20px",
          paddingLeft: "40px",
          borderRadius: "8px",
          overflowX: "auto",
          textAlign: "left",
        }}
      >
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default Redux;
