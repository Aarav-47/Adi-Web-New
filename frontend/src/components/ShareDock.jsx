import { useState } from "react";
import { motion } from "framer-motion";
import { Share2, Link2, MessageCircle, Check } from "lucide-react";
import { T } from "@/data/content";
import { useLang } from "@/App";

export default function ShareDock() {
  const { lang } = useLang();
  const t = T[lang].share;
  const [copied, setCopied] = useState(false);
  const url = typeof window !== "undefined" ? window.location.href : "";

  const handleWhatsApp = () => {
    const txt = encodeURIComponent(t.message + url);
    window.open(`https://wa.me/?text=${txt}`, "_blank", "noopener,noreferrer");
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // fallback
      const ta = document.createElement("textarea");
      ta.value = url;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    }
  };

  const handleNative = async () => {
    if (navigator.share) {
      try { await navigator.share({ title: "Aditiri Arya · Celebration", text: t.message, url }); } catch {}
    } else handleWhatsApp();
  };

  return (
    <div data-testid="share-dock" className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
      <motion.button
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.96 }}
        onClick={handleWhatsApp}
        data-testid="share-whatsapp"
        className="btn-press flex items-center gap-2 px-5 py-3 rounded-full text-white text-sm font-medium"
        style={{ background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)", boxShadow: "0 10px 24px -6px rgba(37,211,102,0.5)" }}
      >
        <MessageCircle className="w-4 h-4" />
        <span className={lang === "hi" ? "font-body-hi" : ""}>{t.whatsapp}</span>
      </motion.button>

      <motion.button
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.96 }}
        onClick={handleCopy}
        data-testid="share-copy"
        className="btn-press flex items-center gap-2 px-5 py-3 rounded-full glass-card text-sm font-medium text-[#4A3B42]"
        style={{ border: "1px solid rgba(212,175,55,0.4)" }}
      >
        {copied ? <Check className="w-4 h-4 text-[#B76E79]" /> : <Link2 className="w-4 h-4 text-[#B76E79]" />}
        <span className={lang === "hi" ? "font-body-hi" : ""}>
          {copied ? t.copied : t.copy}
        </span>
      </motion.button>

      <motion.button
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.96 }}
        onClick={handleNative}
        data-testid="share-native"
        className="btn-press flex items-center gap-2 px-5 py-3 rounded-full text-white text-sm font-medium"
        style={{ background: "linear-gradient(135deg, #B76E79 0%, #8C4A56 100%)", boxShadow: "0 10px 24px -6px rgba(183,110,121,0.5)" }}
      >
        <Share2 className="w-4 h-4" />
        <span className={lang === "hi" ? "font-body-hi" : ""}>{t.title}</span>
      </motion.button>
    </div>
  );
}
