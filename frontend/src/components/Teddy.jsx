import { motion } from "framer-motion";

/**
 * Cute teddy SVG that appears beside the scroll cue, "tugging" the screen
 * downward — bobbing with a tiny pointing arrow gesture.
 */
export default function TeddyScroll({ size = 64, className = "" }) {
  return (
    <motion.div
      className={`relative ${className}`}
      style={{ width: size, height: size + 20 }}
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 80 100" width="100%" height="100%">
        <defs>
          <radialGradient id="teddyBody" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#E8C49A" />
            <stop offset="100%" stopColor="#B57A4D" />
          </radialGradient>
          <radialGradient id="teddyBelly" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="#FBE6CF" />
            <stop offset="100%" stopColor="#E5BE93" />
          </radialGradient>
        </defs>

        {/* Ears */}
        <circle cx="20" cy="20" r="9" fill="url(#teddyBody)" />
        <circle cx="60" cy="20" r="9" fill="url(#teddyBody)" />
        <circle cx="20" cy="20" r="5" fill="#F2DDE2" />
        <circle cx="60" cy="20" r="5" fill="#F2DDE2" />

        {/* Head */}
        <circle cx="40" cy="32" r="20" fill="url(#teddyBody)" />
        {/* Snout */}
        <ellipse cx="40" cy="38" rx="9" ry="7" fill="url(#teddyBelly)" />
        {/* Nose */}
        <ellipse cx="40" cy="34" rx="2.4" ry="1.7" fill="#4A3B42" />
        {/* Mouth */}
        <path d="M 36 39 Q 40 42 44 39" stroke="#4A3B42" strokeWidth="1.1" fill="none" strokeLinecap="round" />
        {/* Eyes */}
        <circle cx="32" cy="29" r="1.8" fill="#4A3B42" />
        <circle cx="48" cy="29" r="1.8" fill="#4A3B42" />
        <circle cx="32.6" cy="28.4" r="0.6" fill="#fff" />
        <circle cx="48.6" cy="28.4" r="0.6" fill="#fff" />
        {/* Cheeks */}
        <circle cx="26" cy="36" r="2.2" fill="#F2A6B0" opacity="0.6" />
        <circle cx="54" cy="36" r="2.2" fill="#F2A6B0" opacity="0.6" />

        {/* Body */}
        <ellipse cx="40" cy="68" rx="18" ry="20" fill="url(#teddyBody)" />
        <ellipse cx="40" cy="70" rx="11" ry="13" fill="url(#teddyBelly)" />

        {/* Arms — animated to "pull" downward */}
        <motion.ellipse
          cx="20" cy="62" rx="6" ry="9" fill="url(#teddyBody)"
          style={{ originX: "20px", originY: "55px" }}
          animate={{ rotate: [-10, 18, -10] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.ellipse
          cx="60" cy="62" rx="6" ry="9" fill="url(#teddyBody)"
          style={{ originX: "60px", originY: "55px" }}
          animate={{ rotate: [10, -18, 10] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Feet */}
        <ellipse cx="30" cy="92" rx="7" ry="5" fill="url(#teddyBody)" />
        <ellipse cx="50" cy="92" rx="7" ry="5" fill="url(#teddyBody)" />
        <ellipse cx="30" cy="93" rx="3" ry="2" fill="#F2DDE2" />
        <ellipse cx="50" cy="93" rx="3" ry="2" fill="#F2DDE2" />

        {/* Tiny pink bow on head */}
        <path d="M 35 11 L 40 16 L 45 11 L 43 17 L 40 16 L 37 17 Z" fill="#E68B98" />
        <circle cx="40" cy="16" r="1.5" fill="#B76E79" />
      </svg>
    </motion.div>
  );
}
