import { useEffect, useState } from "react";

const UseEffectHook = () => {
  const [count, setCount] = useState(0);
  const code = `const [count, setCount] = useState(0);
	useEffect(() => {
    console.log("Component Mounted");
    const interval = setInterval(() => setCount((prev) => prev + 1), 1000);

    return () => {
      clearInterval(interval);
      console.log("Component Unmounted");
    };
  }, []);

  return <div>Count: {count}</div>;
	`;

  useEffect(() => {
    console.log("Component Mounted");
    const interval = setInterval(() => setCount((prev) => prev + 1), 1000);

    return () => {
      clearInterval(interval);
      console.log("Component Unmounted");
    };
  }, []);

  return (
    <>
      <div>
        <h2>useEffect Hook</h2>
        <p>
          useEffect() Hook is the alternative to Class Lifecycle methods in
          Functional Components.
        </p>
        <p>
          You can use multiple useEffect hooks in the same component for
          different concerns.
        </p>
        <p>Avoid putting all logic into one useEffect.</p>
        <p>Cleanup side-effects (listeners, timers) in cleanup function. </p>
        <p>Use dependency array to control when effect runs. </p>
        <p>
          Watch out for infinite loops if dependencies aren't properly handled.
        </p>
      </div>
      <h2>useEffect example:</h2>
      <div>Count: {count}</div>
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

export default UseEffectHook;
