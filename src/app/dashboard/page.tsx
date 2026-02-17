"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import TRACKS, { getAllModules, BADGES } from "@/data/modules";
import { useAuth } from "@/components/AuthProvider";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";

export default function Dashboard() {
  const { userId, userName } = useAuth();
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
    userId ? { userId, limit: 10 } : "skip"
  );

  if (!userId || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-400">Please log in to view your dashboard.</p>
      </div>
    );
  }

  const completedModules = new Set(
    (progress ?? []).filter((p) => p.completed).map((p) => p.moduleId)
  );

  const allModules = getAllModules();
  const totalXP = user.xp;
  const totalCompleted = completedModules.size;
  const totalUploads = uploads?.length ?? 0;

  return (
    <div className="min-h-screen pb-20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-3xl font-bold text-white mb-8">
            Dashboard
          </h1>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatCard
              label="Level"
              value={`${user.level}`}
              icon="⚡"
              color="from-purple-500 to-violet-500"
            />
            <StatCard
              label="XP"
              value={`${totalXP}`}
              icon="✨"
              color="from-yellow-500 to-orange-500"
            />
            <StatCard
              label="Streak"
              value={`${user.streak}w`}
              icon="🔥"
              color="from-orange-500 to-red-500"
            />
            <StatCard
              label="Uploads"
              value={`${totalUploads}`}
              icon="📤"
              color="from-cyan-500 to-blue-500"
            />
          </div>
        </motion.div>

        {/* Overall Progress */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gray-900/40 border border-gray-800 rounded-xl p-6 mb-8"
        >
          <h2 className="text-xl font-bold text-white mb-4">
            Overall Progress
          </h2>
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-4 bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{
                  width: `${(totalCompleted / allModules.length) * 100}%`,
                }}
                transition={{ duration: 1 }}
                className="h-full bg-gradient-to-r from-purple-500 via-cyan-500 to-blue-500 rounded-full"
              />
            </div>
            <span className="text-lg font-bold text-purple-400 shrink-0">
              {totalCompleted}/{allModules.length}
            </span>
          </div>

          {/* Track-by-track progress */}
          <div className="space-y-4">
            {TRACKS.map((track) => {
              const trackCompleted = track.modules.filter((m) =>
                completedModules.has(m.id)
              ).length;
              const trackTotal = track.modules.length;
              const trackPct = (trackCompleted / trackTotal) * 100;

              return (
                <div key={track.id}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-gray-400">
                      {track.icon} {track.name}
                    </span>
                    <span className="text-sm text-gray-500">
                      {trackCompleted}/{trackTotal}
                    </span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${trackPct}%` }}
                      transition={{ duration: 1 }}
                      className={`h-full bg-gradient-to-r ${track.color} rounded-full`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gray-900/40 border border-gray-800 rounded-xl p-6"
          >
            <h2 className="text-xl font-bold text-white mb-4">🏅 Badges</h2>
            <div className="grid grid-cols-2 gap-3">
              {Object.entries(BADGES).map(([key, badge]) => {
                const earned = user.badges.includes(key);
                return (
                  <div
                    key={key}
                    className={`rounded-lg p-3 text-center transition ${
                      earned
                        ? "bg-yellow-500/10 border border-yellow-500/30"
                        : "bg-gray-800/30 border border-gray-800 opacity-50"
                    }`}
                  >
                    <p className="text-2xl mb-1">{badge.icon}</p>
                    <p
                      className={`text-sm font-medium ${earned ? "text-yellow-300" : "text-gray-600"}`}
                    >
                      {badge.label}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {badge.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gray-900/40 border border-gray-800 rounded-xl p-6"
          >
            <h2 className="text-xl font-bold text-white mb-4">
              📋 Recent Activity
            </h2>
            {!activity || activity.length === 0 ? (
              <p className="text-gray-500 text-sm">
                No activity yet. Start a module!
              </p>
            ) : (
              <div className="space-y-3">
                {activity.map((item) => (
                  <div
                    key={item._id}
                    className="flex items-start gap-3 text-sm"
                  >
                    <span className="text-gray-500 shrink-0">
                      {item.action === "module_complete" ? "✅" : "📤"}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-gray-300 truncate">{item.details}</p>
                      <p className="text-gray-600 text-xs">
                        {new Date(item.timestamp).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </div>

        {/* Module Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8"
        >
          <h2 className="text-xl font-bold text-white mb-4">
            📚 All Modules
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {allModules.map((mod) => {
              const done = completedModules.has(mod.id);
              return (
                <Link
                  key={mod.id}
                  href={`/module/${mod.id}`}
                  className={`bg-gray-900/40 border rounded-xl p-4 transition-all hover:scale-[1.02] ${
                    done
                      ? "border-green-500/30 bg-green-500/5"
                      : "border-gray-800 hover:border-purple-500/30"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span>{mod.trackIcon}</span>
                    <span className="text-xs text-gray-500">
                      Module {mod.number}
                    </span>
                    {done && (
                      <span className="ml-auto text-green-400 text-sm">✓</span>
                    )}
                  </div>
                  <h3 className="font-semibold text-white text-sm mb-1">
                    {mod.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-purple-400">
                      {mod.xp} XP
                    </span>
                    <span className="text-xs text-gray-600">
                      {mod.estimatedHours}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function StatCard({
  label,
  value,
  icon,
  color,
}: {
  label: string;
  value: string;
  icon: string;
  color: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`bg-gray-900/40 border border-gray-800 rounded-xl p-4 text-center`}
    >
      <p className="text-2xl mb-1">{icon}</p>
      <p
        className={`text-2xl font-bold bg-gradient-to-r ${color} bg-clip-text text-transparent`}
      >
        {value}
      </p>
      <p className="text-xs text-gray-500 mt-1">{label}</p>
    </motion.div>
  );
}
