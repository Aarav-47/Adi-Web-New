import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { GANESHA_IMG, T } from "@/data/content";

export default function WelcomeSplash({ onEnter }) {
  const [chosen, setChosen] = useState(null);

  const handleSelect = (lng) => {
    setChosen(lng);
    setTimeout(() => onEnter(lng), 900); // allow exit anim
  };

  // Generate floating golden particles
  const vh = typeof window !== "undefined" ? window.innerHeight : 800;
  const particles = Array.from({ length: 28 }, (_, i) => i);

  return (
    <motion.div
      data-testid="welcome-splash"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.04, filter: "blur(8px)" }}
      transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
      className="fixed inset-0 z-[100] overflow-hidden flex flex-col items-center justify-center"
      style={{
        background:
          "radial-gradient(ellipse at 50% 0%, #FFF6E8 0%, #FBE6E9 35%, #F8D5DC 65%, #F2C0C9 100%)",
      }}
    >
      {/* Floating gold particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((i) => (
          <motion.span
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${(i * 37) % 100}%`,
              bottom: `-10px`,
              width: 4 + (i % 4) * 2,
              height: 4 + (i % 4) * 2,
              background:
                i % 3 === 0
                  ? "radial-gradient(circle, #F4D788 0%, rgba(244,215,136,0) 70%)"
                  : "radial-gradient(circle, #FFD9DC 0%, rgba(255,217,220,0) 70%)",
              boxShadow: "0 0 8px rgba(212,175,55,0.7)",
            }}
            animate={{
              y: [0, -vh - 40],
              x: [0, (i % 2 ? 1 : -1) * (20 + (i % 5) * 10)],
              opacity: [0, 1, 1, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 9 + (i % 6),
              delay: (i % 9) * 0.4,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* Soft radial vignette */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(circle at 50% 40%, transparent 0%, rgba(74,59,66,0.18) 100%)" }} />

      <div className="relative z-10 flex flex-col items-center px-6 text-center max-w-2xl">

        {/* Mantra */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="font-display-hi text-[#8C4A56] text-2xl sm:text-3xl mb-6 tracking-wide"
          style={{ textShadow: "0 0 20px rgba(244,215,136,0.6)" }}
          data-testid="welcome-mantra"
        >
          ॐ श्री गणेशाय नमः
        </motion.p>

        {/* Ganesha image with halo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative mb-8"
        >
          {/* Halo */}
          <motion.div
            className="absolute inset-0 -m-8 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(244,215,136,0.55) 0%, rgba(244,215,136,0.18) 40%, transparent 70%)",
            }}
            animate={{ scale: [1, 1.08, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-44 h-44 sm:w-56 sm:h-56 rounded-full overflow-hidden anim-glow"
            style={{
              boxShadow:
                "0 0 0 2px rgba(212,175,55,0.6), 0 0 0 8px rgba(255,255,255,0.85), 0 0 0 9px rgba(212,175,55,0.45), 0 30px 60px -10px rgba(140,74,86,0.4)",
            }}
          >
            <img
              src={GANESHA_IMG}
              alt="Lord Ganesha"
              className="w-full h-full object-cover"
              draggable={false}
            />
          </motion.div>
        </motion.div>

        {/* Welcome text */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.95 }}
          className="font-body-en text-[11px] sm:text-xs tracking-[0.35em] uppercase text-[#6B5862] mb-2"
        >
          Welcome to
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 1.1 }}
          className="font-display-en italic text-3xl sm:text-5xl shimmer-text mb-1"
        >
          Aditiri Arya&apos;s
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 1.25 }}
          className="font-display-en text-2xl sm:text-3xl text-[#4A3B42] mb-10"
        >
          Celebration
        </motion.p>

        {/* Language buttons */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="font-body-en text-[10px] sm:text-xs tracking-[0.4em] uppercase text-[#8C4A56] mb-5"
        >
          Choose your language · भाषा चुनें
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.65 }}
          className="flex flex-col sm:flex-row gap-4 w-full max-w-md"
        >
          <button
            data-testid="lang-select-en"
            onClick={() => handleSelect("en")}
            disabled={!!chosen}
            className="btn-press group flex-1 px-7 py-4 rounded-full glass-card font-display-en italic text-lg sm:text-xl text-[#4A3B42] border border-[#D4AF37]/40 hover:bg-white/80 disabled:opacity-50 flex items-center justify-center gap-3"
          >
            <Sparkles className="w-4 h-4 text-[#D4AF37] group-hover:rotate-12 transition-transform" />
            <span>English</span>
          </button>

          <button
            data-testid="lang-select-hi"
            onClick={() => handleSelect("hi")}
            disabled={!!chosen}
            className="btn-press group flex-1 px-7 py-4 rounded-full font-display-hi text-xl sm:text-2xl text-white border border-[#D4AF37]/40 disabled:opacity-50 flex items-center justify-center gap-3"
            style={{ background: "linear-gradient(135deg, #B76E79 0%, #8C4A56 100%)" }}
          >
            <span>हिन्दी</span>
            <Sparkles className="w-4 h-4 text-[#F4D788] group-hover:rotate-12 transition-transform" />
          </button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="font-script text-sm text-[#8C4A56]/70 mt-8"
        >
          {chosen ? T[chosen].welcome.enter + " ✦" : "An invocation of blessings before the joy begins"}
        </motion.p>
      </div>
    </motion.div>
  );
}
