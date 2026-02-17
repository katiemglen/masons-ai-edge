import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const login = mutation({
  args: { name: v.string(), pin: v.string() },
  handler: async (ctx, args) => {
    const existing = await ctx.db
      .query("users")
      .withIndex("by_name", (q) => q.eq("name", args.name))
      .first();

    if (existing) {
      if (existing.pin !== args.pin) {
        throw new Error("Invalid PIN");
      }
      // Update streak
      const now = new Date();
      const currentWeek = `${now.getFullYear()}-W${Math.ceil(
        ((now.getTime() - new Date(now.getFullYear(), 0, 1).getTime()) / 86400000 + 1) / 7
      )}`;
      if (existing.lastActiveWeek !== currentWeek) {
        const lastWeekNum = parseInt(existing.lastActiveWeek?.split("-W")[1] || "0");
        const currentWeekNum = parseInt(currentWeek.split("-W")[1]);
        const isConsecutive = currentWeekNum - lastWeekNum === 1;
        await ctx.db.patch(existing._id, {
          streak: isConsecutive ? existing.streak + 1 : 1,
          lastActiveWeek: currentWeek,
        });
      }
      return existing._id;
    }

    const now = new Date();
    const currentWeek = `${now.getFullYear()}-W${Math.ceil(
      ((now.getTime() - new Date(now.getFullYear(), 0, 1).getTime()) / 86400000 + 1) / 7
    )}`;

    return await ctx.db.insert("users", {
      name: args.name,
      pin: args.pin,
      xp: 0,
      level: 0,
      streak: 1,
      lastActiveWeek: currentWeek,
      badges: [],
      createdAt: Date.now(),
    });
  },
});

export const getUser = query({
  args: { userId: v.id("users") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.userId);
  },
});

export const addXP = mutation({
  args: { userId: v.id("users"), amount: v.number() },
  handler: async (ctx, args) => {
    const user = await ctx.db.get(args.userId);
    if (!user) throw new Error("User not found");
    const newXP = user.xp + args.amount;
    await ctx.db.patch(args.userId, { xp: newXP });
    return newXP;
  },
});

export const addBadge = mutation({
  args: { userId: v.id("users"), badge: v.string() },
  handler: async (ctx, args) => {
    const user = await ctx.db.get(args.userId);
    if (!user) throw new Error("User not found");
    if (!user.badges.includes(args.badge)) {
      await ctx.db.patch(args.userId, {
        badges: [...user.badges, args.badge],
      });
    }
  },
});

export const updateLevel = mutation({
  args: { userId: v.id("users"), level: v.number() },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.userId, { level: args.level });
  },
});
