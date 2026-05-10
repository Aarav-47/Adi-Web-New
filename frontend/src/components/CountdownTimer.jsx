import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { EVENT, T } from "@/data/content";
import { useLang } from "@/App";

const calc = (target) => {
  const diff = Math.max(0, target.getTime() - Date.now());
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff / 3600000) % 24);
  const m = Math.floor((diff / 60000) % 60);
  const s = Math.floor((diff / 1000) % 60);
  return { d, h, m, s };
};

export default function CountdownTimer() {
  const { lang } = useLang();
  const [time, setTime] = useState(() => calc(EVENT.date));
  const t = T[lang].event;

  useEffect(() => {
    const id = setInterval(() => setTime(calc(EVENT.date)), 1000);
    return () => clearInterval(id);
  }, []);

  const items = [
    { key: "d", val: time.d, label: t.d },
    { key: "h", val: time.h, label: t.h },
    { key: "m", val: time.m, label: t.m },
    { key: "s", val: time.s, label: t.s },
  ];

  return (
    <div data-testid="countdown-timer" className="w-full">
      <p className={`text-center mb-5 text-xs sm:text-sm tracking-[0.25em] uppercase text-[#8C4A56]/80 ${lang === "hi" ? "font-body-hi" : "font-body-en"}`}>
        {t.countdown}
      </p>
      <div className="grid grid-cols-4 gap-2 sm:gap-4">
        {items.map((it, i) => (
          <motion.div
            key={it.key}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="relative rounded-2xl p-3 sm:p-5 text-center glass-card"
            style={{ boxShadow: "0 8px 32px rgba(183,110,121,0.12)" }}
          >
            <div className="font-display-en text-3xl sm:text-5xl gold-text font-semibold tabular-nums">
              {String(it.val).padStart(2, "0")}
            </div>
            <div className={`mt-1 text-[10px] sm:text-xs tracking-[0.2em] uppercase text-[#8C4A56] ${lang === "hi" ? "font-body-hi" : "font-body-en"}`}>
              {it.label}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
