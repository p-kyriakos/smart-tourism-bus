import { useState } from "react";
import "./orders.css";
import BackButton from "./BackButton";

export default function PaymentPage() {
  const [paid, setPaid] = useState(false);

  return (
    <div className="payment-page">
      <BackButton />
      <h2 className="payment-title">Πληρωμή με Κάρτα</h2>

      <div className="payment-card">
        {!paid ? (
          <>
            <h3 className="card-title">💳 Στοιχεία Κάρτας</h3>

            <label>Αριθμός Κάρτας</label>
            <input placeholder="1234 5678 9012 3456" />

            <label>Όνομα Κατόχου</label>
            <input placeholder="ΟΝΟΜΑ ΕΠΩΝΥΜΟ" />

            <div className="row-inputs">
              <div>
                <label>Ημερομηνία Λήξης</label>
                <input placeholder="MM/YY" />
              </div>

              <div>
                <label>CVV</label>
                <input placeholder="123" />
              </div>
            </div>

            <button className="pay-btn" onClick={() => setPaid(true)}>
              Πληρωμή
            </button>
          </>
        ) : (
          <div className="success-inside">
            <div className="success-icon">✅</div>
            <h3>Χαλαρώστε!</h3>
            <p>
              Λάβαμε την παραγγελία σας.
              <br />
              Θα την παραλάβετε στη στάση <b>Σύνταγμα</b>.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
