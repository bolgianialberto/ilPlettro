import { pgTable, text, serial, integer, timestamp, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const members = pgTable("members", {
  id: serial("id").primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  instrument: text("instrument").notNull(),
  section: text("section").notNull(), // "direttore", "chitarre", "mandolini", "mandole", "contrabbassi"
  joinYear: integer("join_year").notNull(),
  photoUrl: text("photo_url"),
});

export const events = pgTable("events", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description"),
  date: timestamp("date").notNull(),
  time: text("time").notNull(),
  venue: text("venue").notNull(),
  posterUrl: text("poster_url"),
  isPastEvent: boolean("is_past_event").default(false),
});

export const mediaItems = pgTable("media_items", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  type: text("type").notNull(), // "audio", "photo", "video"
  url: text("url").notNull(),
  description: text("description"),
  duration: text("duration"), // for audio/video
});

export const insertMemberSchema = createInsertSchema(members).omit({
  id: true,
});

export const insertEventSchema = createInsertSchema(events).omit({
  id: true,
});

export const insertMediaItemSchema = createInsertSchema(mediaItems).omit({
  id: true,
});

export type Member = typeof members.$inferSelect;
export type InsertMember = z.infer<typeof insertMemberSchema>;
export type Event = typeof events.$inferSelect;
export type InsertEvent = z.infer<typeof insertEventSchema>;
export type MediaItem = typeof mediaItems.$inferSelect;
export type InsertMediaItem = z.infer<typeof insertMediaItemSchema>;
