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
  {
    id: 1,
    title: "Concerto di Natale",
    description: "Un concerto speciale per celebrare le festività natalizie con un repertorio di brani tradizionali e moderni.",
    date: new Date("2025-12-15T20:30:00"),
    time: "20:30",
    venue: "Teatro Comunale di Bologna",
    posterUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    isPastEvent: false
  }
];