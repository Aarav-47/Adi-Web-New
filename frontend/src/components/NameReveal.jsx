import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles } from "lucide-react";
import { useLang } from "@/App";
import { T } from "@/data/content";
import Teddy from "@/components/Teddy";

/**
 * Cinematic name-reveal section. A wrapped pink gift box sits centred. A cute
 * teddy walks in from the left, taps the box, the ribbon unties, the lid lifts
 * and the baby's name emerges with sparkles & confetti.
 *
 * The full sequence runs once when the section enters the viewport.
 */
export default function NameReveal() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });
  const { lang } = useLang();
  const name = lang === "hi" ? "अदित्री आर्या" : "Aditiri Arya";
  const tag = lang === "hi" ? "हमारी नन्ही परी" : "Our Little Princess";
  const eyebrow = lang === "hi" ? "नामकरण की झलक" : "A Special Reveal";

  return (
    <section
      ref={ref}
      data-testid="name-reveal"
      className="relative py-20 sm:py-28 px-5 sm:px-10 text-center overflow-hidden"
    >
      {/* Eyebrow */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className={`text-[10px] sm:text-xs uppercase text-[#8C4A56]/80 mb-10 ${
          lang === "hi" ? "font-body-hi tracking-normal normal-case" : "font-body-en tracking-[0.4em]"
        }`}
      >
        <span className="inline-block w-6 h-px bg-[#D4AF37] align-middle mr-2" />
        {eyebrow}
        <span className="inline-block w-6 h-px bg-[#D4AF37] align-middle ml-2" />
      </motion.p>

      <div className="relative max-w-md mx-auto h-[420px] sm:h-[460px]">
        {/* Confetti burst on reveal */}
        {inView && (
          <div className="absolute inset-0 pointer-events-none">
            {Array.from({ length: 18 }).map((_, i) => (
              <motion.span
                key={i}
                className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full"
                style={{
                  background: ["#F8C7CF", "#F4D788", "#D4AF37", "#B76E79", "#FFD9DC"][i % 5],
                }}
                initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
                animate={{
                  x: Math.cos((i / 18) * Math.PI * 2) * (140 + (i % 4) * 22),
                  y: Math.sin((i / 18) * Math.PI * 2) * (140 + (i % 4) * 22),
                  opacity: [0, 1, 0],
                  scale: [0, 1.2, 0],
                  rotate: i * 36,
                }}
                transition={{ delay: 2.6, duration: 1.6, ease: "easeOut" }}
              />
            ))}
          </div>
        )}

        {/* Teddy that walks in from left, taps the gift, then steps back */}
        <motion.div
          className="absolute bottom-0 left-0 z-20"
          initial={{ x: -180, y: 0 }}
          animate={
            inView
              ? {
                  x: [-180, 30, 30, 30, -40, -180],
                  y: [0, 0, -8, 0, 0, 0],
                  rotate: [0, 0, -8, 0, 0, 0],
                }
              : {}
          }
          transition={{ duration: 4.5, times: [0, 0.35, 0.45, 0.6, 0.85, 1], ease: "easeInOut" }}
        >
          <Teddy size={86} />
        </motion.div>

        {/* Gift Box */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-12 w-48 sm:w-56 h-48 sm:h-56">
          {/* Lid (lifts up) */}
          <motion.div
            className="absolute -top-2 left-0 right-0 h-12 rounded-t-xl z-10"
            style={{
              background: "linear-gradient(135deg, #F8C7CF 0%, #E68B98 60%, #B76E79 100%)",
              boxShadow: "0 6px 14px -4px rgba(140,74,86,0.4)",
            }}
            initial={{ y: 0, rotate: 0, opacity: 1 }}
            animate={inView ? { y: -120, rotate: -18, opacity: 0 } : {}}
            transition={{ delay: 2.4, duration: 0.9, ease: [0.34, 1.56, 0.64, 1] }}
          />
          {/* Box body */}
          <motion.div
            className="absolute inset-x-0 top-10 bottom-0 rounded-xl"
            style={{
              background: "linear-gradient(135deg, #F8C7CF 0%, #E8A1AC 50%, #B76E79 100%)",
              boxShadow: "0 14px 36px -8px rgba(140,74,86,0.45), inset 0 -8px 16px rgba(140,74,86,0.2)",
            }}
            initial={{ scale: 1, y: 0 }}
            animate={inView ? { scale: [1, 1.03, 1, 1.03, 0.95], y: [0, 0, 0, 0, 6] } : {}}
            transition={{ delay: 1.6, duration: 1.4, times: [0, 0.2, 0.4, 0.6, 1] }}
          />
          {/* Vertical ribbon */}
          <motion.div
            className="absolute top-10 bottom-0 left-1/2 -translate-x-1/2 w-5 z-10"
            style={{ background: "linear-gradient(180deg, #F4D788 0%, #D4AF37 100%)" }}
            initial={{ opacity: 1 }}
            animate={inView ? { opacity: [1, 1, 0] } : {}}
            transition={{ delay: 2.2, duration: 0.6 }}
          />
          {/* Horizontal ribbon */}
          <motion.div
            className="absolute left-0 right-0 top-[55%] h-5 z-10"
            style={{ background: "linear-gradient(90deg, #D4AF37 0%, #F4D788 50%, #D4AF37 100%)" }}
            initial={{ opacity: 1, scaleX: 1 }}
            animate={inView ? { opacity: [1, 1, 0], scaleX: [1, 1, 0] } : {}}
            transition={{ delay: 2.2, duration: 0.6 }}
          />
          {/* Ribbon Bow on top */}
          <motion.div
            className="absolute top-2 left-1/2 -translate-x-1/2 z-20"
            initial={{ opacity: 1, scale: 1, y: 0 }}
            animate={inView ? { opacity: [1, 1, 0], scale: [1, 1.2, 0], y: [0, -10, -40] } : {}}
            transition={{ delay: 2.0, duration: 0.7 }}
          >
            <svg width="56" height="34" viewBox="0 0 56 34">
              <path d="M 12 17 Q 0 5 4 17 Q 0 29 12 17 Z" fill="#D4AF37" />
              <path d="M 44 17 Q 56 5 52 17 Q 56 29 44 17 Z" fill="#D4AF37" />
              <ellipse cx="28" cy="17" rx="7" ry="6" fill="#B8860B" />
              <circle cx="28" cy="17" r="2" fill="#F4D788" />
            </svg>
          </motion.div>

          {/* Sparkles around the box */}
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="absolute z-20"
              style={{
                top: `${[10, 14, 70, 78][i]}%`,
                left: `${[-8, 92, -6, 96][i]}%`,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { opacity: [0, 1, 0], scale: [0, 1.2, 0] } : {}}
              transition={{ delay: 2.6 + i * 0.15, duration: 1.2, repeat: 2, repeatDelay: 0.3 }}
            >
              <Sparkles className="w-5 h-5 text-[#D4AF37]" />
            </motion.div>
          ))}
        </div>

        {/* Name reveal — emerges from inside the box */}
        <motion.div
          className="absolute inset-x-0 top-[12%] flex flex-col items-center z-30 px-4"
          initial={{ opacity: 0, scale: 0.4, y: 80 }}
          animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ delay: 2.8, duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <p
            className={`mb-2 text-[11px] sm:text-xs italic ${
              lang === "hi" ? "font-display-hi text-[#8C4A56]" : "font-display-en text-[#8C4A56]"
            }`}
          >
            {tag}
          </p>
          <h2
            data-testid="reveal-name"
            className={`${
              lang === "hi"
                ? "font-display-hi lh-hi text-4xl sm:text-5xl"
                : "font-display-en italic text-5xl sm:text-7xl"
            } ${lang === "hi" ? "rose-solid" : "rose-text"} leading-[1.15]`}
            style={{
              filter: "drop-shadow(0 4px 16px rgba(212,175,55,0.45)) drop-shadow(0 0 28px rgba(248,200,207,0.6))",
            }}
          >
            {name}
          </h2>
          {/* Gold underline */}
          <motion.div
            className="mt-3 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
            initial={{ width: 0 }}
            animate={inView ? { width: 220 } : {}}
            transition={{ delay: 3.6, duration: 0.9 }}
          />
        </motion.div>
      </div>
    </section>
  );
}
