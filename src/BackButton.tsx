import { useNavigate } from "react-router-dom";

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      style={{
        position: "fixed",
        bottom: "20px",
        left: "20px",
        zIndex: 9999,
        backgroundColor: "white",
        border: "1px solid #ccc",
        borderRadius: "50%",
        width: "45px",
        height: "45px",
        cursor: "pointer",
        fontSize: "24px",
        boxShadow: "0 4px 6px rgba(0,0,0,0.2)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "transform 0.2s",
        color: "#333",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      title="Επιστροφή"
    >
      ←
    </button>
  );
}
