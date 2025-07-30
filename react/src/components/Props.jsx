import React from "react";

const Props = (props) => {
  const code = `function Welcome(props) {
		return <h1>Hello, {props.name}</h1>;
	}

	<Welcome name="Welcome to react" />
`;
  return (
    <>
      <div style={{ textAlign: "left", paddingLeft: "40px" }}>
        <h2 className="text-lg">props</h2>
        <p>Props are read-only attributes passed from parent to child</p>
        <p>
          components. They create a unidirectional data flow (Parent → Child).
        </p>
      </div>
      <h2>props example:</h2>
      <h3>Hello, {props.name}</h3>
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

export default Props;
