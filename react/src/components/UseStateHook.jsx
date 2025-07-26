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
      <div>
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
        style={{
          background: "#f5f5f5",
          padding: "16px",
          borderRadius: "8px",
          overflowX: "auto",
        }}
      >
        <code>{code}</code>
      </pre>
    </>
  );
};

export default UseStateHook;
