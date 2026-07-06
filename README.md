# Smart Tourism Bus

React + TypeScript εφαρμογή για ένα έξυπνο τουριστικό λεωφορείο. Περιλαμβάνει ροές για επιβάτη, οδηγό και υπάλληλο, με παραγγελίες, GPS πλοήγηση, προβολή αξιοθέατων και βασική προσομοίωση συστημάτων λεωφορείου.

## Λειτουργίες

- Επιλογή ρόλου: επιβάτης, οδηγός, υπάλληλος.
- Dashboard επιβάτη με θέα οδηγού, αξιοθέατα, παραγγελίες και GPS.
- Dashboard οδηγού με ταχύτητα, επίπεδο κούρασης, πόρτες και ειδοποιήσεις.
- Dashboard υπαλλήλου με θερμοκρασία, οροφή, φωτοβολταϊκά και ρομποτική σκούπα.
- Ροή παραγγελίας καφέ και demo πληρωμής.

## Τεχνολογίες

- React
- TypeScript
- Vite
- React Router
- CSS

## Εκτέλεση τοπικά

```bash
npm install
npm run dev
```

Για production build:

```bash
npm run build
```

## Ανέβασμα στο GitHub από VS Code

1. Άνοιξε τον φάκελο του project στο VS Code.
2. Άνοιξε το Source Control από την αριστερή μπάρα.
3. Αν δεν υπάρχει repository, πάτησε `Initialize Repository`.
4. Πάτησε `+` για να κάνεις stage τα αρχεία.
5. Γράψε μήνυμα commit, π.χ. `Initial commit`.
6. Πάτησε `Commit`.
7. Πάτησε `Publish Branch` και σύνδεσε το VS Code με τον GitHub λογαριασμό σου.

Δεν ανεβάζουμε τον φάκελο `node_modules` ή το `dist`. Αυτά αγνοούνται από το `.gitignore` και αναδημιουργούνται με `npm install` / `npm run build`.
