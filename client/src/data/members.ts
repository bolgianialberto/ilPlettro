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
  { id: 1, firstName: "Alberto", lastName: "Bugatti", instrument: "Direttore", section: "direttore", joinYear: null, photoUrl: null},

  // Presidente
  { id: 2, firstName: "Giovanni", lastName: "Ora", instrument: "Presidente", section: "presidente", joinYear: null, photoUrl: null},

  // Vicepresidente
  { id: 3, firstName: "Pier Cesare", lastName: "Cordini", instrument: "Vicepresidente", section: "vicepresidente", joinYear: null, photoUrl: null},

  // Mandolini primi (ordinati per cognome, poi nome)
  { id: 4, firstName: "Gigliola", lastName: "Bazzani", instrument: "", section: "mandolini_primi", joinYear: null, photoUrl: null },
  { id: 5, firstName: "Silvia", lastName: "Giusteri", instrument: "", section: "mandolini_primi", joinYear: null, photoUrl: null },
  { id: 6, firstName: "Francesca", lastName: "Maffina", instrument: "", section: "mandolini_primi", joinYear: null, photoUrl: null },
  { id: 7, firstName: "Silvia", lastName: "Mirabella", instrument: "", section: "mandolini_primi", joinYear: null, photoUrl: null },
  { id: 8, firstName: "Simona", lastName: "Mirabella", instrument: "", section: "mandolini_primi", joinYear: null, photoUrl: null },
  { id: 9, firstName: "Matteo", lastName: "Peli", instrument: "", section: "mandolini_primi", joinYear: null, photoUrl: null },
  { id: 10, firstName: "Laura", lastName: "Previcini", instrument: "", section: "mandolini_primi", joinYear: null, photoUrl: null },
  { id: 11, firstName: "Federica", lastName: "Sorrentino", instrument: "", section: "mandolini_primi", joinYear: null, photoUrl: null },

  // Mandolini secondi
  { id: 18, firstName: "Laura", lastName: "Bernardi", instrument: "", section: "mandolini_secondi", joinYear: null, photoUrl: null },
  { id: 13, firstName: "Chiara", lastName: "Bontempi", instrument: "", section: "mandolini_secondi", joinYear: null, photoUrl: null },
  { id: 12, firstName: "Brigitta", lastName: "Buczella", instrument: "", section: "mandolini_secondi", joinYear: null, photoUrl: null },
  { id: 14, firstName: "Serena", lastName: "Carlenzoli", instrument: "", section: "mandolini_secondi", joinYear: null, photoUrl: null },
  { id: 16, firstName: "Sara Maria", lastName: "Cagnardi", instrument: "", section: "mandolini_secondi", joinYear: null, photoUrl: null },
  { id: 15, firstName: "Chiara", lastName: "Casalotti", instrument: "", section: "mandolini_secondi", joinYear: null, photoUrl: null },
  { id: 17, firstName: "Camilla", lastName: "Favalli", instrument: "", section: "mandolini_secondi", joinYear: null, photoUrl: null },
  { id: 22, firstName: "Carla", lastName: "Mattiuzzo", instrument: "", section: "mandolini_secondi", joinYear: null, photoUrl: null },
  { id: 21, firstName: "Daniele", lastName: "Ora", instrument: "", section: "mandolini_secondi", joinYear: null, photoUrl: null },
  { id: 19, firstName: "Nicola", lastName: "Pintossi", instrument: "", section: "mandolini_secondi", joinYear: null, photoUrl: null },
  { id: 20, firstName: "Elisa", lastName: "Toresani", instrument: "", section: "mandolini_secondi", joinYear: null, photoUrl: null },

  // Mandole
  { id: 23, firstName: "Alessandra", lastName: "Cordini", instrument: "", section: "mandole", joinYear: null, photoUrl: null },
  { id: 27, firstName: "Pier Cesare", lastName: "Cordini", instrument: "", section: "mandole", joinYear: null, photoUrl: null },
  { id: 24, firstName: "Giacomo", lastName: "Parola", instrument: "", section: "mandole", joinYear: null, photoUrl: null },
  { id: 26, firstName: "Heros", lastName: "Richiedei", instrument: "", section: "mandole", joinYear: null, photoUrl: null },
  { id: 25, firstName: "Daniele", lastName: "Rizzini", instrument: "", section: "mandole", joinYear: null, photoUrl: null },
  { id: 29, firstName: "Alberto", lastName: "Salvatori", instrument: "", section: "mandole", joinYear: null, photoUrl: null },
  { id: 28, firstName: "Simona", lastName: "Toresani", instrument: "", section: "mandole", joinYear: null, photoUrl: null },

  // Chitarre
  { id: 37, firstName: "Enrico", lastName: "Bertoglio", instrument: "", section: "chitarre", joinYear: null, photoUrl: null },
  { id: 38, firstName: "Silvia", lastName: "Bertoglio", instrument: "", section: "chitarre", joinYear: null, photoUrl: null },
  { id: 30, firstName: "Nicola", lastName: "Gallia", instrument: "", section: "chitarre", joinYear: null, photoUrl: null },
  { id: 31, firstName: "William", lastName: "Harvey Pellew", instrument: "", section: "chitarre", joinYear: null, photoUrl: null },
  { id: 32, firstName: "Diego", lastName: "Lancelotti", instrument: "", section: "chitarre", joinYear: null, photoUrl: null },
  { id: 33, firstName: "Serena", lastName: "Mattei", instrument: "", section: "chitarre", joinYear: null, photoUrl: null },
  { id: 34, firstName: "Elena", lastName: "Moretti", instrument: "", section: "chitarre", joinYear: null, photoUrl: null },
  { id: 35, firstName: "Marco", lastName: "Richiedei", instrument: "", section: "chitarre", joinYear: null, photoUrl: null },
  { id: 36, firstName: "Enrico", lastName: "Silvestri", instrument: "", section: "chitarre", joinYear: null, photoUrl: null },
  { id: 39, firstName: "Vera", lastName: "Tanfoglio", instrument: "", section: "chitarre", joinYear: null, photoUrl: null },

  // Contrabbassi
  { id: 40, firstName: "Simone", lastName: "Alberici", instrument: "", section: "contrabbassi", joinYear: null, photoUrl: null },
  { id: 41, firstName: "Alessandro", lastName: "Bettoni", instrument: "", section: "contrabbassi", joinYear: null, photoUrl: null },
  { id: 42, firstName: "Giacomo", lastName: "D'Anna", instrument: "", section: "contrabbassi", joinYear: null, photoUrl: null }
];
