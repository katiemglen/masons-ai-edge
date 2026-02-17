import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const getProgress = query({
  args: { userId: v.id("users") },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("moduleProgress")
      .withIndex("by_user", (q) => q.eq("userId", args.userId))
      .collect();
  },
});

export const getModuleProgress = query({
  args: { userId: v.id("users"), moduleId: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("moduleProgress")
      .withIndex("by_user_module", (q) =>
        q.eq("userId", args.userId).eq("moduleId", args.moduleId)
      )
      .first();
  },
});

export const completeModule = mutation({
  args: { userId: v.id("users"), moduleId: v.string(), xp: v.number() },
  handler: async (ctx, args) => {
    const existing = await ctx.db
      .query("moduleProgress")
      .withIndex("by_user_module", (q) =>
        q.eq("userId", args.userId).eq("moduleId", args.moduleId)
      )
      .first();

    if (existing) {
      if (!existing.completed) {
        await ctx.db.patch(existing._id, {
          completed: true,
          completedAt: Date.now(),
          xpEarned: args.xp,
        });
      }
      return;
    }

    await ctx.db.insert("moduleProgress", {
      userId: args.userId,
      moduleId: args.moduleId,
      completed: true,
      completedAt: Date.now(),
      xpEarned: args.xp,
    });

    // Update user XP and level
    const user = await ctx.db.get(args.userId);
    if (!user) throw new Error("User not found");
    const newXP = user.xp + args.xp;

    // Count completed modules for level
    const allProgress = await ctx.db
      .query("moduleProgress")
      .withIndex("by_user", (q) => q.eq("userId", args.userId))
      .collect();
    const completedCount = allProgress.filter((p) => p.completed).length + 1;

    await ctx.db.patch(args.userId, {
      xp: newXP,
      level: completedCount,
    });

    // Log activity
    await ctx.db.insert("activityLog", {
      userId: args.userId,
      action: "module_complete",
      details: `Completed module: ${args.moduleId}`,
      timestamp: Date.now(),
    });
  },
});
