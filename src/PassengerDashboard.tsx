import { useNavigate } from "react-router-dom";
import { useState } from "react";
import BackButton from "./BackButton";

export default function PassengerDashboard() {
  const navigate = useNavigate();
  const [viewActive, setViewActive] = useState(false);
  const [viewImage, setViewImage] = useState<string | null>(null);
  const [showViewHelp, setShowViewHelp] = useState(false);

  const activateView = () => {
    setViewImage("/driver-view.jpg");
    setViewActive(true);
    setShowViewHelp(false);
  };

  const deactivateView = () => {
    setViewActive(false);
    setViewImage(null);
    setShowViewHelp(false);
  };

  return (
    <>
      <div className="topbar">
        {!viewActive && <BackButton />}

        <div className="topbar-left">
          <div className="bus-circle">🚌</div>
          <div>
            <div className="topbar-title">Έξυπνο Τουριστικό Λεωφορείο</div>
            <div className="topbar-sub">Ρόλος: Επιβάτης</div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="grid">
          <div className="card">
            <div className="card-header">📷 Θέα Οδηγού</div>

            {!viewActive ? (
              <button className="view-btn" onClick={activateView}>
                Ενεργοποίηση Θέας
              </button>
            ) : (
              <>
                <img
                  src={viewImage!}
                  alt="Θέα οδηγού"
                  style={{ width: "100%", borderRadius: "12px", marginTop: "10px" }}
                />

                <button
                  className="view-btn danger"
                  style={{ marginTop: "10px" }}
                  onClick={deactivateView}
                >
                  Απενεργοποίηση Θέας
                </button>
              </>
            )}
          </div>

          <button className="card green" onClick={() => navigate("/attractions")}>
            <div className="card-header">📍 Αξιοθέατα</div>
            <p>Κοντινά σημεία ενδιαφέροντος</p>
            <div className="badge">3 διαθέσιμα</div>
          </button>

          <button className="card orange" onClick={() => navigate("/orders")}>
            <div className="card-header">☕ Παραγγελίες</div>
            <p>Καφέ, ροφήματα & snack</p>
            <p>Κενό καλάθι</p>
          </button>

          <button className="card purple" onClick={() => navigate("/gps")}>
            <div className="card-header">🧭 GPS Πλοήγηση</div>
            <p>Ξενάγηση στην πόλη</p>
          </button>
        </div>
      </div>

      {viewActive && (
        <div className="online-help-container">
          {showViewHelp && (
            <div className="help-bubble">
              ℹ️ <b>Πλοήγηση:</b>
              <br />
              Πατήστε "Απενεργοποίηση Θέας" για να επιστρέψετε στο κεντρικό μενού.
            </div>
          )}

          <button
            className={`help-btn ${showViewHelp ? "active" : ""}`}
            onClick={() => setShowViewHelp(!showViewHelp)}
            style={{ backgroundColor: showViewHelp ? "#ef4444" : "#0056b3" }}
          >
            ?
          </button>
        </div>
      )}
    </>
  );
}
