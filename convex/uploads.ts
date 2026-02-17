import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const generateUploadUrl = mutation(async (ctx) => {
  return await ctx.storage.generateUploadUrl();
});

export const saveFile = mutation({
  args: {
    userId: v.id("users"),
    moduleId: v.string(),
    fileName: v.string(),
    fileType: v.string(),
    fileSize: v.number(),
    storageId: v.id("_storage"),
  },
  handler: async (ctx, args) => {
    const uploadId = await ctx.db.insert("uploads", {
      userId: args.userId,
      moduleId: args.moduleId,
      fileName: args.fileName,
      fileType: args.fileType,
      fileSize: args.fileSize,
      storageId: args.storageId,
      uploadedAt: Date.now(),
    });

    // Check for first upload badge
    const user = await ctx.db.get(args.userId);
    if (user && !user.badges.includes("first_upload")) {
      await ctx.db.patch(args.userId, {
        badges: [...user.badges, "first_upload"],
        xp: user.xp + 50,
      });
    }

    // Log activity
    await ctx.db.insert("activityLog", {
      userId: args.userId,
      action: "file_upload",
      details: `Uploaded ${args.fileName} to ${args.moduleId}`,
      timestamp: Date.now(),
    });

    return uploadId;
  },
});

export const getModuleUploads = query({
  args: { userId: v.id("users"), moduleId: v.string() },
  handler: async (ctx, args) => {
    const uploads = await ctx.db
      .query("uploads")
      .withIndex("by_user_module", (q) =>
        q.eq("userId", args.userId).eq("moduleId", args.moduleId)
      )
      .collect();

    return Promise.all(
      uploads.map(async (upload) => ({
        ...upload,
        url: await ctx.storage.getUrl(upload.storageId),
      }))
    );
  },
});

export const getUserUploads = query({
  args: { userId: v.id("users") },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("uploads")
      .withIndex("by_user", (q) => q.eq("userId", args.userId))
      .collect();
  },
});

export const deleteFile = mutation({
  args: { uploadId: v.id("uploads") },
  handler: async (ctx, args) => {
    const upload = await ctx.db.get(args.uploadId);
    if (upload) {
      await ctx.storage.delete(upload.storageId);
      await ctx.db.delete(args.uploadId);
    }
  },
});

export const getFileUrl = query({
  args: { storageId: v.id("_storage") },
  handler: async (ctx, args) => {
    return await ctx.storage.getUrl(args.storageId);
  },
});
