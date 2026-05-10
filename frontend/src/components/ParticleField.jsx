import { useMemo } from "react";

// Floating petals + sparkles + butterflies — pure CSS, perf-friendly
export default function ParticleField() {
  const items = useMemo(() => {
    const arr = [];
    // 18 petals
    for (let i = 0; i < 18; i++) {
      arr.push({
        type: i % 5 === 0 ? "sparkle" : "petal",
        left: Math.random() * 100,
        size: 6 + Math.random() * 14,
        duration: 14 + Math.random() * 18,
        delay: Math.random() * 16,
        hue: i % 3,
      });
    }
    return arr;
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[5] overflow-hidden" aria-hidden="true">
      {items.map((p, i) => (
        <span
          key={i}
          className="absolute anim-float-up"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            opacity: p.type === "sparkle" ? 0.9 : 0.55,
          }}
        >
          {p.type === "petal" ? (
            <svg viewBox="0 0 24 24" width="100%" height="100%">
              <defs>
                <linearGradient id={`pg${i}`} x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor={p.hue === 0 ? "#FFD9DC" : p.hue === 1 ? "#F8C7CF" : "#F4D788"} />
                  <stop offset="1" stopColor={p.hue === 0 ? "#F2A6B0" : p.hue === 1 ? "#D89AA3" : "#E6C868"} />
                </linearGradient>
              </defs>
              <path
                d="M12 2 C 16 6, 20 8, 18 14 C 16 20, 8 20, 6 14 C 4 8, 8 6, 12 2 Z"
                fill={`url(#pg${i})`}
                opacity="0.85"
              />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" width="100%" height="100%" className="anim-twinkle">
              <path
                d="M12 0 L13.5 10 L24 12 L13.5 14 L12 24 L10.5 14 L0 12 L10.5 10 Z"
                fill="#F4D788"
                opacity="0.9"
              />
            </svg>
          )}
        </span>
      ))}

      {/* Soft drifting butterflies */}
      {[0, 1, 2].map((i) => (
        <span
          key={`bf-${i}`}
          className="absolute anim-drift-x"
          style={{
            top: `${15 + i * 28}%`,
            animationDuration: `${28 + i * 8}s`,
            animationDelay: `${i * 6}s`,
            fontSize: 22 + i * 4,
          }}
        >
          <span className="inline-block anim-flap" style={{ filter: "drop-shadow(0 4px 6px rgba(183,110,121,0.3))" }}>
            <svg width="32" height="22" viewBox="0 0 32 22">
              <ellipse cx="9" cy="11" rx="9" ry="10" fill="#F8C7CF" opacity="0.85" />
              <ellipse cx="23" cy="11" rx="9" ry="10" fill="#F4D788" opacity="0.85" />
              <line x1="16" y1="2" x2="16" y2="20" stroke="#8C4A56" strokeWidth="1.2" />
            </svg>
          </span>
        </span>
      ))}
    </div>
  );
}
