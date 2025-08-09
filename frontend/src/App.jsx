import React from "react";
import { useEffect, useState } from "react";
import sapLogo from "./assets/sap-logo.png";
// eslint-disable-next-line no-unused-vars
import AnalogClock from "./AnalogClock";

function App() {
  const [currentTime, setCurrentTime] = useState("");
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();

      // Time in HH:MM:SS + Timezone
      const formattedTime = now.toLocaleTimeString("en-DE", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZone: "Europe/Berlin",
        hour12: false,
      });

      const tz = Intl.DateTimeFormat("en-DE", {
        timeZone: "Europe/Berlin",
        timeZoneName: "short",
      })
        .formatToParts(now)
        .find((p) => p.type === "timeZoneName").value;

      // Date in DD Month YYYY
      const formattedDate = now.toLocaleDateString("en-DE", {
        weekday: "long",
        day: "2-digit",
        month: "long",
        year: "numeric",
        timeZone: "Europe/Berlin",
      });

      setCurrentTime(`${formattedTime} ${tz}`);
      setCurrentDate(formattedDate);
    };

    updateDateTime(); // initial call
    const id = setInterval(updateDateTime, 1000);

    return () => clearInterval(id);
  }, []);

  const sapBlue = "#0A6ED1";
  const sapLightBlue = "#EBF5FF";

  return (
    <div
      style={{
        backgroundColor: sapLightBlue,
        color: sapBlue,
        minHeight: "100vh",
        width: "100vw",
        margin: 0,
        padding: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "16px",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
      }}
    >
      { /*<img src={sapLogo} alt="SAP Logo" style={{ height: "140px" }} /> */ }

      <h1 style={{ fontSize: "2.4rem", margin: 0 }}>
        Hello from Anirudh’s Full Stack Cloud Developer Interview 🚀
      </h1>
      <h2 style={{ fontWeight: "normal", margin: 0 }}>
        Building with React, Node.js, and CI/CD
      </h2>

      <AnalogClock
        size={220}
        faceColor="#FFFFFF"
        accent={sapBlue}
        handColor={sapBlue}
      />

      {/* Digital Clock */}
      <div
        style={{
          fontSize: "1.1rem",
          padding: "0.6rem 1.2rem",
          borderRadius: "10px",
          backgroundColor: sapBlue,
          color: "white",
          fontWeight: "bold",
        }}
      >
        {currentTime}
      </div>

      {/* Date */}
      <div
        style={{
          fontSize: "1rem",
          padding: "0.4rem 1rem",
          borderRadius: "8px",
          backgroundColor: "white",
          color: sapBlue,
          fontWeight: "bold",
        }}
      >
        {currentDate}
      </div>
    </div>
  );
}

export default App;
