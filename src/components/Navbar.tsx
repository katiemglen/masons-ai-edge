"use client";

import Link from "next/link";
import { useAuth } from "./AuthProvider";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const { userId, userName, logout } = useAuth();
  const user = useQuery(api.users.getUser, userId ? { userId } : "skip");
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-gray-950/80 backdrop-blur-xl border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">⚡</span>
            <span className="text-lg font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              AI Edge
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="text-gray-300 hover:text-purple-400 transition text-sm"
            >
              Home
            </Link>
            <Link
              href="/dashboard"
              className="text-gray-300 hover:text-purple-400 transition text-sm"
            >
              Dashboard
            </Link>
            <Link
              href="/profile"
              className="text-gray-300 hover:text-purple-400 transition text-sm"
            >
              Profile
            </Link>

            {user && (
              <div className="flex items-center gap-3 ml-4 pl-4 border-l border-gray-700">
                <div className="flex items-center gap-2 bg-gray-800/50 rounded-full px-3 py-1">
                  <span className="text-purple-400 text-sm font-mono">
                    Lv.{user.level}
                  </span>
                  <span className="text-yellow-400 text-sm font-mono">
                    {user.xp} XP
                  </span>
                  {user.streak > 0 && (
                    <span className="text-orange-400 text-sm">
                      🔥{user.streak}
                    </span>
                  )}
                </div>
                <span className="text-sm text-gray-400">{userName}</span>
                <button
                  onClick={logout}
                  className="text-xs text-gray-500 hover:text-red-400 transition"
                >
                  Logout
                </button>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-gray-300 hover:text-white"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden pb-4 space-y-3"
          >
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="block text-gray-300 hover:text-purple-400 transition"
            >
              Home
            </Link>
            <Link
              href="/dashboard"
              onClick={() => setMobileOpen(false)}
              className="block text-gray-300 hover:text-purple-400 transition"
            >
              Dashboard
            </Link>
            <Link
              href="/profile"
              onClick={() => setMobileOpen(false)}
              className="block text-gray-300 hover:text-purple-400 transition"
            >
              Profile
            </Link>
            {user && (
              <div className="pt-2 border-t border-gray-800">
                <p className="text-sm text-gray-400">
                  {userName} • Lv.{user.level} • {user.xp} XP
                  {user.streak > 0 ? ` • 🔥${user.streak}` : ""}
                </p>
                <button
                  onClick={() => {
                    logout();
                    setMobileOpen(false);
                  }}
                  className="text-sm text-red-400 mt-2"
                >
                  Logout
                </button>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </nav>
  );
}
