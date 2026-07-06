import { useNavigate } from "react-router-dom";

type Role = "passenger" | "driver" | "admin";

export default function RoleSelection() {
  const navigate = useNavigate();

  const handleClick = (role: Role) => {
    if (role === "passenger") navigate("/passenger");
    if (role === "driver") navigate("/driver");
    if (role === "admin") navigate("/admin");
  };

  return (
    <div className="container">
      <div className="header">
        <div className="bus-icon">🚌</div>
        <h1>Έξυπνο Τουριστικό Λεωφορείο</h1>
        <p>Επιλέξτε τον ρόλο σας</p>
      </div>

      <div className="roles">
        <button className="role-btn passenger" onClick={() => handleClick("passenger")}>
          <div className="icon">👤</div>
          <h2>Επιβάτης</h2>
          <p>Θέσεις, αξιοθέατα, παραγγελίες</p>
        </button>

        <button className="role-btn driver" onClick={() => handleClick("driver")}>
          <div className="icon">🚌</div>
          <h2>Οδηγός</h2>
          <p>Βοήθεια οδήγησης</p>
        </button>

        <button className="role-btn admin" onClick={() => handleClick("admin")}>
          <div className="icon">⚙️</div>
          <h2>Υπάλληλος</h2>
          <p>Διαχείριση συστημάτων</p>
        </button>
      </div>
    </div>
  );
}
