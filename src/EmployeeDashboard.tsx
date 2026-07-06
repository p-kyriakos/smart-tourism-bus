import { useEffect, useState } from "react";
import "./EmployeeDashboard.css";
import BackButton from "./BackButton";

export default function EmployeeDashboard() {
  const [acOn, setAcOn] = useState(true);
  const [heatingOn, setHeatingOn] = useState(false);
  const [roofOpen, setRoofOpen] = useState(false);
  const [weather, setWeather] = useState<"sun" | "cloud" | "rain">("sun");
  const [temperature, setTemperature] = useState(22);
  const [production, setProduction] = useState(15);
  const [battery, setBattery] = useState(75);
  const [consumption] = useState(42);
  const [saving, setSaving] = useState(0);
  const [cleaning, setCleaning] = useState(false);
  const [charging, setCharging] = useState(false);
  const [cleanProgress, setCleanProgress] = useState(0);
  const [vacuumBattery, setVacuumBattery] = useState(100);
  const [showHelp, setShowHelp] = useState(false);

  useEffect(() => {
    if (!roofOpen) return;

    const interval = setInterval(() => {
      setBattery((b) => (b < 100 ? b + 1 : 100));
    }, 500);

    return () => clearInterval(interval);
  }, [roofOpen]);

  useEffect(() => {
    if (!cleaning) return;

    const interval = setInterval(() => {
      setCleanProgress((p) => {
        if (p >= 100) {
          setCleaning(false);
          setVacuumBattery(60);
          return 100;
        }
        return p + 1;
      });
      setVacuumBattery((b) => (b > 60 ? b - 0.4 : 60));
    }, 80);

    return () => clearInterval(interval);
  }, [cleaning]);

  useEffect(() => {
    if (!charging) return;

    const interval = setInterval(() => {
      setVacuumBattery((b) => {
        if (b >= 100) {
          setCharging(false);
          return 100;
        }
        return b + 1;
      });
    }, 80);

    return () => clearInterval(interval);
  }, [charging]);

  const toggleRoof = () => {
    setRoofOpen((open) => {
      const nextOpen = !open;
      setProduction(nextOpen ? 85 : 15);
      return nextOpen;
    });
  };

  return (
    <>
      <div className="employee-header">
        <BackButton />
        <div className="header-left">
          <div className="bus-circle">🚌</div>
          <div>
            <h1>Έξυπνο Τουριστικό Λεωφορείο</h1>
            <span>Ρόλος: Υπάλληλος</span>
          </div>
        </div>
      </div>

      <div className="dashboard-container">
        <div className="card">
          <h3>🌡️ Θερμοκρασία</h3>
          <h2>{temperature.toFixed(1)}°C</h2>
          <input
            type="range"
            min={16}
            max={30}
            step={0.5}
            value={temperature}
            onChange={(e) => setTemperature(Number(e.target.value))}
            className="temp-slider"
          />

          <div className="row">
            <button className={acOn ? "btn primary" : "btn"} onClick={() => setAcOn(!acOn)}>
              A/C {acOn ? "ON" : "OFF"}
            </button>
            <button className={heatingOn ? "btn danger" : "btn"} onClick={() => setHeatingOn(!heatingOn)}>
              Θέρμανση {heatingOn ? "ON" : "OFF"}
            </button>
          </div>
        </div>

        <div className="card">
          <h3>☀️ Οροφή</h3>
          <div className="row">
            <span className={weather === "sun" ? "weather active" : "weather"} onClick={() => setWeather("sun")}>
              ☀️
            </span>
            <span className={weather === "cloud" ? "weather active" : "weather"} onClick={() => setWeather("cloud")}>
              ☁️
            </span>
            <span className={weather === "rain" ? "weather active" : "weather"} onClick={() => setWeather("rain")}>
              🌧️
            </span>
          </div>
          <button className="btn wide" onClick={toggleRoof}>
            {roofOpen ? "Κλείσιμο" : "Άνοιγμα"}
          </button>
        </div>

        <div className="card">
          <h3>🔋 Φωτοβολταϊκά</h3>
          <p>
            Παραγωγή: <b>{production}%</b>
          </p>
          <p>
            Μπαταρία: <b>{battery}%</b>
          </p>
          <p>
            Κατανάλωση: <b>{consumption} kW</b>
          </p>
        </div>

        <div className="card">
          <h3>⚙️ Συστήματα</h3>
          <div className="systems-list">
            <div className="system-row">
              <span>A/C</span>
              <span className={acOn ? "status on" : "status off"}>{acOn ? "ON" : "OFF"}</span>
            </div>

            <div className="system-row">
              <span>Θέρμανση</span>
              <span className={heatingOn ? "status on" : "status off"}>{heatingOn ? "ON" : "OFF"}</span>
            </div>

            <div className="system-row">
              <span>Οροφή</span>
              <span className="status neutral">{roofOpen ? "Ανοιχτή" : "Κλειστή"}</span>
            </div>
          </div>

          <button className="btn wide" onClick={() => setSaving(saving + 5)}>
            Εξοικονόμηση
          </button>

          <div className="energy">
            <span>{saving}</span>
            <small>kWh</small>
          </div>
        </div>

        <div className="card">
          <h3>🤖 Ρομποτική Σκούπα</h3>
          <p>Μπαταρία: {Math.round(vacuumBattery)}%</p>

          <div className="progress">
            <div className="progress-bar green" style={{ width: `${cleanProgress}%` }} />
          </div>

          <p>{cleaning ? "Καθαρισμός σε εξέλιξη" : charging ? "Φορτίζει" : "Ανενεργή"}</p>

          <div className="row">
            <button
              className="btn primary"
              onClick={() => {
                setCleanProgress(0);
                setCleaning(true);
              }}
            >
              Έναρξη
            </button>
            <button className="btn" onClick={() => setCharging(true)}>
              Φόρτιση
            </button>
          </div>
        </div>

        {cleanProgress === 100 && (
          <div className="card notifications">
            <div className="lost-title">Χαμένα Αντικείμενα</div>
            {["Διαβατήριο 12A", "Πορτοφόλι 8B", "Κινητό 15C"].map((t) => (
              <div className="lost-item" key={t}>
                <span>{t}</span>
                <button className="notify-btn">Ειδοποίηση</button>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="online-help-container">
        {showHelp && (
          <div className="help-bubble">
            ℹ️ <b>Συμβουλή Ενέργειας:</b>
            <br />
            Ανοίξτε την οροφή για να αυξηθεί η παραγωγή από τα φωτοβολταϊκά.
          </div>
        )}

        <button className={`help-btn ${showHelp ? "active" : ""}`} onClick={() => setShowHelp(!showHelp)}>
          ?
        </button>
      </div>
    </>
  );
}
