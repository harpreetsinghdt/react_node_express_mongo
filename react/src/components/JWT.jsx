import React, { useContext, useState } from "react";
const UserContext = React.createContext();
import "../App.css";

const Jwt = () => {
  const [user, setUser] = useState({ name: "Harpreet" });
  const code = `const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !(await user.comparePassword(password))) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
    expiresIn: '1d'
  });

  res.cookie('token', token, { httpOnly: true }).json({ message: 'Logged in successfully' });
};

JWT Payload includes user ID and role.

Token is stored in a httpOnly cookie for security.
`;
  return (
    <>
      <div style={{ textAlign: "left", paddingLeft: "40px" }}>
        <h2 className="text-lg">JWT Authentication Workflow</h2>
        <p>User submits email & password via login form. </p>
        <p>Backend verifies credentials and returns a signed JWT. </p>
        <p>
          Frontend stores JWT (usually in HTTP-only cookie or localStorage).{" "}
        </p>
        <p>
          For protected routes, client sends JWT to backend in Authorization
          header (Bearer token).{" "}
        </p>
        <p>
          Backend verifies JWT and grants/denies access based on user
          identity/role.
        </p>
      </div>
      <h2>jwt example:</h2>
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

export default Jwt;
