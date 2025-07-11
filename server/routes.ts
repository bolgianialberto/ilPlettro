import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Members routes
  app.get("/api/members", async (req, res) => {
    try {
      const members = await storage.getAllMembers();
      res.json(members);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch members" });
    }
  });

  app.get("/api/members/section/:section", async (req, res) => {
    try {
      const { section } = req.params;
      const members = await storage.getMembersBySection(section);
      res.json(members);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch members by section" });
    }
  });

  // Events routes
  app.get("/api/events", async (req, res) => {
    try {
      const events = await storage.getAllEvents();
      res.json(events);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch events" });
    }
  });

  app.get("/api/events/upcoming", async (req, res) => {
    try {
      const events = await storage.getUpcomingEvents();
      res.json(events);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch upcoming events" });
    }
  });

  app.get("/api/events/past", async (req, res) => {
    try {
      const events = await storage.getPastEvents();
      res.json(events);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch past events" });
    }
  });

  // Media routes
  app.get("/api/media", async (req, res) => {
    try {
      const mediaItems = await storage.getAllMediaItems();
      res.json(mediaItems);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch media items" });
    }
  });

  app.get("/api/media/:type", async (req, res) => {
    try {
      const { type } = req.params;
      const mediaItems = await storage.getMediaItemsByType(type);
      res.json(mediaItems);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch media items by type" });
    }
  });

  // Contact form
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, subject, message } = req.body;
      
      // Here you would normally send an email or save to database
      console.log("Contact form submission:", { name, email, subject, message });
      
      res.json({ message: "Messaggio inviato con successo!" });
    } catch (error) {
      res.status(500).json({ message: "Errore nell'invio del messaggio" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
