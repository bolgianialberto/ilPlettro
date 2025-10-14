export interface Member {
  id: number;
  firstName: string;
  lastName: string;
  instrument: string;
  section: string;
  joinYear: number;
  photoUrl: string;
}

export const members: Member[] = [
  {
    id: 1,
    firstName: "Alberto",
    lastName: "Bugatti",
    instrument: "Direttore d'Orchestra",
    section: "direttore",
    joinYear: 1987,
    photoUrl: "/members/bugatti.jpg"
  },
  {
    id: 2,
    firstName: "Elena",
    lastName: "Moretti",
    instrument: "Chitarra",
    section: "chitarre",
    joinYear: 2015,
    photoUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"
  }
];