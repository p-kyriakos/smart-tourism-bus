import { useState } from "react";
import BackButton from "./BackButton";

export default function GpsNavigator() {
  const [destination, setDestination] = useState("Μουσείο Ακρόπολης");

  return (
    <div style={{ padding: "30px", minHeight: "100vh", background: "#f3f4f6" }}>
      <BackButton />
      <h2 style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "20px" }}>
        🧭 GPS Πλοήγηση
      </h2>

      <input
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        placeholder="Πληκτρολογήστε προορισμό"
        style={{
          width: "100%",
          padding: "12px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          marginBottom: "16px",
          fontSize: "16px",
        }}
      />

      <div
        style={{
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
        }}
      >
        <iframe
          title="gps-map"
          width="100%"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          src={`https://www.google.com/maps?q=${encodeURIComponent(destination)}&output=embed`}
        />
      </div>
    </div>
  );
}
