import { members, events, mediaItems, type Member, type Event, type MediaItem, type InsertMember, type InsertEvent, type InsertMediaItem } from "../shared/schema";

export interface IStorage {
  // Members
  getAllMembers(): Promise<Member[]>;
  getMembersBySection(section: string): Promise<Member[]>;
  createMember(member: InsertMember): Promise<Member>;
  
  // Events
  getAllEvents(): Promise<Event[]>;
  getUpcomingEvents(): Promise<Event[]>;
  getPastEvents(): Promise<Event[]>;
  createEvent(event: InsertEvent): Promise<Event>;
  
  // Media
  getAllMediaItems(): Promise<MediaItem[]>;
  getMediaItemsByType(type: string): Promise<MediaItem[]>;
  createMediaItem(item: InsertMediaItem): Promise<MediaItem>;
}

export class MemStorage implements IStorage {
  private members: Map<number, Member>;
  private events: Map<number, Event>;
  private mediaItems: Map<number, MediaItem>;
  private currentMemberId: number;
  private currentEventId: number;
  private currentMediaId: number;

  constructor() {
    this.members = new Map();
    this.events = new Map();
    this.mediaItems = new Map();
    this.currentMemberId = 1;
    this.currentEventId = 1;
    this.currentMediaId = 1;
    
    // Initialize with orchestra data
    this.initializeData();
  }

