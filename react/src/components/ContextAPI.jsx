import React, { useContext, useState } from "react";
const UserContext = React.createContext();

const ContextAPI = () => {
  const [user, setUser] = useState({ name: "Harpreet" });
  const code = `const UserContext = React.createContext();

function App() {
  const [user, setUser] = useState({ name: 'Harpreet' });
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Dashboard />
    </UserContext.Provider>
  );
}

function Dashboard() {
  const { user } = useContext(UserContext);
  return <h1>Welcome, {user.name}</h1>;
}
`;
  return (
    <>
      <div style={{ textAlign: "left", paddingLeft: "40px" }}>
        <h2>Context api createContext, useContext hook</h2>
        <p>
          Built-in way to pass data deeply into components without prop
          drilling.
        </p>
        <p>
          Suitable for themes, user authentication, locale, app-wide settings.
        </p>
        <p>Combine Context + useReducer for complex state logic.</p>
      </div>
      <h2>useState hook example:</h2>
      <UserContext.Provider value={{ user, setUser }}>
        <Dashboard />
      </UserContext.Provider>
      <pre
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

function Dashboard() {
  const { user } = useContext(UserContext);
  return <h1>Welcome, {user.name}</h1>;
}

export default ContextAPI;
