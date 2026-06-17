"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Stat = {
  difficulty: string;
  count: number;
};

// Dummy data for visual design since the API might not be connected yet
const dummyStats: Stat[] = [
  { difficulty: "Easy", count: 124 },
  { difficulty: "Medium", count: 85 },
  { difficulty: "Hard", count: 12 },
  { difficulty: "Total", count: 221 },
];

export default function LeetCodeStats() {
  const [stats, setStats] = useState<Stat[]>(dummyStats);
  const [ranking, setRanking] = useState<number | null>(124530);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      try {
        const res = await fetch("/api/leetcode");
        if (res.ok) {
          const data = await res.json();
          setStats(data.stats);
          setRanking(data.ranking);
        }
      } catch (e) {
        console.error("Failed to fetch LeetCode stats");
      } finally {
        setLoading(false);
      }
    }
    fetchStats();
  }, []);

  const getDifficultyColor = (diff: string) => {
    switch (diff.toLowerCase()) {
      case "easy": return "text-emerald-600";
      case "medium": return "text-amber-500";
      case "hard": return "text-rose-600";
      default: return "text-brand-600";
    }
  };

  return (
    <section className="py-24 px-6 relative z-10 w-full">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 inline-block relative text-slate-900">
            Problem Solving
            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-accent-500 to-transparent rounded-full" />
          </h2>
          <p className="text-slate-500 mt-6 max-w-lg mx-auto text-lg">
            Consistent learning and algorithmic problem solving on LeetCode.
          </p>
        </motion.div>

        <div className="glass-card p-8 md:p-12 relative overflow-hidden bg-white/60">
          {/* Subtle background gradient */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />

          {loading ? (
            <div className="flex justify-center items-center h-32">
              <div className="w-8 h-8 rounded-full border-2 border-brand-600 border-t-transparent animate-spin" />
            </div>
          ) : (
            <>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                {stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col items-center justify-center relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <p className="text-sm font-semibold text-slate-500 mb-2 z-10 uppercase tracking-wider">
                      {stat.difficulty}
                    </p>
                    <p className={`text-4xl font-heading font-bold ${getDifficultyColor(stat.difficulty)} z-10 drop-shadow-sm`}>
                      {stat.count}
                    </p>
                  </motion.div>
                ))}
              </div>

              {ranking !== null && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex items-center justify-center gap-3 p-4 rounded-xl bg-gradient-to-r from-brand-50 to-accent-50 border border-brand-100 shadow-sm"
                >
                  <svg className="w-6 h-6 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-lg text-slate-600 font-medium">
                    Global Ranking: <strong className="text-slate-900 text-xl ml-1">#{ranking.toLocaleString()}</strong>
                  </span>
                </motion.div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
