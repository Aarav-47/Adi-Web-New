import { useState, useEffect, createContext, useContext } from "react";
import { AnimatePresence } from "framer-motion";
import "@/App.css";
import WelcomeSplash from "@/components/WelcomeSplash";
import Invitation from "@/components/Invitation";
import AudioController from "@/components/AudioController";
import ParticleField from "@/components/ParticleField";

// Language context
const LangCtx = createContext({ lang: "en", setLang: () => {} });
export const useLang = () => useContext(LangCtx);

function App() {
  const [lang, setLang] = useState("en");
  const [entered, setEntered] = useState(false);
  const [audioPlaying, setAudioPlaying] = useState(false);

  // Lock scroll while splash is up
  useEffect(() => {
    document.body.style.overflow = entered ? "auto" : "hidden";
  }, [entered]);

  return (
    <LangCtx.Provider value={{ lang, setLang }}>
      <div className="App grain min-h-screen relative" data-testid="app-root">
        {/* AudioController is ALWAYS mounted so the YouTube iframe preloads
            during the splash screen — music starts instantly on lang pick. */}
        <AudioController playing={audioPlaying} setPlaying={setAudioPlaying} visible={entered} />

        <AnimatePresence mode="wait">
          {!entered && (
            <WelcomeSplash
              key="splash"
              onEnter={(chosen) => {
                setLang(chosen);
                setAudioPlaying(true); // Start music the moment user picks language
                setEntered(true);
              }}
            />
          )}
        </AnimatePresence>

        {entered && (
          <>
            <ParticleField />
            <Invitation />
          </>
        )}
      </div>
    </LangCtx.Provider>
  );
}

export default App;
