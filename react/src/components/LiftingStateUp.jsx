import React, { useState } from "react";

function ChildInput({ value, setValue }) {
  return <input value={value} onChange={(e) => setValue(e.target.value)} />;
}

function ChildDisplay({ value }) {
  return <p>Current Value: {value}</p>;
}

const LiftingStateUp = () => {
  const [value, setValue] = useState("");

  const code = `
  function ChildInput({ value, setValue }) {
  return <input value={value} onChange={(e) => setValue(e.target.value)} />;
}

function ChildDisplay({ value }) {
  return <p>Current Value: {value}</p>;
}
  return (
    <>
    <ChildInput value={value} setValue={setValue} />
      <ChildDisplay value={value} />
    </>
  `;

  return (
    <>
      <div style={{ textAlign: "left", paddingLeft: "40px" }}>
        <h2>Lifting State Up</h2>
        <p>
          What? Moving the shared state to the closest common ancestor
          component.
        </p>
        <p>
          Why? To enable sibling components to access & update the same state.
        </p>
      </div>
      <h2>Lifting state up example:</h2>
      <ChildInput value={value} setValue={setValue} />
      <ChildDisplay value={value} />
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

export default LiftingStateUp;
