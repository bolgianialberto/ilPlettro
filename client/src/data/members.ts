export interface Member {
  id: number;
  firstName: string;
  lastName: string;
  instrument: string;
  section: string;
  joinYear: number | null;
  photoUrl: string | null;
}

export const members: Member[] = [
  // Direttore
  { id: 1, firstName: "Alberto", lastName: "Bugatti", instrument: "", section: "direttore", joinYear: 1987, photoUrl: "https://ik.imagekit.io/4l83rt0/il-plettro/membri/alberto-bugatti.jpeg?updatedAt=1760600766698"},

  // Mandolini primi
  { id: 3, firstName: "Silvia", lastName: "Mirabella", instrument: "", section: "mandolini_primi", joinYear: null, photoUrl: null },
  { id: 4, firstName: "Silvia", lastName: "Giusteri", instrument: "", section: "mandolini_primi", joinYear: null, photoUrl: null },
  { id: 5, firstName: "Federica", lastName: "Sorrentino", instrument: "", section: "mandolini_primi", joinYear: null, photoUrl: null },
  { id: 6, firstName: "Laura", lastName: "Previcini", instrument: "", section: "mandolini_primi", joinYear: null, photoUrl: null },
  { id: 7, firstName: "Simona", lastName: "Mirabella", instrument: "", section: "mandolini_primi", joinYear: null, photoUrl: null },
  { id: 8, firstName: "Matteo", lastName: "Peli", instrument: "", section: "mandolini_primi", joinYear: null, photoUrl: "" },
  { id: 9, firstName: "Francesca", lastName: "Maffina", instrument: "", section: "mandolini_primi", joinYear: null, photoUrl: null },
  { id: 10, firstName: "Gigliola", lastName: "Bazzani", instrument: "", section: "mandolini_primi", joinYear: null, photoUrl: null },

  // Mandolini secondi
  { id: 11, firstName: "Carla", lastName: "Mattiuzzo", instrument: "", section: "mandolini_secondi", joinYear: null, photoUrl: null },
  { id: 12, firstName: "Nicola", lastName: "Pintossi", instrument: "", section: "mandolini_secondi", joinYear: null, photoUrl: null },
  { id: 13, firstName: "Chiara", lastName: "Bontempi", instrument: "", section: "mandolini_secondi", joinYear: null, photoUrl: null },
  { id: 14, firstName: "Camilla", lastName: "Favalli", instrument: "", section: "mandolini_secondi", joinYear: null, photoUrl: null },
  { id: 15, firstName: "Laura", lastName: "Bernardi", instrument: "", section: "mandolini_secondi", joinYear: null, photoUrl: null },
  { id: 16, firstName: "Elisa", lastName: "Toresani", instrument: "", section: "mandolini_secondi", joinYear: null, photoUrl: null },
  { id: 17, firstName: "Sara Maria", lastName: "Cagnardi", instrument: "", section: "mandolini_secondi", joinYear: null, photoUrl: null },
  { id: 18, firstName: "Brigitta", lastName: "Buczella", instrument: "", section: "mandolini_secondi", joinYear: null, photoUrl: null },
  { id: 19, firstName: "Serena", lastName: "Carlenzoli", instrument: "", section: "mandolini_secondi", joinYear: null, photoUrl: null },
  { id: 39, firstName: "Daniele", lastName: "Ora", instrument: "", section: "mandolini_secondi", joinYear: null, photoUrl: null },

  // Mandole
  { id: 20, firstName: "Alessandra", lastName: "Cordini", instrument: "", section: "mandole", joinYear: null, photoUrl: null },
  { id: 21, firstName: "Pier Cesare", lastName: "Cordini", instrument: "", section: "mandole", joinYear: null, photoUrl: null },
  { id: 22, firstName: "Giacomo", lastName: "Parola", instrument: "", section: "mandole", joinYear: null, photoUrl: null },
  { id: 23, firstName: "Simona", lastName: "Toresani", instrument: "", section: "mandole", joinYear: null, photoUrl: null },
  { id: 24, firstName: "Daniele", lastName: "Rizzini", instrument: "", section: "mandole", joinYear: null, photoUrl: null },
  { id: 25, firstName: "Heros", lastName: "Richiedei", instrument: "", section: "mandole", joinYear: null, photoUrl: null },
  { id: 26, firstName: "Alberto", lastName: "Salvatori", instrument: "", section: "mandole", joinYear: null, photoUrl: null },

  // Chitarre
  { id: 27, firstName: "Serena", lastName: "Mattei", instrument: "", section: "chitarre", joinYear: null, photoUrl: null },
  { id: 28, firstName: "Enrico", lastName: "Silvestri", instrument: "", section: "chitarre", joinYear: null, photoUrl: null },
  { id: 29, firstName: "Silvia", lastName: "Bertoglio", instrument: "", section: "chitarre", joinYear: null, photoUrl: null },
  { id: 30, firstName: "Diego", lastName: "Lancelotti", instrument: "", section: "chitarre", joinYear: null, photoUrl: null },
  { id: 31, firstName: "Marco", lastName: "Richiedei", instrument: "", section: "chitarre", joinYear: null, photoUrl: null },
  { id: 32, firstName: "Enrico", lastName: "Bertoglio", instrument: "", section: "chitarre", joinYear: null, photoUrl: null },
  { id: 33, firstName: "Vera", lastName: "", instrument: "", section: "chitarre", joinYear: null, photoUrl: null },
  { id: 34, firstName: "Nicola", lastName: "", instrument: "", section: "chitarre", joinYear: null, photoUrl: null },
  { id: 35, firstName: "William", lastName: "", instrument: "", section: "chitarre", joinYear: null, photoUrl: null },
  { id: 2, firstName: "Elena", lastName: "Moretti", instrument: "", section: "chitarre", joinYear: 2015, photoUrl: "https://ik.imagekit.io/4l83rt0/il-plettro/membri/elena_moretti.jpeg?updatedAt=1760604901227"},

  // Contrabbassi
  { id: 36, firstName: "Alessandro", lastName: "Bettoni", instrument: "", section: "contrabbassi", joinYear: null, photoUrl: null },
  { id: 37, firstName: "Giacomo", lastName: "D'Anna", instrument: "", section: "contrabbassi", joinYear: null, photoUrl: null },
  { id: 38, firstName: "Simone", lastName: "Alberici", instrument: "", section: "contrabbassi", joinYear: null, photoUrl: null }
];
