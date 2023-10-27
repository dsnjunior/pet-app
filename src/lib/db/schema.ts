import { sqliteTable, text, blob, integer } from "drizzle-orm/sqlite-core";
import { relations } from "drizzle-orm";

export const user = sqliteTable("user", {
  id: text("id").primaryKey(),
  google_sub: text("google_sub"),
  avatar_url: text("avatar_url"),
  display_name: text("display_name"),
});

export const userSession = sqliteTable("user_session", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id),
  activeExpires: blob("active_expires", {
    mode: "bigint",
  }).notNull(),
  idleExpires: blob("idle_expires", {
    mode: "bigint",
  }).notNull(),
});

export const userKey = sqliteTable("user_key", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id),
  hashedPassword: text("hashed_password"),
});

export const pets = sqliteTable("pets", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id),
  name: text("name").notNull(),
  type: text("type").$type<"cat" | "dog" | "bird">().notNull(),
  breed: text("breed").notNull(),
  birthday: text("birthday").notNull(),
  picture: text("picture"),
  creating: integer("creating", { mode: "boolean" }),
});

export const tasks = sqliteTable("tasks", {
  id: text("id").primaryKey(),
  userId: text("user_id").notNull(),
  petId: text("pet_id").notNull(),
  type: text("type")
    .$type<
      | "vet"
      | "medicine"
      | "walk"
      | "grooming"
      | "training"
      | "feeding"
      | "other"
    >()
    .notNull(),
  description: text("description").notNull(),
  status: text("status")
    .$type<"todo" | "in_progress" | "done" | "missed">()
    .notNull(),
  date: text("date").notNull(),
  timeZone: text("time_zone").notNull(),
});

export const tasksRelations = relations(tasks, ({ one }) => ({
  user: one(user, {
    fields: [tasks.userId],
    references: [user.id],
  }),
  pet: one(pets, {
    fields: [tasks.petId],
    references: [pets.id],
  }),
}));
