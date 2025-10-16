export interface Member {
  id: number;
  firstName: string;
  lastName: string;
  instrument: string;
  section: string;
  joinYear: number | null;
  photoUrl: string;
}

export const members: Member[] = [
  // Direttore
  { id: 1, firstName: "Alberto", lastName: "Bugatti", instrument: "Direttore d'Orchestra", section: "direttore", joinYear: 1987, photoUrl: "https://ik.imagekit.io/4l83rt0/il-plettro/membri/alberto-bugatti.jpeg?updatedAt=1760600766698"},

  // Mandolini primi
  { id: 3, firstName: "Silvia", lastName: "Mirabella", instrument: "", section: "mandolini_primi", joinYear: null, photoUrl: "" },
  { id: 4, firstName: "Silvia", lastName: "Giusteri", instrument: "", section: "mandolini_primi", joinYear: null, photoUrl: "" },
  { id: 5, firstName: "Federica", lastName: "Sorrentino", instrument: "", section: "mandolini_primi", joinYear: null, photoUrl: "" },
  { id: 6, firstName: "Laura", lastName: "Previcini", instrument: "", section: "mandolini_primi", joinYear: null, photoUrl: "" },
  { id: 7, firstName: "Simona", lastName: "Mirabella", instrument: "", section: "mandolini_primi", joinYear: null, photoUrl: "" },
  { id: 8, firstName: "Matteo", lastName: "Peli", instrument: "", section: "mandolini_primi", joinYear: null, photoUrl: "" },
  { id: 9, firstName: "Francesca", lastName: "Maffina", instrument: "", section: "mandolini_primi", joinYear: null, photoUrl: "" },
  { id: 10, firstName: "Gigliola", lastName: "Bazzani", instrument: "", section: "mandolini_primi", joinYear: null, photoUrl: "" },

  // Mandolini secondi
  { id: 11, firstName: "Carla", lastName: "Mattiuzzo", instrument: "", section: "mandolini_secondi", joinYear: null, photoUrl: "" },
  { id: 12, firstName: "Nicola", lastName: "Pintossi", instrument: "", section: "mandolini_secondi", joinYear: null, photoUrl: "" },
  { id: 13, firstName: "Chiara", lastName: "Bontempi", instrument: "", section: "mandolini_secondi", joinYear: null, photoUrl: "" },
  { id: 14, firstName: "Camilla", lastName: "Favalli", instrument: "", section: "mandolini_secondi", joinYear: null, photoUrl: "" },
  { id: 15, firstName: "Laura", lastName: "Bernardi", instrument: "", section: "mandolini_secondi", joinYear: null, photoUrl: "" },
  { id: 16, firstName: "Elisa", lastName: "Toresani", instrument: "", section: "mandolini_secondi", joinYear: null, photoUrl: "" },
  { id: 17, firstName: "Sara Maria", lastName: "Cagnardi", instrument: "", section: "mandolini_secondi", joinYear: null, photoUrl: "" },
  { id: 18, firstName: "Brigitta", lastName: "", instrument: "", section: "mandolini_secondi", joinYear: null, photoUrl: "" },
  { id: 19, firstName: "Serena", lastName: "Carlenzoli", instrument: "", section: "mandolini_secondi", joinYear: null, photoUrl: "" },

  // Mandole
  { id: 20, firstName: "Alessandra", lastName: "Cordini", instrument: "", section: "mandole", joinYear: null, photoUrl: "" },
  { id: 21, firstName: "Pier Cesare", lastName: "Cordini", instrument: "", section: "mandole", joinYear: null, photoUrl: "" },
  { id: 22, firstName: "Giacomo", lastName: "Parola", instrument: "", section: "mandole", joinYear: null, photoUrl: "" },
  { id: 23, firstName: "Simona", lastName: "Toresani", instrument: "", section: "mandole", joinYear: null, photoUrl: "" },
  { id: 24, firstName: "Daniele", lastName: "Rizzini", instrument: "", section: "mandole", joinYear: null, photoUrl: "" },
  { id: 25, firstName: "Eros", lastName: "Richiedei", instrument: "", section: "mandole", joinYear: null, photoUrl: "" },
  { id: 26, firstName: "Alberto", lastName: "Salvatori", instrument: "", section: "mandole", joinYear: null, photoUrl: "" },

  // Chitarre
  { id: 27, firstName: "Serena", lastName: "Mattei", instrument: "", section: "chitarre", joinYear: null, photoUrl: "" },
  { id: 28, firstName: "Enrico", lastName: "Silvestri", instrument: "", section: "chitarre", joinYear: null, photoUrl: "" },
  { id: 29, firstName: "Silvia", lastName: "Bertoglio", instrument: "", section: "chitarre", joinYear: null, photoUrl: "" },
  { id: 30, firstName: "Diego", lastName: "Lancelotti", instrument: "", section: "chitarre", joinYear: null, photoUrl: "" },
  { id: 31, firstName: "Marco", lastName: "Richiedei", instrument: "", section: "chitarre", joinYear: null, photoUrl: "" },
  { id: 32, firstName: "Enrico", lastName: "Bertoglio", instrument: "", section: "chitarre", joinYear: null, photoUrl: "" },
  { id: 33, firstName: "Vera", lastName: "", instrument: "", section: "chitarre", joinYear: null, photoUrl: "" },
  { id: 34, firstName: "Nicola", lastName: "", instrument: "", section: "chitarre", joinYear: null, photoUrl: "" },
  { id: 35, firstName: "William", lastName: "", instrument: "", section: "chitarre", joinYear: null, photoUrl: "" },
  { id: 2, firstName: "Elena", lastName: "Moretti", instrument: "Chitarra", section: "chitarre", joinYear: 2015, photoUrl: "https://ik.imagekit.io/4l83rt0/il-plettro/membri/elena_moretti.jpeg?updatedAt=1760604901227"},

  // Contrabbassi
  { id: 36, firstName: "Alessandro", lastName: "Bettoni", instrument: "", section: "contrabbassi", joinYear: null, photoUrl: "" },
  { id: 37, firstName: "Giacomo", lastName: "D'Anna", instrument: "", section: "contrabbassi", joinYear: null, photoUrl: "" },
  { id: 38, firstName: "Simone", lastName: "Alberici", instrument: "", section: "contrabbassi", joinYear: null, photoUrl: "" }
];
