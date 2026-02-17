import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    name: v.string(),
    pin: v.string(),
    xp: v.number(),
    level: v.number(),
    streak: v.number(),
    lastActiveWeek: v.string(),
    badges: v.array(v.string()),
    createdAt: v.number(),
  }).index("by_name", ["name"]),

  moduleProgress: defineTable({
    userId: v.id("users"),
    moduleId: v.string(),
    completed: v.boolean(),
    completedAt: v.optional(v.number()),
    xpEarned: v.number(),
  })
    .index("by_user", ["userId"])
    .index("by_user_module", ["userId", "moduleId"]),

  uploads: defineTable({
    userId: v.id("users"),
    moduleId: v.string(),
    fileName: v.string(),
    fileType: v.string(),
    fileSize: v.number(),
    storageId: v.id("_storage"),
    uploadedAt: v.number(),
  })
    .index("by_user_module", ["userId", "moduleId"])
    .index("by_user", ["userId"]),

  activityLog: defineTable({
    userId: v.id("users"),
    action: v.string(),
    details: v.string(),
    timestamp: v.number(),
  }).index("by_user", ["userId"]),
});
