export interface Event {
  id: number;
  title: string;
  description: string;
  date: Date;
  time: string;
  venue: string;
  posterUrl: string;
  isPastEvent: boolean;
}

export const events: Event[] = [
  { id: 1,
    title: "Melodie in Franciacorta",
    description: "Un concerto speciale nel cuore della Franciacorta.",
    date: new Date("2024-09-14T18:00:00"),
    time: "18:00",
    venue: "Via Santa Marta, 12, Rodengo Saiano, BS",
    posterUrl: "https://ik.imagekit.io/4l83rt0/il-plettro/locandine/14-09-2024.jpeg?updatedAt=1760604998330",
    isPastEvent: true
  },
  { 
    id: 2,
    title: "Settembre Inzinese",
    description: "",
    date: new Date("2025-10-18T20:45:00"),
    time: "20:45",
    venue: "Chiesa parrocchiale di Inzino",
    posterUrl: "https://ik.imagekit.io/4l83rt0/il-plettro/locandine/18-10-2025.jpeg?updatedAt=1760604998522",
    isPastEvent: false
  },
  { 
    id: 3,
    title: "Concerto",
    description: "Orchestra di mandolini e chitarre",
    date: new Date("2024-10-05T20:45:00"),
    time: "20:45",
    venue: "Chiesa parrocchiale di Inzino",
    posterUrl: "https://ik.imagekit.io/4l83rt0/il-plettro/locandine/05-10-2024.jpeg?updatedAt=1760779211425",
    isPastEvent: false
  }
];