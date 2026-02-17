"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import TRACKS, { getAllModules } from "@/data/modules";
import { useAuth } from "@/components/AuthProvider";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

function TrackCard({
  track,
  completedModules,
  index,
}: {
  track: (typeof TRACKS)[0];
  completedModules: Set<string>;
  index: number;
}) {
  const completed = track.modules.filter((m) =>
    completedModules.has(m.id)
  ).length;
  const total = track.modules.length;
  const pct = total > 0 ? (completed / total) * 100 : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      className="group"
    >
      <div className="relative bg-gray-900/50 border border-gray-800 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:glow-purple">
        <div className="flex items-start justify-between mb-4">
          <span className="text-4xl">{track.icon}</span>
          <span className="text-sm text-gray-500">
            {completed}/{total} modules
          </span>
        </div>

        <h3
          className={`text-xl font-bold bg-gradient-to-r ${track.color} bg-clip-text text-transparent mb-2`}
        >
          {track.name}
        </h3>
        <p className="text-gray-400 text-sm mb-6 leading-relaxed">
          {track.description}
        </p>

        {/* Progress bar */}
        <div className="mb-4">
          <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${pct}%` }}
              transition={{ duration: 1, delay: index * 0.15 + 0.3 }}
              className={`h-full bg-gradient-to-r ${track.color} rounded-full`}
            />
          </div>
        </div>

        {/* Module list */}
        <div className="space-y-2">
          {track.modules.map((mod) => {
            const done = completedModules.has(mod.id);
            return (
              <Link
                key={mod.id}
                href={`/module/${mod.id}`}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 ${
                  done
                    ? "bg-green-500/10 text-green-400"
                    : "bg-gray-800/30 text-gray-300 hover:bg-gray-800/60 hover:text-white"
                }`}
              >
                <span className="text-sm w-6 h-6 flex items-center justify-center rounded-full bg-gray-800 text-gray-500 font-mono text-xs shrink-0">
                  {done ? "✓" : mod.number}
                </span>
                <span className="text-sm truncate">{mod.title}</span>
                <span className="ml-auto text-xs text-gray-600 shrink-0">
                  {mod.xp} XP
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

export default function Home() {
  const { userId } = useAuth();
  const progress = useQuery(
    api.modules.getProgress,
    userId ? { userId } : "skip"
  );

  const completedModules = new Set(
    (progress ?? []).filter((p) => p.completed).map((p) => p.moduleId)
  );

  const totalModules = getAllModules().length;
  const totalCompleted = completedModules.size;

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden py-20 px-4">
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-black mb-4">
              <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Mason&apos;s AI Edge
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-2 font-light">
              Manual Production • AI Production • Side Income • Power User
            </p>
            <p className="text-gray-500 mb-8 max-w-2xl mx-auto">
              20 hands-on modules across 4 tracks. Free tools only. Built for a
              dubstep/future bass producer on a real budget.
            </p>
          </motion.div>

          {/* Overall progress */}
          {userId && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="inline-flex items-center gap-4 bg-gray-900/60 backdrop-blur border border-gray-800 rounded-2xl px-6 py-4"
            >
              <div className="text-left">
                <p className="text-sm text-gray-400">Overall Progress</p>
                <p className="text-2xl font-bold text-white">
                  {totalCompleted}/{totalModules} modules
                </p>
              </div>
              <div className="w-32 h-3 bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{
                    width: `${totalModules > 0 ? (totalCompleted / totalModules) * 100 : 0}%`,
                  }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"
                />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                {totalModules > 0
                  ? Math.round((totalCompleted / totalModules) * 100)
                  : 0}
                %
              </span>
            </motion.div>
          )}
        </div>
      </section>

      {/* Tracks */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {TRACKS.map((track, i) => (
            <TrackCard
              key={track.id}
              track={track}
              completedModules={completedModules}
              index={i}
            />
          ))}
        </div>
      </section>

      {/* This Week's Focus */}
      {userId && (
        <section className="max-w-3xl mx-auto px-4 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-purple-500/20 rounded-2xl p-6"
          >
            <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
              <span>🎯</span> This Week&apos;s Focus
            </h2>
            <WeeklyFocus completedModules={completedModules} />
          </motion.div>
        </section>
      )}

      {/* Footer */}
      <footer className="border-t border-gray-800/50 py-8 text-center text-gray-600 text-sm">
        <p>
          Built with ⚡ for Mason. Next.js + Convex + Tailwind + Framer
          Motion.
        </p>
      </footer>
    </div>
  );
}

function WeeklyFocus({
  completedModules,
}: {
  completedModules: Set<string>;
}) {
  // Find next incomplete module from each track for balanced recommendation
  const nextModules = TRACKS.map((track) =>
    track.modules.find((m) => !completedModules.has(m.id))
  ).filter(Boolean);

  if (nextModules.length === 0) {
    return (
      <div className="text-center py-4">
        <p className="text-2xl mb-2">🏆</p>
        <p className="text-gray-300">
          You&apos;ve completed all 20 modules! You&apos;re officially a Full Stack
          Producer.
        </p>
      </div>
    );
  }

  // Show up to 2 next modules from different tracks
  const focus = nextModules.slice(0, 2);

  return (
    <div>
      <p className="text-gray-400 mb-3">
        Based on your 5-10 hours/week budget, focus on:
      </p>
      <div className="space-y-3">
        {focus.map((mod) =>
          mod ? (
            <Link
              key={mod.id}
              href={`/module/${mod.id}`}
              className="flex items-center gap-4 bg-gray-900/50 rounded-xl p-4 hover:bg-gray-900/80 transition group"
            >
              <span className="text-3xl">{mod.trackIcon}</span>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-white group-hover:text-purple-300 transition">
                  {mod.title}
                </p>
                <p className="text-sm text-gray-500 truncate">
                  {mod.subtitle}
                </p>
              </div>
              <div className="text-right shrink-0">
                <p className="text-sm text-purple-400">{mod.xp} XP</p>
                <p className="text-xs text-gray-600">{mod.estimatedHours}</p>
              </div>
            </Link>
          ) : null
        )}
      </div>
    </div>
  );
}
