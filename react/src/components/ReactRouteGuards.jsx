import React from "react";

const ReactRouteGuards = () => {
  const code = `import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ isAuthenticated, children }) => {
  return isAuthenticated ? children : <Navigate to="/login" />;
};

// Usage in Routes
<Route path="/dashboard" element={<ProtectedRoute isAuthenticated={auth}>{<Dashboard />}</ProtectedRoute>} />
`;
  return (
    <>
      <div style={{ textAlign: "left", paddingLeft: "40px" }}>
        <h2>React Route Guards</h2>
        <p>
          React checks if user is authenticated before rendering protected
          pages.
        </p>
      </div>
      <h2>Protecting Frontend Routes (React Route Guards)</h2>
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

export default ReactRouteGuards;
