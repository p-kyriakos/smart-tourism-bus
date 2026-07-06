import { useNavigate } from "react-router-dom";
import "./orders.css";
import BackButton from "./BackButton";

const shops = [
  { name: "Coffee Island", desc: "Specialty coffee & snacks", icon: "☕" },
  { name: "Mikel Coffee", desc: "Ελληνική αλυσίδα καφέ", icon: "🥤" },
  { name: "Starbucks", desc: "International coffee chain", icon: "⭐" },
];

export default function OrdersPage() {
  const navigate = useNavigate();

  return (
    <div className="orders-page">
      <BackButton />
      <div className="section-title">
        <h2>Επιλέξτε Καφετέρια</h2>
        <span>Διαλέξτε από τις διαθέσιμες καφετέριες</span>
      </div>

      <div className="shops-grid">
        {shops.map((shop) => (
          <div key={shop.name} className="shop-card" onClick={() => navigate("/shop")}>
            <div className="shop-icon">{shop.icon}</div>
            <h3>{shop.name}</h3>
            <p>{shop.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
