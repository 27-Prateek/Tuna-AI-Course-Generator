import {
  pgTable,
  serial,
  varchar,
  jsonb,
  timestamp,
} from "drizzle-orm/pg-core";

export const courseList = pgTable("course_list", {
  id: serial("id").primaryKey(),

  courseId: varchar("course_id", { length: 255 }).notNull(),

  name: varchar("name", { length: 255 }).notNull(),

  category: varchar("category", { length: 100 }).notNull(),

  level: varchar("level", { length: 50 }).notNull(),
  includeVideo:varchar('includeVideo').notNull().default('Yes'),

  courseOutput: jsonb("course_output").notNull(),

  createdBy: varchar("created_by", { length: 255 }).notNull(),

  userName: varchar("username", { length: 255 }),

  userProfileImage: varchar("user_profile_image", { length: 500 }),

  createdAt: timestamp("created_at").defaultNow(),

  picture_URL:varchar('picture_URL', { length: 500 }).notNull().default('https://res.cloudinary.com/dnqi60hyu/image/upload/v1768495108/guide-placeholder_qcisj8.png'),

});
