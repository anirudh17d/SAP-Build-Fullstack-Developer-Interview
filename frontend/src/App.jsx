import { useEffect, useState } from "react";
import sapLogo from "./assets/sap-logo.png";

function App() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setSeconds((prev) => prev + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  const sapBlue = "#0A6ED1";
  const sapLightBlue = "#EBF5FF";

  return (
    <div
      style={{
        backgroundColor: sapLightBlue,
        color: sapBlue,
        width: "100vh",
        minHeight: "100vh",
        width: "100vw", // full width
        margin: 0, // no extra margin
        padding: 0, // no extra padding
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
      }}
    >
      <img
        src={sapLogo}
        alt="SAP Logo"
        style={{ height: "120px", marginBottom: "1rem" }}
      />

      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
        Hello from Anirudh’s Full Stack Cloud Developer for SAP Build Interview 🚀
      </h1>
      <h2 style={{ fontWeight: "normal", marginBottom: "2rem" }}>
        Building with React, Node.js, and CI/CD
      </h2>
      <div
        style={{
          fontSize: "1.25rem",
          padding: "0.75rem 1.5rem",
          borderRadius: "8px",
          backgroundColor: sapBlue,
          color: "white",
          fontWeight: "bold",
        }}
      >
        Live Timer: {seconds} seconds
      </div>
    </div>
  );
}

export default App;
