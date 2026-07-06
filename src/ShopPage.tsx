import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./orders.css";
import BackButton from "./BackButton";

const menu = {
  καφές: [
    { name: "Ελληνικός Καφές", price: 3.5 },
    { name: "Espresso", price: 3.2 },
    { name: "Καπουτσίνο", price: 4.0 },
    { name: "Φίλτρου", price: 3.8 },
  ],
  ροφήματα: [
    { name: "Σοκολάτα", price: 4.2 },
    { name: "Τσάι", price: 3.0 },
  ],
  σνακ: [
    { name: "Κρουασάν", price: 2.5 },
    { name: "Μπισκότα", price: 1.8 },
  ],
};

export default function ShopPage() {
  const [category, setCategory] = useState<keyof typeof menu>("καφές");
  const [cart, setCart] = useState<Record<string, number>>({});
  const [showHelp, setShowHelp] = useState(false);
  const navigate = useNavigate();

  const add = (item: string) => setCart({ ...cart, [item]: (cart[item] || 0) + 1 });
  const remove = (item: string) =>
    setCart({ ...cart, [item]: Math.max((cart[item] || 1) - 1, 0) });

  const totalItems = Object.values(cart).reduce((a, b) => a + b, 0);
  const totalPrice = Object.entries(cart).reduce((total, [name, count]) => {
    const item = Object.values(menu)
      .flat()
      .find((i) => i.name === name);
    return total + (item?.price || 0) * count;
  }, 0);

  return (
    <div className="shop-page">
      <BackButton />
      <div className="shop-header">
        <h2>☕ Coffee Island</h2>
        <span>Specialty coffee & snacks</span>
      </div>

      <div className="categories">
        {(Object.keys(menu) as Array<keyof typeof menu>).map((c) => (
          <button
            key={c}
            className={category === c ? "cat active" : "cat"}
            onClick={() => setCategory(c)}
          >
            {c.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="products-grid">
        {menu[category].map((p) => (
          <div key={p.name} className="product-card">
            <div>
              <h4>{p.name}</h4>
              <span className="price">€{p.price.toFixed(2)}</span>
            </div>

            <div className="counter">
              <button onClick={() => remove(p.name)}>-</button>
              <span>{cart[p.name] || 0}</span>
              <button onClick={() => add(p.name)}>+</button>
            </div>
          </div>
        ))}
      </div>

      {totalItems > 0 && (
        <button className="pay-btn" onClick={() => navigate("/payment")}>
          Πληρωμή (€{totalPrice.toFixed(2)})
        </button>
      )}

      <div className="online-help-container">
        {showHelp && (
          <div className="help-bubble">
            ℹ️ <b>Συμβουλή:</b>
            <br />
            Επιλέξτε πρώτα προϊόντα (+) για να εμφανιστεί το κουμπί πληρωμής.
          </div>
        )}

        <button className={`help-btn ${showHelp ? "active" : ""}`} onClick={() => setShowHelp(!showHelp)}>
          ?
        </button>
      </div>
    </div>
  );
}
