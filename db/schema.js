import { boolean } from "drizzle-orm/gel-core";
import {
  pgTable,
  serial,
  varchar,
  jsonb,
  timestamp,
  integer
} from "drizzle-orm/pg-core";

export const courseList = pgTable("course_list", {
  id: serial("id").primaryKey(),

  courseId: varchar("courseId", { length: 255 }).notNull(),

  name: varchar("name", { length: 255 }).notNull(),

  category: varchar("category", { length: 100 }).notNull(),

  level: varchar("level", { length: 50 }).notNull(),
  includeVideo:varchar('includeVideo').notNull().default('Yes'),

  courseOutput: jsonb("courseOutput").notNull(),

  createdBy: varchar("createdBy", { length: 255 }).notNull(),

  userName: varchar("userName", { length: 255 }),

  userProfileImage: varchar("userProfileImage", { length: 500 }),

  createdAt: timestamp("createdAt").defaultNow(),

  picture_URL:varchar('picture_URL', { length: 500 }).notNull().default('https://res.cloudinary.com/dnqi60hyu/image/upload/v1768495108/guide-placeholder_qcisj8.png'),

  chaptersContent: jsonb("chaptersContent").notNull().default([]),

  numberOfChaptersCreated: integer("numberOfChaptersCreated").notNull().default(0),
});


export const users = pgTable("users", {
  id: serial("id").primaryKey(),

  email: varchar("email", { length: 255 })
    .notNull()
    .unique(),

  hasMembership: boolean("has_membership")
    .notNull()
    .default(false),

  createdAt: timestamp("created_at")
    .defaultNow()
    .notNull(),

  clerkUserId: varchar("clerk_user_id", { length: 255 })
  .notNull()
  .unique(),

});

