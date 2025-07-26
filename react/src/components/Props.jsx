import React from "react";

const Props = (props) => {
  const code = `function Welcome(props) {
		return <h1>Hello, {props.name}</h1>;
	}

	<Welcome name="Welcome to react" />
`;
  return (
    <>
      <div>
        <h2>props</h2>
        <p>Props are read-only attributes passed from parent to child</p>
        <p>
          components. They create a unidirectional data flow (Parent → Child).
        </p>
      </div>
      <h2>props example:</h2>
      <h3>Hello, {props.name}</h3>
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

export default Props;
