"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Id } from "../../convex/_generated/dataModel";
import { motion, AnimatePresence } from "framer-motion";

interface AuthContextType {
  userId: Id<"users"> | null;
  userName: string | null;
  isLoading: boolean;
  login: (name: string, pin: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  userId: null,
  userName: null,
  isLoading: true,
  login: async () => {},
  logout: () => {},
});

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [userId, setUserId] = useState<Id<"users"> | null>(null);
  const [userName, setUserName] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showLogin, setShowLogin] = useState(false);
  const [loginName, setLoginName] = useState("");
  const [loginPin, setLoginPin] = useState("");
  const [error, setError] = useState("");

  const loginMutation = useMutation(api.users.login);

  useEffect(() => {
    const stored = localStorage.getItem("mason-ai-edge-user");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setUserId(parsed.userId);
        setUserName(parsed.userName);
      } catch {
        localStorage.removeItem("mason-ai-edge-user");
      }
    }
    setIsLoading(false);
    // Show login after a short delay if not logged in
    const timer = setTimeout(() => {
      const s = localStorage.getItem("mason-ai-edge-user");
      if (!s) setShowLogin(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const login = async (name: string, pin: string) => {
    try {
      const id = await loginMutation({ name, pin });
      setUserId(id);
      setUserName(name);
      localStorage.setItem(
        "mason-ai-edge-user",
        JSON.stringify({ userId: id, userName: name })
      );
      setShowLogin(false);
      setError("");
    } catch (e: any) {
      setError(e.message || "Login failed");
    }
  };

  const logout = () => {
    setUserId(null);
    setUserName(null);
    localStorage.removeItem("mason-ai-edge-user");
    setShowLogin(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!loginName.trim() || !loginPin.trim()) {
      setError("Enter both name and PIN");
      return;
    }
    await login(loginName.trim(), loginPin.trim());
  };

  return (
    <AuthContext.Provider
      value={{ userId, userName, isLoading, login, logout }}
    >
      <AnimatePresence>
        {showLogin && !userId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gray-900 border border-purple-500/30 rounded-2xl p-8 w-full max-w-md mx-4 glow-purple"
            >
              <div className="text-center mb-6">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Mason&apos;s AI Edge
                </h1>
                <p className="text-gray-400 mt-2">
                  Enter your name and a PIN to get started
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    value={loginName}
                    onChange={(e) => setLoginName(e.target.value)}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition"
                    placeholder="Mason"
                    autoFocus
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">
                    PIN (4+ digits)
                  </label>
                  <input
                    type="password"
                    value={loginPin}
                    onChange={(e) => setLoginPin(e.target.value)}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition"
                    placeholder="••••"
                  />
                </div>
                {error && (
                  <p className="text-red-400 text-sm text-center">{error}</p>
                )}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-semibold py-3 rounded-lg transition-all duration-200 transform hover:scale-[1.02]"
                >
                  Enter the Matrix
                </button>
              </form>

              <p className="text-gray-500 text-xs text-center mt-4">
                First time? Just pick a name and PIN. It&apos;ll create your
                account.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </AuthContext.Provider>
  );
}
