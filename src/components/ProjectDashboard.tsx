"use client";

import { useQuery, useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Id } from "../../convex/_generated/dataModel";
import { motion } from "framer-motion";
import { useState } from "react";

const FILE_ICONS: Record<string, string> = {
  "audio/": "🎵",
  "image/": "🖼️",
  "video/": "🎬",
  "application/pdf": "📄",
  "text/": "📝",
  "application/zip": "📦",
};

function getFileIcon(type: string): string {
  for (const [prefix, icon] of Object.entries(FILE_ICONS)) {
    if (type.startsWith(prefix)) return icon;
  }
  return "📎";
}

function formatSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function formatDate(timestamp: number): string {
  return new Date(timestamp).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

interface ProjectDashboardProps {
  userId: Id<"users">;
  moduleId: string;
  requiredCount: number;
}

export default function ProjectDashboard({
  userId,
  moduleId,
  requiredCount,
}: ProjectDashboardProps) {
  const uploads = useQuery(api.uploads.getModuleUploads, { userId, moduleId });
  const deleteFile = useMutation(api.uploads.deleteFile);
  const [deleting, setDeleting] = useState<string | null>(null);

  if (!uploads) return null;
  if (uploads.length === 0) return null;

  const pct = Math.min(100, Math.round((uploads.length / requiredCount) * 100));

  const handleDelete = async (uploadId: Id<"uploads">) => {
    if (!confirm("Delete this file?")) return;
    setDeleting(uploadId);
    await deleteFile({ uploadId });
    setDeleting(null);
  };

  return (
    <div className="bg-gray-900/40 border border-gray-800 rounded-xl p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-white">
          📂 Your Uploads ({uploads.length})
        </h3>
        <div className="flex items-center gap-2">
          <div className="w-24 h-2 bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${pct}%` }}
              className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"
            />
          </div>
          <span className="text-sm text-gray-500">{pct}%</span>
        </div>
      </div>

      <div className="space-y-2">
        {uploads.map((upload) => (
          <div
            key={upload._id}
            className="flex items-center gap-3 bg-gray-800/30 rounded-lg px-4 py-3"
          >
            <span className="text-xl shrink-0">
              {getFileIcon(upload.fileType)}
            </span>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-white truncate">{upload.fileName}</p>
              <p className="text-xs text-gray-500">
                {formatSize(upload.fileSize)} •{" "}
                {formatDate(upload.uploadedAt)}
              </p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              {/* Preview/Play for audio */}
              {upload.fileType.startsWith("audio/") && upload.url && (
                <audio
                  controls
                  src={upload.url}
                  className="h-8 w-40"
                  preload="none"
                />
              )}
              {/* Preview for images */}
              {upload.fileType.startsWith("image/") && upload.url && (
                <a href={upload.url} target="_blank" rel="noopener noreferrer">
                  <img
                    src={upload.url}
                    alt={upload.fileName}
                    className="w-10 h-10 rounded object-cover"
                  />
                </a>
              )}
              {/* Download */}
              {upload.url && (
                <a
                  href={upload.url}
                  download={upload.fileName}
                  className="text-cyan-400 hover:text-cyan-300 text-sm transition"
                  title="Download"
                >
                  ⬇
                </a>
              )}
              {/* Delete */}
              <button
                onClick={() => handleDelete(upload._id)}
                disabled={deleting === upload._id}
                className="text-red-400/50 hover:text-red-400 text-sm transition disabled:opacity-50"
                title="Delete"
              >
                🗑
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
