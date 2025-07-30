import React, { useState } from "react";

const UseStateHook = () => {
  const [count, setCount] = useState(0);
  const code = `const [count, setCount] = useState(0);
	return (
    <>
	<div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
			</>
	`;

  return (
    <>
      <div style={{ textAlign: "left", paddingLeft: "40px" }}>
        <h2>useState hook</h2>
        <p>State is local data maintained within a component.</p>
        <p>It determines how a component behaves and renders.</p>
        <p>Updating State Re-renders the Component.</p>
      </div>
      <h2>useState hook example:</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
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
    </>
  );
};

export default UseStateHook;
