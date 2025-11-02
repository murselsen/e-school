import React from "react";

const Error404 = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      background: "#f8f8f8",
      color: "#333",
    }}
  >
    <h1 style={{ fontSize: "6rem", margin: 0 }}>404</h1>
    <br />

    <h2>Page Not Found</h2>
    <br />
    <p>The page you are looking for does not exist or may have been moved.</p>
    <a
      href="/"
      style={{
        marginTop: "2rem",
        padding: "0.75rem 2rem",
        background: "purple",
        color: "#fff",
        borderRadius: "4px",
        textDecoration: "none",
      }}
    >
      Go to Homepage
    </a>
  </div>
);

export default Error404;
