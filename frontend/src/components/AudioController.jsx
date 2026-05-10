import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX, Music } from "lucide-react";
import { T, YT_MUSIC_ID } from "@/data/content";
import { useLang } from "@/App";

/**
 * Hidden YouTube player. The iframe is mounted on first render (during the
 * splash) so the YT IFrame API has time to initialise. As soon as the user
 * picks a language, `playing` flips to true and we postMessage `playVideo` —
 * the player is already warm so playback starts almost immediately.
 *
 * NOTE: We auto-mute the iframe at startup so YouTube allows it to spin up
 * even before user interaction. On lang-select, we unMute + playVideo.
 */
export default function AudioController({ playing, setPlaying, visible }) {
  const iframeRef = useRef(null);
  const [ready, setReady] = useState(false);
  const { lang } = useLang();
  const t = T[lang].audio;

  const send = (func, args = []) => {
    const f = iframeRef.current;
    if (!f || !f.contentWindow) return;
    f.contentWindow.postMessage(
      JSON.stringify({ event: "command", func, args }),
      "*"
    );
  };

  // Listen for the YT player's onReady event so we know when commands will work
  useEffect(() => {
    const onMsg = (e) => {
      if (typeof e.data !== "string") return;
      try {
        const d = JSON.parse(e.data);
        if (d.event === "onReady" || d.event === "infoDelivery") setReady(true);
      } catch {}
    };
    window.addEventListener("message", onMsg);
    // Send a "listening" handshake so YouTube starts emitting events
    const t = setTimeout(() => {
      const f = iframeRef.current;
      if (f && f.contentWindow) {
        f.contentWindow.postMessage(
          JSON.stringify({ event: "listening", id: 1, channel: "widget" }),
          "*"
        );
      }
    }, 500);
    return () => {
      window.removeEventListener("message", onMsg);
      clearTimeout(t);
    };
  }, []);

  // React to play/pause state
  useEffect(() => {
    const tryPlay = () => {
      send("unMute");
      send("setVolume", [55]);
      send("playVideo");
    };
    if (playing) {
      // Issue immediately, and also after a small delay in case ready event
      // hasn't fired yet
      tryPlay();
      const t1 = setTimeout(tryPlay, 350);
      const t2 = setTimeout(tryPlay, 1000);
      return () => { clearTimeout(t1); clearTimeout(t2); };
    } else {
      send("pauseVideo");
    }
  }, [playing, ready]);

  // Iframe URL — mute=1 so it can preload silently before user gesture
  const src = `https://www.youtube.com/embed/${YT_MUSIC_ID}?enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=${YT_MUSIC_ID}&controls=0&modestbranding=1&playsinline=1&rel=0&iv_load_policy=3`;

  return (
    <>
      <iframe
        ref={iframeRef}
        title="ambient-music"
        src={src}
        allow="autoplay; encrypted-media"
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          width: 1,
          height: 1,
          opacity: 0,
          pointerEvents: "none",
          border: 0,
          zIndex: -1,
        }}
        aria-hidden="true"
      />

      {visible && (
        <motion.button
          data-testid="audio-toggle"
          aria-label={playing ? t.pause : t.play}
          title={playing ? t.pause : t.play}
          onClick={() => setPlaying((p) => !p)}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, type: "spring", stiffness: 220, damping: 18 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          className="fixed top-5 right-5 z-50 w-12 h-12 rounded-full glass-card flex items-center justify-center text-[#8C4A56] hover:text-[#B76E79] shadow-lg"
          style={{ border: "1px solid rgba(212,175,55,0.45)" }}
        >
          <motion.span
            animate={playing ? { rotate: 360 } : { rotate: 0 }}
            transition={{ duration: 8, repeat: playing ? Infinity : 0, ease: "linear" }}
            className="absolute pointer-events-none"
          >
            <Music className="w-3.5 h-3.5 opacity-30 absolute -top-2 -left-2" />
          </motion.span>
          {playing ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
        </motion.button>
      )}
    </>
  );
}
