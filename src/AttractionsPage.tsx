import { useState } from "react";
import "./attractions.css";
import BackButton from "./BackButton";

type Attraction = {
  id: number;
  title: string;
  description: string;
  distance: string;
  wikiText: string;
};

const attractions: Attraction[] = [
  {
    id: 1,
    title: "Ακρόπολη",
    description: "Η Ακρόπολη των Αθηνών με τον Παρθενώνα",
    distance: "500μ",
    wikiText:
      "Η Ακρόπολη είναι ο σημαντικότερος αρχαιολογικός χώρος της Αθήνας. Βρίσκεται σε βραχώδη λόφο και φιλοξενεί τον Παρθενώνα. Αποτελεί σύμβολο της αρχαίας ελληνικής δημοκρατίας και προστατεύεται από την UNESCO.",
  },
  {
    id: 2,
    title: "Μουσείο Ακρόπολης",
    description: "Αρχαιολογικό μουσείο κοντά στον Ιερό Βράχο",
    distance: "350μ",
    wikiText:
      "Το Μουσείο Ακρόπολης φιλοξενεί ευρήματα από τον Ιερό Βράχο. Άνοιξε το 2009 και θεωρείται ένα από τα σημαντικότερα μουσεία παγκοσμίως.",
  },
  {
    id: 3,
    title: "Πλάκα",
    description: "Η παλιά γειτονιά της Αθήνας",
    distance: "200μ",
    wikiText:
      "Η Πλάκα είναι η παλαιότερη συνοικία της Αθήνας. Βρίσκεται στους πρόποδες της Ακρόπολης και ξεχωρίζει για τα στενά δρομάκια, τα νεοκλασικά σπίτια και τις ταβέρνες.",
  },
];

export default function AttractionsPage() {
  const [selected, setSelected] = useState<Attraction | null>(null);
  const [showHelp, setShowHelp] = useState(false);

  const speak = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "el-GR";
    speechSynthesis.cancel();
    speechSynthesis.speak(utterance);
  };

  return (
    <div className="attractions-page">
      <BackButton />

      <h2 style={{ padding: "40px", fontSize: "50px", fontWeight: 700, color: "#ffffff", textAlign: "center" }}>
        🏛️ Αξιοθέατα Αθήνας 🏛️
      </h2>

      <div className="attractions-grid">
        {attractions.map((a) => (
          <div
            key={a.id}
            className={`attraction-card ${selected?.id === a.id ? "active" : ""}`}
            onClick={() => setSelected(a)}
          >
            <h3>{a.title}</h3>
            <p>{a.description}</p>
            <span className="distance">{a.distance}</span>
          </div>
        ))}
      </div>

      {selected && (
        <div className="attraction-details">
          <h3>{selected.title}</h3>
          <p>{selected.wikiText}</p>

          <button className="narration-btn" onClick={() => speak(selected.wikiText)}>
            🔊 Αφήγηση
          </button>
        </div>
      )}

      <div className="online-help-container">
        {showHelp && (
          <div className="help-bubble">
            ℹ️ <b>Πληροφορίες:</b>
            <br />
            Επιλέξτε ένα αξιοθέατο για λεπτομέρειες και αφήγηση.
          </div>
        )}

        <button className={`help-btn ${showHelp ? "active" : ""}`} onClick={() => setShowHelp(!showHelp)}>
          ?
        </button>
      </div>
    </div>
  );
}
