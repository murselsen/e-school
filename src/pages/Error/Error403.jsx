import React from "react";

const Error403 = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      background: "#f8f8f8",
    }}
  >
    <h1 style={{ fontSize: "5rem", color: "black" }}>403</h1>
    <h2 style={{ color: "#333" }}>Access Blocked</h2>
    <br />
    <p style={{ color: "#666", maxWidth: 400, textAlign: "center" }}>
      You are not authorised to access this page. Please login as an authorised
      user or return to the home page.
    </p>
    <a
      href="/"
      style={{
        marginTop: 24,
        padding: "10px 24px",
        background: "purple",
        color: "#fff",
        borderRadius: 4,
        textDecoration: "none",
      }}
    >
      Go to Homepage
    </a>
  </div>
);

export default Error403;
