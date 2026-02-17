"use client";

import { useParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import { getModuleById, getAllModules } from "@/data/modules";
import { useAuth } from "@/components/AuthProvider";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import FileUpload from "@/components/FileUpload";
import ProjectDashboard from "@/components/ProjectDashboard";
import confetti from "canvas-confetti";

export default function ModulePage() {
  const params = useParams();
  const router = useRouter();
  const moduleId = params.id as string;
  const mod = getModuleById(moduleId);
  const { userId } = useAuth();

  const moduleProgress = useQuery(
    api.modules.getModuleProgress,
    userId && moduleId ? { userId, moduleId } : "skip"
  );

  const completeModule = useMutation(api.modules.completeModule);
  const addBadge = useMutation(api.users.addBadge);

  const [activeSection, setActiveSection] = useState(0);
  const [showComplete, setShowComplete] = useState(false);

  if (!mod) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-4xl mb-4">🔍</p>
          <p className="text-gray-400 text-lg">Module not found</p>
          <Link
            href="/"
            className="text-purple-400 hover:text-purple-300 mt-4 inline-block"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const allModules = getAllModules();
  const currentIndex = allModules.findIndex((m) => m.id === moduleId);
  const prevModule = currentIndex > 0 ? allModules[currentIndex - 1] : null;
  const nextModule =
    currentIndex < allModules.length - 1
      ? allModules[currentIndex + 1]
      : null;

  const isCompleted = moduleProgress?.completed ?? false;

  const handleComplete = async () => {
    if (!userId || isCompleted) return;
    await completeModule({ userId, moduleId, xp: mod.xp });
    if (mod.badge) {
      await addBadge({ userId, badge: mod.badge });
    }
    setShowComplete(true);
    // Fire confetti!
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#a855f7", "#06b6d4", "#3b82f6", "#fbbf24"],
    });
    setTimeout(() => {
      confetti({
        particleCount: 100,
        spread: 100,
        origin: { y: 0.5 },
        colors: ["#a855f7", "#06b6d4", "#3b82f6"],
      });
    }, 300);
  };

  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="relative overflow-hidden bg-gray-900/30 border-b border-gray-800/50">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 py-12">
          <Link
            href="/"
            className="text-gray-500 hover:text-purple-400 transition text-sm mb-4 inline-block"
          >
            ← Back to Tracks
          </Link>

          <div className="flex items-start gap-4 mb-4">
            <span className="text-5xl">{mod.trackIcon}</span>
            <div>
              <p className="text-sm text-purple-400 font-medium mb-1">
                {mod.trackName} • Module {mod.number}
              </p>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                {mod.title}
              </h1>
              <p className="text-gray-400 text-lg">{mod.subtitle}</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 mt-6">
            <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
              {mod.xp} XP
            </span>
            <span className="bg-gray-800 text-gray-400 px-3 py-1 rounded-full text-sm">
              ⏱ {mod.estimatedHours}
            </span>
            {mod.badge && (
              <span className="bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full text-sm">
                🏅 Earns: {mod.badgeLabel}
              </span>
            )}
            {isCompleted && (
              <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">
                ✅ Completed
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 mt-8">
        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-900/40 border border-gray-800 rounded-xl p-6 mb-8"
        >
          <p className="text-gray-300 leading-relaxed">{mod.description}</p>
        </motion.div>

        {/* Section Navigation */}
        <div className="flex flex-wrap gap-2 mb-6">
          {mod.sections.map((section, i) => (
            <button
              key={i}
              onClick={() => setActiveSection(i)}
              className={`px-4 py-2 rounded-lg text-sm transition-all ${
                activeSection === i
                  ? "bg-purple-500/20 text-purple-300 border border-purple-500/30"
                  : "bg-gray-800/50 text-gray-500 hover:text-gray-300 border border-transparent"
              }`}
            >
              {i + 1}. {section.title}
            </button>
          ))}
        </div>

        {/* Active Section Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-900/40 border border-gray-800 rounded-xl p-6 md:p-8 mb-8"
          >
            <h2 className="text-2xl font-bold text-white mb-4">
              {mod.sections[activeSection].title}
            </h2>
            <div className="prose prose-invert prose-purple max-w-none">
              <FormattedContent
                content={mod.sections[activeSection].content}
              />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Tools */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <span>🛠️</span> Tools & Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {mod.tools.map((tool, i) => (
              <div
                key={i}
                className="bg-gray-900/40 border border-gray-800 rounded-xl p-4 hover:border-purple-500/30 transition"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-white">{tool.name}</h3>
                  <CostBadge cost={tool.cost} />
                </div>
                <p className="text-sm text-gray-400 mb-3">{tool.costNote}</p>
                <a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-purple-400 hover:text-purple-300 transition"
                >
                  Visit →
                </a>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Hands-on Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <span>🎯</span> Hands-On Projects
          </h2>
          <div className="space-y-4">
            {mod.handsOn.map((project, i) => (
              <div
                key={i}
                className="bg-gray-900/40 border border-gray-800 rounded-xl p-5"
              >
                <h3 className="font-semibold text-white mb-2">
                  Project {i + 1}: {project.title}
                </h3>
                <p className="text-sm text-gray-400 mb-3 leading-relaxed">
                  {project.description}
                </p>
                <div className="bg-gray-800/50 rounded-lg px-4 py-2">
                  <p className="text-sm text-cyan-400">
                    📦 Deliverable: {project.deliverable}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* YouTube Videos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <span>🎥</span> Video Tutorials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {mod.videos.map((video, i) => (
              <a
                key={i}
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gray-900/40 border border-gray-800 rounded-xl overflow-hidden hover:border-purple-500/30 transition"
              >
                <div className="aspect-video bg-gray-800 flex items-center justify-center relative">
                  <img
                    src={`https://img.youtube.com/vi/${video.url.split("v=")[1]?.split("&")[0]}/mqdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition flex items-center justify-center">
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition">
                      <svg className="w-5 h-5 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-3">
                  <p className="text-sm text-gray-300 group-hover:text-white transition line-clamp-2">
                    {video.title}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Pro Tips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <span>💡</span> Pro Tips
          </h2>
          <div className="bg-gradient-to-br from-purple-500/5 to-cyan-500/5 border border-purple-500/20 rounded-xl p-5">
            <ul className="space-y-3">
              {mod.proTips.map((tip, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300">
                  <span className="text-purple-400 mt-0.5">⚡</span>
                  <span className="text-sm leading-relaxed">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* File Upload Section */}
        {userId && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span>📤</span> Upload Your Deliverables
            </h2>
            <FileUpload userId={userId} moduleId={moduleId} />
            <div className="mt-6">
              <ProjectDashboard userId={userId} moduleId={moduleId} requiredCount={mod.handsOn.length} />
            </div>
          </motion.div>
        )}

        {/* Complete Module Button */}
        {userId && !isCompleted && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-center mb-8"
          >
            <button
              onClick={handleComplete}
              className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-bold py-4 px-12 rounded-xl text-lg transition-all duration-200 transform hover:scale-105 glow-purple"
            >
              ✅ Mark Module as Complete (+{mod.xp} XP)
            </button>
          </motion.div>
        )}

        {/* Completion celebration */}
        <AnimatePresence>
          {showComplete && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
              onClick={() => setShowComplete(false)}
            >
              <motion.div
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                className="bg-gray-900 border border-purple-500/30 rounded-2xl p-8 max-w-md text-center glow-purple"
                onClick={(e) => e.stopPropagation()}
              >
                <p className="text-6xl mb-4">🎉</p>
                <h2 className="text-2xl font-bold text-white mb-2">
                  Module Complete!
                </h2>
                <p className="text-purple-400 text-lg mb-2">+{mod.xp} XP</p>
                {mod.badge && (
                  <p className="text-yellow-400 mb-4">
                    🏅 New Badge: {mod.badgeLabel}
                  </p>
                )}
                <button
                  onClick={() => {
                    setShowComplete(false);
                    if (nextModule) {
                      router.push(`/module/${nextModule.id}`);
                    }
                  }}
                  className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold py-3 px-8 rounded-lg mt-4 hover:from-purple-500 hover:to-cyan-500 transition"
                >
                  {nextModule ? "Next Module →" : "Back to Home"}
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Module Navigation */}
        <div className="flex items-center justify-between pt-8 border-t border-gray-800/50">
          {prevModule ? (
            <Link
              href={`/module/${prevModule.id}`}
              className="text-gray-400 hover:text-purple-400 transition text-sm"
            >
              ← {prevModule.title}
            </Link>
          ) : (
            <div />
          )}
          {nextModule ? (
            <Link
              href={`/module/${nextModule.id}`}
              className="text-gray-400 hover:text-purple-400 transition text-sm"
            >
              {nextModule.title} →
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
}

function CostBadge({ cost }: { cost: string }) {
  const styles: Record<string, string> = {
    free: "bg-green-500/20 text-green-300",
    freemium: "bg-yellow-500/20 text-yellow-300",
    "free-trial": "bg-orange-500/20 text-orange-300",
    paid: "bg-red-500/20 text-red-300",
  };

  const labels: Record<string, string> = {
    free: "FREE",
    freemium: "FREEMIUM",
    "free-trial": "FREE TRIAL",
    paid: "PAID",
  };

  return (
    <span
      className={`text-xs px-2 py-0.5 rounded-full font-medium ${styles[cost] || styles.paid}`}
    >
      {labels[cost] || cost.toUpperCase()}
    </span>
  );
}

function FormattedContent({ content }: { content: string }) {
  // Simple markdown-like formatting
  const lines = content.split("\n");

  return (
    <div className="space-y-4">
      {lines.map((line, i) => {
        const trimmed = line.trim();
        if (!trimmed) return null;

        // Code block
        if (trimmed.startsWith("```")) return null; // Skip code fences
        if (trimmed.startsWith("`") && trimmed.endsWith("`")) {
          return (
            <pre
              key={i}
              className="bg-gray-800/60 rounded-lg p-4 text-sm text-cyan-300 overflow-x-auto"
            >
              <code>{trimmed.slice(1, -1)}</code>
            </pre>
          );
        }

        // Headers
        if (trimmed.startsWith("**") && trimmed.endsWith("**")) {
          return (
            <h3 key={i} className="text-lg font-bold text-white mt-4">
              {trimmed.replace(/\*\*/g, "")}
            </h3>
          );
        }

        // Bold-started lines (like "**Something:** rest")
        if (trimmed.startsWith("**")) {
          const parts = trimmed.split("**");
          return (
            <p key={i} className="text-gray-300 leading-relaxed">
              {parts.map((part, j) =>
                j % 2 === 1 ? (
                  <strong key={j} className="text-white font-semibold">
                    {part}
                  </strong>
                ) : (
                  <span key={j}>{part}</span>
                )
              )}
            </p>
          );
        }

        // List items
        if (trimmed.startsWith("- ") || trimmed.startsWith("• ")) {
          return (
            <div key={i} className="flex items-start gap-2 ml-4">
              <span className="text-purple-400 mt-1 text-xs">●</span>
              <span className="text-gray-300 text-sm leading-relaxed">
                {formatInline(trimmed.slice(2))}
              </span>
            </div>
          );
        }

        // Numbered items
        if (/^\d+\.\s/.test(trimmed)) {
          const num = trimmed.match(/^(\d+)\./)?.[1];
          return (
            <div key={i} className="flex items-start gap-2 ml-4">
              <span className="text-cyan-400 font-mono text-sm mt-0.5 w-5 shrink-0">
                {num}.
              </span>
              <span className="text-gray-300 text-sm leading-relaxed">
                {formatInline(trimmed.replace(/^\d+\.\s*/, ""))}
              </span>
            </div>
          );
        }

        // Warning/info boxes
        if (trimmed.startsWith("⚠️") || trimmed.startsWith("🚩")) {
          return (
            <div
              key={i}
              className="bg-yellow-500/5 border border-yellow-500/20 rounded-lg p-3"
            >
              <p className="text-yellow-200 text-sm leading-relaxed">
                {formatInline(trimmed)}
              </p>
            </div>
          );
        }

        // Checkbox items
        if (trimmed.startsWith("□")) {
          return (
            <div key={i} className="flex items-start gap-2 ml-4">
              <span className="text-gray-500 mt-0.5">☐</span>
              <span className="text-gray-300 text-sm leading-relaxed">
                {formatInline(trimmed.slice(1).trim())}
              </span>
            </div>
          );
        }

        // Regular paragraphs
        return (
          <p key={i} className="text-gray-300 leading-relaxed">
            {formatInline(trimmed)}
          </p>
        );
      })}
    </div>
  );
}

function formatInline(text: string): React.ReactNode {
  // Simple bold formatting
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="text-white font-semibold">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <span key={i}>{part}</span>;
  });
}