  private async initializeData() {
    // Director
    await this.createMember({
      firstName: "Alberto",
      lastName: "Bugatti",
      instrument: "Direttore d'Orchestra",
      section: "direttore",
      joinYear: 1987,
      photoUrl: "/members/bugatti.jpg"
    });

    // Guitars
    const guitarMembers = [
      { firstName: "Marco", lastName: "Bianchi", joinYear: 1995, photoUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300" },
      { firstName: "Elena", lastName: "Verdi", joinYear: 2001, photoUrl: "https://images.unsplash.com/photo-1494790108755-2616c0763c46?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300" },
      { firstName: "Alessandro", lastName: "Neri", joinYear: 1998, photoUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300" },
      { firstName: "Giulia", lastName: "Ferretti", joinYear: 2010, photoUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300" },
      { firstName: "Roberto", lastName: "Conti", joinYear: 2005, photoUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300" },
      { firstName: "Francesca", lastName: "Lombardi", joinYear: 2012, photoUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300" }
    ];

    for (const member of guitarMembers) {
      await this.createMember({
        ...member,
        instrument: "Chitarra",
        section: "chitarre"
      });
    }

    // Mandolins
    const mandolinMembers = [
      { firstName: "Luca", lastName: "Romano", joinYear: 1992, photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300" },
      { firstName: "Francesca", lastName: "Conti", joinYear: 2005, photoUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300" },
      { firstName: "Giuseppe", lastName: "Marini", joinYear: 1987, photoUrl: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300" },
      { firstName: "Matteo", lastName: "Russo", joinYear: 2012, photoUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300" },
      { firstName: "Carla", lastName: "Bianchi", joinYear: 2008, photoUrl: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300" },
      { firstName: "Marco", lastName: "Verdi", joinYear: 2015, photoUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300" }
    ];

    for (const member of mandolinMembers) {
      await this.createMember({
        ...member,
        instrument: "Mandolino",
        section: "mandolini"
      });
    }

    // Mandolas
    const mandolaMembers = [
      { firstName: "Silvia", lastName: "Lombardi", joinYear: 2000, photoUrl: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300" },
      { firstName: "Davide", lastName: "Galli", joinYear: 2008, photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300" },
      { firstName: "Laura", lastName: "Rossi", joinYear: 2011, photoUrl: "https://images.unsplash.com/photo-1494790108755-2616c0763c46?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300" },
      { firstName: "Paolo", lastName: "Neri", joinYear: 2006, photoUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300" }
    ];

    for (const member of mandolaMembers) {
      await this.createMember({
        ...member,
        instrument: "Mandola",
        section: "mandole"
      });
    }

    // Double Basses
    const bassMembers = [
      { firstName: "Roberto", lastName: "Santini", joinYear: 1990, photoUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300" },
      { firstName: "Andrea", lastName: "Tosi", joinYear: 2015, photoUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300" },
      { firstName: "Michele", lastName: "Rossi", joinYear: 2018, photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300" }
    ];

    for (const member of bassMembers) {
      await this.createMember({
        ...member,
        instrument: "Contrabbasso",
        section: "contrabbassi"
      });
    }

    // Events
    await this.createEvent({
      title: "Concerto di Natale",
      description: "Un concerto speciale per celebrare le festività natalizie con un repertorio di brani tradizionali e moderni.",
      date: new Date("2024-12-15T20:30:00"),
      time: "20:30",
      venue: "Teatro Comunale di Bologna",
      posterUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      isPastEvent: false
    });

    await this.createEvent({
      title: "Rassegna Musicale",
      description: "Una serata dedicata alla musica da camera con un programma che spazia dal barocco al contemporaneo.",
      date: new Date("2025-01-20T21:00:00"),
      time: "21:00",
      venue: "Auditorium Parco della Musica",
      posterUrl: "https://images.unsplash.com/photo-1501612780327-45045538702b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      isPastEvent: false
    });

    await this.createEvent({
      title: "Concerto di Primavera",
      description: "Un concerto all'aperto per celebrare l'arrivo della primavera con melodie che richiamano la natura.",
      date: new Date("2025-03-15T19:00:00"),
      time: "19:00",
      venue: "Giardini Margherita",
      posterUrl: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      isPastEvent: false
    });

    await this.createEvent({
      title: "Concerto d'Estate 2023",
      description: "Un successo straordinario con oltre 500 spettatori in una serata magica sotto le stelle.",
      date: new Date("2023-07-20T21:00:00"),
      time: "21:00",
      venue: "Piazza Maggiore, Bologna",
      posterUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      isPastEvent: true
    });

    // Media Items
    await this.createMediaItem({
      title: "Tarantella Napoletana",
      type: "audio",
      url: "#",
      description: "Registrazione dal concerto di Natale 2023",
      duration: "3:24"
    });

    await this.createMediaItem({
      title: "Serenata Fiorentina",
      type: "audio",
      url: "#",
      description: "Registrazione dal concerto d'estate 2023",
      duration: "4:12"
    });

    // Photos
    const photos = [
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      "https://images.unsplash.com/photo-1501612780327-45045538702b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
    ];

    for (let i = 0; i < photos.length; i++) {
      await this.createMediaItem({
        title: `Foto ${i + 1}`,
        type: "photo",
        url: photos[i],
        description: `Immagine dell'orchestra`
      });
    }

    // Videos
    await this.createMediaItem({
      title: "Concerto di Natale 2023",
      type: "video",
      url: "#",
      description: "Highlights dal concerto"
    });

    await this.createMediaItem({
      title: "Presentazione Orchestra",
      type: "video",
      url: "#",
      description: "Chi siamo e cosa facciamo"
    });
  }

  async getAllMembers(): Promise<Member[]> {
    return Array.from(this.members.values());
  }

  async getMembersBySection(section: string): Promise<Member[]> {
    return Array.from(this.members.values()).filter(member => member.section === section);
  }

  async createMember(insertMember: InsertMember): Promise<Member> {
    const id = this.currentMemberId++;
    const member: Member = { 
      ...insertMember, 
      id,
      photoUrl: insertMember.photoUrl ?? null
    };
    this.members.set(id, member);
    return member;
  }

  async getAllEvents(): Promise<Event[]> {
    return Array.from(this.events.values());
  }

  async getUpcomingEvents(): Promise<Event[]> {
    return Array.from(this.events.values()).filter(event => !event.isPastEvent);
  }

  async getPastEvents(): Promise<Event[]> {
    return Array.from(this.events.values()).filter(event => event.isPastEvent);
  }

  async createEvent(insertEvent: InsertEvent): Promise<Event> {
    const id = this.currentEventId++;
    const event: Event = { 
      ...insertEvent, 
      id,
      description: insertEvent.description ?? null,
      posterUrl: insertEvent.posterUrl ?? null,
      isPastEvent: insertEvent.isPastEvent ?? null
    };
    this.events.set(id, event);
    return event;
  }

  async getAllMediaItems(): Promise<MediaItem[]> {
    return Array.from(this.mediaItems.values());
  }

  async getMediaItemsByType(type: string): Promise<MediaItem[]> {
    return Array.from(this.mediaItems.values()).filter(item => item.type === type);
  }

  async createMediaItem(insertItem: InsertMediaItem): Promise<MediaItem> {
    const id = this.currentMediaId++;
    const item: MediaItem = { 
      ...insertItem,
      id,
      description: insertItem.description ?? null,
      duration: insertItem.duration ?? null,
    };
    this.mediaItems.set(id, item);
    return item;
  }
}

export const storage = new MemStorage();
