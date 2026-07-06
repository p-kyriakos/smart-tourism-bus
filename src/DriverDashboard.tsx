import { useEffect, useState } from "react";
import "./driver.css";
import BackButton from "./BackButton";

export default function DriverDashboard() {
  const [speed, setSpeed] = useState(45);
  const [fatigue, setFatigue] = useState(30);
  const [notifications, setNotifications] = useState<string[]>([]);
  const [doors, setDoors] = useState<"Ανοιχτές" | "Κλειστές">("Κλειστές");
  const [leaving, setLeaving] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSpeed(Math.floor(Math.random() * (49 - 43 + 1)) + 43);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFatigue((prev) => (prev < 100 ? prev + 1 : prev));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const speedTest = () => {
    const newSpeed = speed + 15;
    setSpeed(newSpeed);
    setNotifications((prev) => [`⚠️ Υπέρβαση ταχύτητας: ${newSpeed} km/h`, ...prev]);

    setTimeout(() => {
      setSpeed(Math.floor(Math.random() * (49 - 43 + 1)) + 43);
    }, 10000);
  };

  const laneWarning = () => {
    setNotifications((prev) => ["🚧 Παρέκκλιση από λωρίδα", ...prev]);
  };

  const coffeeBreak = () => {
    setFatigue(20);
  };

  const exitTest = () => {
    setDoors("Ανοιχτές");
    setLeaving(4);
  };

  const closeDoors = () => {
    setDoors("Κλειστές");
    setLeaving(0);
  };

  return (
    <>
      <header className="driver-header">
        <BackButton />
        <div className="driver-header-left">
          <div className="bus-icon">🚌</div>
          <div>
            <h1>Έξυπνο Τουριστικό Λεωφορείο</h1>
            <span>Ρόλος: Οδηγός</span>
          </div>
        </div>
      </header>

      <div className="driver-page">
        <div className="dashboard-grid">
          <div className="left-column">
            <div className="card speed-card">
              <h3>🚦 Ταχύτητα</h3>
              <div className="speed">{speed}</div>
              <span>km/h</span>
              <div className="limit">Όριο ταχύτητας: 50 km/h</div>
            </div>

            <div className="card fatigue-card">
              <h3>😴 Επίπεδο Κούρασης</h3>
              <div className="progress">
                <div className="progress-fill" style={{ width: `${fatigue}%` }} />
              </div>
              <span>{fatigue}%</span>
              <button className="yellow-btnn" onClick={coffeeBreak}>
                Διάλειμμα Καφέ
              </button>
            </div>

            <div
              className="card passengers-card"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: "10px",
              }}
            >
              <h3>👥 Επιβάτες</h3>
              <p>Κατεβαίνουν: {leaving}</p>
              <p>Πόρτες: {doors}</p>

              <button className="btn-exit" onClick={exitTest}>
                🚪 Δοκιμή Αποβίβασης
              </button>

              <button className="btn-close" onClick={closeDoors}>
                🔒 Κλείσιμο Πόρτας
              </button>
            </div>
          </div>

          <div className="right-column">
            <div className="card camera-card">
              <h3>Θέα Δρόμου</h3>
              <span>Live Camera</span>
            </div>

            <div className="card notifications-card">
              <h3>🔔 Ειδοποιήσεις Συστήματος</h3>

              {notifications.length === 0 ? (
                <p>
                  Δεν υπάρχουν ειδοποιήσεις
                  <br />
                  Όλα λειτουργούν κανονικά
                </p>
              ) : (
                notifications.map((note, index) => (
                  <div key={index} className="alert">
                    {note}
                  </div>
                ))
              )}

              <div className="actions">
                <button className="red-btn" onClick={speedTest}>
                  Δοκιμή: +15 km/h
                </button>
                <button className="yellow-btn" onClick={laneWarning}>
                  Δοκιμή: Παρέκκλιση
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
