import { pgTable, text, serial, varchar, integer,timestamp } from "drizzle-orm/pg-core";

export const Users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: text("name"),
  email: varchar("email", { length: 256 }).notNull().unique(),
  password: varchar("password", { length: 256 }),
});

export const BasicInfo = pgTable("basic_info",{
  id: serial("id").primaryKey(),
  userId : integer("user_id").references(()=>Users.id).notNull(),
  name: text("name"),
  email: varchar("email",{length:256}).unique(),
  collegeName : text("college_name"),
  address : varchar("address"),
  linkedin : varchar("linkedin"),
  github: varchar("github"),
  portfolio : varchar("portfolio"),
  otherLink : varchar("other_link"),
  phone : varchar("number"),
  skills: text("skills"),
  createdAt: timestamp("created_at").defaultNow(),
})


export const TUser = typeof Users.$inferSelect;
export const TBasicInfo = typeof BasicInfo.$inferSelect