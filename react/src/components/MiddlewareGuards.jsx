import React from "react";

const MiddlewareGuards = () => {
  const code = `const authMiddleware = (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Unauthorized' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Invalid Token' });
  }
};

// Usage:
app.get('/api/private', authMiddleware, (req, res) => {
  res.send('This is a protected route');
});

Middleware checks token and sets req.user for downstream usage.
`;
  return (
    <>
      <div style={{ textAlign: "left", paddingLeft: "40px" }}>
        <h2>Middleware Guards</h2>
        <p>Middleware checks token and sets req.user for downstream usage.</p>
      </div>
      <h2>Protected Routes in Backend (Middleware Guards)</h2>
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

export default MiddlewareGuards;
