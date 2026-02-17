"use client";

import { motion } from "framer-motion";
import { useAuth } from "@/components/AuthProvider";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { getAllModules, BADGES } from "@/data/modules";

export default function ProfilePage() {
  const { userId, userName, logout } = useAuth();
  const user = useQuery(api.users.getUser, userId ? { userId } : "skip");
  const progress = useQuery(
    api.modules.getProgress,
    userId ? { userId } : "skip"
  );
  const uploads = useQuery(
    api.uploads.getUserUploads,
    userId ? { userId } : "skip"
  );
  const activity = useQuery(
    api.activity.getActivity,
    userId ? { userId, limit: 30 } : "skip"
  );

  if (!userId || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-400">Please log in to view your profile.</p>
      </div>
    );
  }

  const allModules = getAllModules();
  const completedModules = new Set(
    (progress ?? []).filter((p) => p.completed).map((p) => p.moduleId)
  );
  const totalCompleted = completedModules.size;
  const totalUploads = uploads?.length ?? 0;

  // Calculate level title
  const levelTitles = [
    "Newcomer",
    "Apprentice",
    "Student",
    "Practitioner",
    "Adept",
    "Specialist",
    "Expert",
    "Master",
    "Guru",
    "Sage",
    "Virtuoso",
    "Prodigy",
    "Maestro",
    "Legend",
    "Transcendent",
    "Full Stack Producer",
  ];
  const levelTitle = levelTitles[Math.min(user.level, levelTitles.length - 1)];

  return (
    <div className="min-h-screen pb-20">
      <div className="max-w-3xl mx-auto px-4 py-12">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          {/* Avatar */}
          <div className="w-24 h-24 mx-auto bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full flex items-center justify-center text-4xl mb-4 glow-purple">
            {userName?.charAt(0).toUpperCase() || "?"}
          </div>
          <h1 className="text-3xl font-bold text-white mb-1">{userName}</h1>
          <p className="text-purple-400 mb-4">{levelTitle}</p>

          {/* Stats row */}
          <div className="inline-flex items-center gap-6 bg-gray-900/60 border border-gray-800 rounded-2xl px-8 py-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-purple-400">{user.level}</p>
              <p className="text-xs text-gray-500">Level</p>
            </div>
            <div className="w-px h-8 bg-gray-700" />
            <div className="text-center">
              <p className="text-2xl font-bold text-yellow-400">{user.xp}</p>
              <p className="text-xs text-gray-500">XP</p>
            </div>
            <div className="w-px h-8 bg-gray-700" />
            <div className="text-center">
              <p className="text-2xl font-bold text-orange-400">
                {user.streak}
              </p>
              <p className="text-xs text-gray-500">Week Streak</p>
            </div>
            <div className="w-px h-8 bg-gray-700" />
            <div className="text-center">
              <p className="text-2xl font-bold text-cyan-400">
                {totalCompleted}/{allModules.length}
              </p>
              <p className="text-xs text-gray-500">Modules</p>
            </div>
          </div>
        </motion.div>

        {/* XP Progress to Next Level */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gray-900/40 border border-gray-800 rounded-xl p-6 mb-8"
        >
          <div className="flex items-center justify-between mb-2">
            <h2 className="font-semibold text-white">Progress to Level {user.level + 1}</h2>
            <span className="text-sm text-gray-500">
              {user.xp} / {(user.level + 1) * 200} XP
            </span>
          </div>
          <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{
                width: `${Math.min(100, (user.xp / ((user.level + 1) * 200)) * 100)}%`,
              }}
              transition={{ duration: 1 }}
              className="h-full bg-gradient-to-r from-purple-500 via-cyan-500 to-blue-500 rounded-full"
            />
          </div>
        </motion.div>

        {/* Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-900/40 border border-gray-800 rounded-xl p-6 mb-8"
        >
          <h2 className="text-xl font-bold text-white mb-4">🏅 Badges</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {Object.entries(BADGES).map(([key, badge]) => {
              const earned = user.badges.includes(key);
              return (
                <motion.div
                  key={key}
                  whileHover={{ scale: earned ? 1.05 : 1 }}
                  className={`rounded-xl p-4 text-center transition ${
                    earned
                      ? "bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 glow-purple"
                      : "bg-gray-800/30 border border-gray-800 opacity-40"
                  }`}
                >
                  <p className="text-3xl mb-2">{badge.icon}</p>
                  <p
                    className={`text-sm font-bold ${earned ? "text-yellow-300" : "text-gray-600"}`}
                  >
                    {badge.label}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {badge.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Activity History */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gray-900/40 border border-gray-800 rounded-xl p-6"
        >
          <h2 className="text-xl font-bold text-white mb-4">
            📋 Activity History
          </h2>
          {!activity || activity.length === 0 ? (
            <p className="text-gray-500 text-sm text-center py-8">
              No activity yet. Complete a module or upload a file to see your
              history!
            </p>
          ) : (
            <div className="space-y-3">
              {activity.map((item, i) => (
                <motion.div
                  key={item._id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center shrink-0 text-sm">
                    {item.action === "module_complete" ? "✅" : "📤"}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-300">{item.details}</p>
                    <p className="text-xs text-gray-600">
                      {new Date(item.timestamp).toLocaleDateString("en-US", {
                        weekday: "short",
                        month: "short",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Logout */}
        <div className="text-center mt-8">
          <button
            onClick={logout}
            className="text-gray-500 hover:text-red-400 text-sm transition"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}
