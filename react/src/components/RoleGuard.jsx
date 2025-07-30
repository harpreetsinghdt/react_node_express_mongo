import React from "react";

const RoleGuard = () => {
  const code = `const roleGuard = (role) => (req, res, next) => {
  if (req.user.role !== role) {
    return res.status(403).json({ message: 'Forbidden' });
  }
  next();
};

// Usage:
app.get('/api/admin', authMiddleware, roleGuard('admin'), (req, res) => {
  res.send('Welcome Admin');
});
`;
  return (
    <>
      <div style={{ textAlign: "left", paddingLeft: "40px" }}>
        <h2>Role based Guards</h2>
        <p>Middleware checks token and sets req.user for downstream usage.</p>
      </div>
      <h2>Role-Based Authorization Example (Admin/User)</h2>
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

export default RoleGuard;
