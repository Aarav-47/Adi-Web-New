import { motion } from "framer-motion";
import { useState, useRef, useCallback } from "react";
import {
  MapPin, Phone, Calendar, Clock, Heart, Crown, Star,
  Navigation as NavIcon, Sparkles, Download, Image as ImageIcon,
} from "lucide-react";
import { T, PHOTOS, EVENT, CONTACTS, FLORAL_BG } from "@/data/content";
import { useLang } from "@/App";
import CountdownTimer from "@/components/CountdownTimer";
import ShareDock from "@/components/ShareDock";
import NameReveal from "@/components/NameReveal";
import AddToCalendar from "@/components/AddToCalendar";
import Teddy from "@/components/Teddy";

const reveal = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = (delay = 0) => ({
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: delay } },
});

const Section = ({ id, children, className = "", testid }) => (
  <motion.section
    id={id}
    data-testid={testid}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: "-80px" }}
    variants={reveal}
    className={`relative py-20 sm:py-28 px-5 sm:px-10 ${className}`}
  >
    {children}
  </motion.section>
);

const Eyebrow = ({ children }) => {
  const { lang } = useLang();
  const isHi = lang === "hi";
  return (
    <p className={`text-[10px] sm:text-xs uppercase text-[#8C4A56]/80 mb-3 ${isHi ? "font-body-hi tracking-normal normal-case" : "font-body-en tracking-[0.4em]"}`}>
      <span className="inline-block w-6 h-px bg-[#D4AF37] align-middle mr-2" />
      {children}
      <span className="inline-block w-6 h-px bg-[#D4AF37] align-middle ml-2" />
    </p>
  );
};

const Heading = ({ children, italic = true, className = "" }) => {
  const { lang } = useLang();
  const isHi = lang === "hi";
  return (
    <h2
      className={`${isHi ? "font-display-hi lh-hi" : "font-display-en leading-tight"} ${italic && !isHi ? "italic" : ""} text-3xl sm:text-5xl text-[#4A3B42] ${className}`}
    >
      {children}
    </h2>
  );
};

/* ============ HERO ============ */
const Hero = () => {
  const { lang } = useLang();
  const t = T[lang].hero;
  const isHi = lang === "hi";
  return (
    <section data-testid="hero-section" className="relative min-h-[100svh] flex items-center justify-center px-6 py-16 overflow-hidden">
      {/* Soft floral wash background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, #FFF6F2 0%, #FBE6E9 50%, #F8D5DC 100%)" }} />
        <img src={FLORAL_BG} alt="" loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover opacity-[0.13] mix-blend-multiply" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 100%, rgba(255,255,255,0.6), transparent 60%)" }} />
      </div>

      {/* Floating teddy & crown SVG ornaments */}
      <motion.div
        animate={{ y: [0, -14, 0], rotate: [-3, 3, -3] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[8%] left-[6%] sm:left-[14%] w-10 sm:w-16 opacity-80 pointer-events-none"
      >
        <Crown className="w-full h-full text-[#D4AF37]" strokeWidth={1.2} />
      </motion.div>
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [4, -4, 4] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] right-[6%] sm:right-[14%] w-10 sm:w-14 opacity-70 pointer-events-none"
      >
        <Heart className="w-full h-full text-[#B76E79] fill-[#F8C7CF]" strokeWidth={1.2} />
      </motion.div>

      <div className="relative max-w-3xl text-center w-full">
        <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, delay: 0.1 }}
          className={`text-[11px] sm:text-xs uppercase text-[#8C4A56] mb-6 ${isHi ? "font-body-hi tracking-normal normal-case" : "font-body-en tracking-[0.4em]"}`}>
          {t.eyebrow}
        </motion.p>

        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.3 }}
          className={`${isHi ? "font-display-hi lh-hi text-3xl sm:text-5xl lg:text-6xl" : "font-display-en italic text-5xl sm:text-7xl lg:text-8xl leading-[1.05]"} text-[#4A3B42] mb-1`}>
          {t.title}
        </motion.h1>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.55 }}
          className={`${isHi ? "font-display-hi lh-hi text-3xl sm:text-5xl lg:text-6xl rose-solid" : "font-display-en italic text-5xl sm:text-7xl lg:text-8xl shimmer-text leading-[1.1]"} mb-8`}>
          {t.titleAccent}
        </motion.h1>

        {/* Hero photo in arch frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-56 sm:w-72 mb-8"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="arch-frame anim-glow"
            style={{ aspectRatio: "3/4" }}
          >
            <img src={PHOTOS[0]} alt="Aditiri Arya" loading="eager" decoding="async" className="w-full h-full object-cover" draggable={false} />
          </motion.div>
          {/* Sparkles around */}
          <motion.div className="absolute -top-3 -left-3 anim-twinkle pointer-events-none"><Sparkles className="w-5 h-5 text-[#D4AF37]" /></motion.div>
          <motion.div className="absolute -bottom-2 -right-3 anim-twinkle pointer-events-none" style={{ animationDelay: "1.4s" }}><Sparkles className="w-5 h-5 text-[#D4AF37]" /></motion.div>
        </motion.div>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.0 }}
          className={`text-base sm:text-lg text-[#6B5862] mb-2 px-2 ${isHi ? "font-body-hi" : "font-body-en"}`}>
          {t.sub}
        </motion.p>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.15 }}
          className={`text-sm text-[#8C4A56] mb-12 ${isHi ? "font-body-hi" : "font-body-en"}`}>
          {t.dob} · <span className="font-medium">{EVENT.dobDisplay[lang]}</span>
        </motion.p>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="flex flex-col items-center justify-center mt-2"
          data-testid="scroll-cue"
        >
          <Teddy size={60} />
          <span className={`mt-1 text-[10px] uppercase text-[#8C4A56]/70 ${isHi ? "font-body-hi tracking-normal normal-case" : "font-body-en tracking-[0.35em]"}`}>
            {t.scroll}
          </span>
        </motion.div>
      </div>
    </section>
  );
};

/* ============ WELCOME MESSAGE ============ */
const WelcomeMessage = () => {
  const { lang } = useLang();
  const t = T[lang].welcomeMsg;
  return (
    <Section testid="welcome-message" className="text-center">
      <div className="max-w-2xl mx-auto">
        <Eyebrow>{t.eyebrow}</Eyebrow>
        <Heading className="mb-8">{t.title}</Heading>
        <div className="gold-divider w-24 mx-auto mb-8" />
        <p className={`text-[15px] sm:text-lg leading-loose text-[#4A3B42]/90 ${lang === "hi" ? "font-body-hi" : "font-body-en"}`}>
          {t.body}
        </p>
        <p className={`mt-8 text-base sm:text-lg italic ${lang === "hi" ? "font-display-hi rose-solid" : "font-display-en rose-text"}`}>
          {t.signoff}
        </p>
      </div>
    </Section>
  );
};

/* ============ MEET PRINCESS — fixed black bars ============ */
const MeetPrincess = () => {
  const { lang } = useLang();
  const t = T[lang].princess;
  return (
    <Section testid="meet-princess" className="overflow-hidden">
      <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-10 sm:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-xs"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="rounded-[2rem] overflow-hidden gold-border"
            style={{ aspectRatio: "4/5" }}
          >
            {/* object-cover + object-center fills the frame without any black bars */}
            <img
              src={PHOTOS[1]}
              alt="Aditiri Arya"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
          {/* Floating petals beside frame */}
          <motion.span
            className="absolute -top-4 -right-4 text-3xl anim-float-soft"
            style={{ filter: "drop-shadow(0 6px 8px rgba(183,110,121,0.3))" }}
          >
            <svg width="44" height="44" viewBox="0 0 24 24"><path d="M12 2 C 16 6, 20 8, 18 14 C 16 20, 8 20, 6 14 C 4 8, 8 6, 12 2 Z" fill="#F8C7CF" /></svg>
          </motion.span>
          <motion.span className="absolute -bottom-3 -left-4 text-2xl anim-float-medium">
            <svg width="36" height="36" viewBox="0 0 24 24"><path d="M12 2 C 16 6, 20 8, 18 14 C 16 20, 8 20, 6 14 C 4 8, 8 6, 12 2 Z" fill="#F4D788" opacity="0.85" /></svg>
          </motion.span>
        </motion.div>

        <div className="text-center sm:text-left">
          <Eyebrow>{t.eyebrow}</Eyebrow>
          <Heading className="mb-5">
            <span className={lang === "hi" ? "rose-solid" : "rose-text"}>{t.title}</span>
          </Heading>
          <p className={`italic text-[#8C4A56] mb-5 text-sm sm:text-base ${lang === "hi" ? "font-display-hi" : "font-display-en"}`}>
            {t.meaning}
          </p>
          <div className="gold-divider w-20 mb-5 sm:mx-0 mx-auto" />
          <p className={`text-[15px] sm:text-base leading-loose text-[#4A3B42]/85 ${lang === "hi" ? "font-body-hi" : "font-body-en"}`}>
            {t.desc}
          </p>
        </div>
      </div>
    </Section>
  );
};

/* ============ EVENT DETAILS ============ */
const EventDetails = () => {
  const { lang } = useLang();
  const t = T[lang].event;
  const cards = [
    { icon: Calendar, label: t.labels.date, value: EVENT.dateDisplay[lang] },
    { icon: Clock,    label: t.labels.time, value: EVENT.timeDisplay[lang] },
    { icon: MapPin,   label: t.labels.venue, value: t.venue },
    { icon: Heart,    label: t.labels.address, value: t.address },
  ];
  return (
    <Section testid="event-details" className="text-center">
      <div className="max-w-3xl mx-auto">
        <Eyebrow>{t.eyebrow}</Eyebrow>
        <Heading className="mb-3">{t.title}</Heading>
        <p className={`italic text-[#8C4A56] mb-12 ${lang === "hi" ? "font-display-hi" : "font-display-en"}`}>
          {t.ceremony}
        </p>

        <motion.div
          variants={stagger()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 gap-4 sm:gap-5 mb-14 text-left"
        >
          {cards.map((c, i) => (
            <motion.div
              key={i}
              variants={reveal}
              whileHover={{ y: -4 }}
              className="glass-card rounded-3xl p-5 sm:p-6 flex gap-4 items-start"
              data-testid={`event-card-${i}`}
            >
              <div className="shrink-0 w-11 h-11 rounded-2xl flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #FBE6E9 0%, #F4D788 100%)" }}>
                <c.icon className="w-5 h-5 text-[#8C4A56]" strokeWidth={1.6} />
              </div>
              <div className="flex-1">
                <p className={`text-[10px] uppercase text-[#8C4A56]/70 mb-1 ${lang === "hi" ? "font-body-hi tracking-normal normal-case" : "font-body-en tracking-[0.3em]"}`}>
                  {c.label}
                </p>
                <p className={`text-[15px] sm:text-base text-[#4A3B42] whitespace-pre-line leading-relaxed ${lang === "hi" ? "font-body-hi" : "font-body-en"}`}>
                  {c.value}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <CountdownTimer />
        <AddToCalendar />
      </div>
    </Section>
  );
};

/* ============ FAMILY — female first, + great-grandparents ============ */
const FamilyCard = ({ label, female, male, ampersand }) => {
  const { lang } = useLang();
  return (
    <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }} className="glass-card rounded-3xl p-8">
      <p className={`text-[10px] uppercase text-[#8C4A56]/70 mb-4 ${lang === "hi" ? "font-body-hi tracking-normal normal-case" : "font-body-en tracking-[0.4em]"}`}>
        {label}
      </p>
      <p className={`text-xl sm:text-2xl text-[#4A3B42] mb-1 ${lang === "hi" ? "font-display-hi" : "font-display-en italic"}`}>
        {female}
      </p>
      <p className={`text-xs text-[#B76E79] ${lang === "hi" ? "font-body-hi tracking-normal" : "tracking-[0.3em]"}`}>{ampersand}</p>
      <p className={`text-xl sm:text-2xl text-[#4A3B42] mt-1 ${lang === "hi" ? "font-display-hi" : "font-display-en italic"}`}>
        {male}
      </p>
    </motion.div>
  );
};

const GreatGrandCard = ({ label, female, male, ampersand }) => {
  const { lang } = useLang();
  return (
    <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }}
      className="glass-card rounded-3xl p-6 col-span-full sm:col-span-1"
      style={{ borderLeft: "2px solid rgba(212,175,55,0.4)" }}
    >
      <p className={`text-[10px] uppercase text-[#8C4A56]/70 mb-3 ${lang === "hi" ? "font-body-hi tracking-normal normal-case" : "font-body-en tracking-[0.4em]"}`}>
        {label}
      </p>
      <p className={`text-lg sm:text-xl text-[#4A3B42]/80 mb-0.5 ${lang === "hi" ? "font-display-hi" : "font-display-en italic"}`}>
        {female}
      </p>
      <p className={`text-xs text-[#B76E79] ${lang === "hi" ? "font-body-hi tracking-normal" : "tracking-[0.3em]"}`}>{ampersand}</p>
      <p className={`text-lg sm:text-xl text-[#4A3B42]/80 mt-0.5 ${lang === "hi" ? "font-display-hi" : "font-display-en italic"}`}>
        {male}
      </p>
    </motion.div>
  );
};

const Family = () => {
  const { lang } = useLang();
  const t = T[lang].family;
  return (
    <Section testid="family-section" className="text-center">
      <div className="max-w-3xl mx-auto relative">
        <Eyebrow>{t.eyebrow}</Eyebrow>
        <Heading className="mb-12">{t.title}</Heading>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative mx-auto w-44 mb-10"
        >
          <div className="rounded-full overflow-hidden gold-border aspect-square">
            <img src={PHOTOS[4]} alt="Parents with Aditiri" loading="lazy" decoding="async" className="w-full h-full object-cover object-center" />
          </div>
        </motion.div>

        {/* Parents & Grandparents */}
        <div className="grid sm:grid-cols-2 gap-8 sm:gap-12 mb-8">
          {/* Parents — mother first */}
          <FamilyCard
            label={t.parents}
            female={t.mother}
            male={t.father}
            ampersand={t.ampersand}
          />
          {/* Grandparents — grandmother first */}
          <FamilyCard
            label={t.grandparents}
            female={t.grandfather}
            male={t.grandfatherMale}
            ampersand={t.ampersand}
          />
        </div>

        {/* Great-Grandparents — centred */}
        <div className="grid sm:grid-cols-2 gap-8 sm:gap-12">
          <GreatGrandCard
            label={t.greatgrandparents}
            female={t.greatgrandmother}
            male={t.greatgrandfather}
            ampersand={t.ampersand}
          />
        </div>
      </div>
    </Section>
  );
};

/* ============ BLESSINGS ============ */
const Blessings = () => {
  const { lang } = useLang();
  const t = T[lang].blessings;
  return (
    <Section testid="blessings-section" className="text-center overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <Eyebrow>{t.eyebrow}</Eyebrow>
        <Heading className="mb-12">{t.title}</Heading>

        <motion.div variants={stagger()} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="grid sm:grid-cols-2 gap-5">
          {t.cards.map((c, i) => (
            <motion.div
              key={i}
              variants={reveal}
              whileHover={{ y: -6, rotate: i % 2 ? 0.5 : -0.5 }}
              className="relative rounded-3xl p-7 sm:p-8 text-left"
              style={{
                background: i % 2
                  ? "linear-gradient(135deg, #FFF8EE 0%, #FBE6E9 100%)"
                  : "linear-gradient(135deg, #FBE6E9 0%, #F8D5DC 100%)",
                boxShadow: "0 14px 40px -12px rgba(183,110,121,0.25)",
                border: "1px solid rgba(212,175,55,0.25)",
              }}
            >
              <Star className="w-5 h-5 text-[#D4AF37] mb-3 fill-[#F4D788]" strokeWidth={1.4} />
              <p className={`text-[15px] sm:text-base leading-relaxed text-[#4A3B42] ${lang === "hi" ? "font-body-hi" : "font-display-en italic"}`}>
                {c}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};

/* ============ MEMORY GALLERY — Instagram Reel embed ============ */
const MemoryGallery = () => {
  const { lang } = useLang();
  const t = T[lang].gallery;
  return (
    <Section testid="memory-gallery" className="text-center overflow-hidden px-0 sm:px-10">
      <div className="px-5 sm:px-0">
        <Eyebrow>{t.eyebrow}</Eyebrow>
        <Heading className="mb-2">{t.title}</Heading>
        <p className={`italic text-[#8C4A56] mb-10 ${lang === "hi" ? "font-display-hi" : "font-display-en"}`}>{t.sub}</p>
      </div>

      {/* Instagram Reel — centred embed */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="mx-auto mb-10 rounded-3xl overflow-hidden gold-border"
        style={{ maxWidth: 340, width: "90%" }}
        data-testid="gallery-instagram-reel"
      >
        <iframe
          src="https://www.instagram.com/reel/DYJq1QzMuUc/embed/"
          title="Aditiri Arya Instagram Reel"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          style={{
            border: "none",
            width: "100%",
            height: 560,
            display: "block",
          }}
          loading="lazy"
        />
      </motion.div>

      <div
        className="flex gap-5 sm:gap-7 px-5 sm:px-10 no-scrollbar overflow-x-auto pb-4"
        data-testid="gallery-strip"
        style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}
      >
        {PHOTOS.map((src, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.4 }}
            className="shrink-0 w-64 sm:w-72 rounded-3xl overflow-hidden gold-border"
            style={{ aspectRatio: "3/4", scrollSnapAlign: "center" }}
          >
            <img
              src={src}
              alt={`Memory ${i + 1}`}
              draggable={false}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

/* ============ LOCATION ============ */
const Location = () => {
  const { lang } = useLang();
  const t = T[lang].location;
  return (
    <Section testid="location-section" className="text-center">
      <div className="max-w-3xl mx-auto">
        <Eyebrow>{t.eyebrow}</Eyebrow>
        <Heading className="mb-3">{t.title}</Heading>
        <p className={`text-sm text-[#8C4A56] mb-8 ${lang === "hi" ? "font-body-hi" : "font-body-en"}`}>{t.sub}</p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="rounded-3xl overflow-hidden gold-border mb-8"
          style={{ aspectRatio: "16/10" }}
        >
          <iframe
            title="Venue Map"
            src={EVENT.mapEmbed}
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>

        <motion.a
          href={EVENT.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="get-directions-btn"
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.96 }}
          className="btn-press inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-medium text-sm sm:text-base"
          style={{ background: "linear-gradient(135deg, #D4AF37 0%, #B8860B 100%)", boxShadow: "0 14px 30px -8px rgba(212,175,55,0.55)" }}
        >
          <NavIcon className="w-4 h-4" />
          <span className={lang === "hi" ? "font-body-hi" : "font-body-en"}>{t.directions}</span>
        </motion.a>
      </div>
    </Section>
  );
};

/* ============ RSVP ============ */
const Rsvp = () => {
  const { lang } = useLang();
  const t = T[lang].rsvp;
  return (
    <Section testid="rsvp-section" className="text-center">
      <div className="max-w-3xl mx-auto">
        <Eyebrow>{t.eyebrow}</Eyebrow>
        <Heading className="mb-3">{t.title}</Heading>
        <p className={`text-sm text-[#8C4A56] mb-10 ${lang === "hi" ? "font-body-hi" : "font-body-en"}`}>{t.sub}</p>

        <motion.div
          variants={stagger()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-3 gap-5"
        >
          {CONTACTS.map((c, i) => (
            <motion.div
              key={i}
              variants={reveal}
              whileHover={{ y: -6 }}
              className="glass-card rounded-3xl p-6 flex flex-col items-center text-center"
              data-testid={`rsvp-card-${i}`}
            >
              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                style={{ background: "linear-gradient(135deg, #FBE6E9 0%, #F4D788 100%)" }}>
                <Phone className="w-5 h-5 text-[#8C4A56]" strokeWidth={1.5} />
              </div>
              <p className={`text-lg sm:text-xl text-[#4A3B42] mb-1 ${lang === "hi" ? "font-display-hi" : "font-display-en italic"}`}>
                {c.name[lang]}
              </p>
              <p className={`text-[10px] uppercase text-[#B76E79] mb-4 ${lang === "hi" ? "font-body-hi tracking-normal normal-case" : "font-body-en tracking-[0.3em]"}`}>
                {c.role[lang]}
              </p>
              <div className="flex flex-col gap-2 w-full">
                <a
                  href={`tel:+91${c.phone}`}
                  data-testid={`rsvp-call-${i}`}
                  className="btn-press flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-white text-sm font-medium"
                  style={{ background: "linear-gradient(135deg, #B76E79 0%, #8C4A56 100%)" }}
                >
                  <Phone className="w-3.5 h-3.5" /> +91 {c.phone}
                </a>
                <a
                  href={`https://wa.me/91${c.phone}?text=${encodeURIComponent(T[lang].share.message)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={`rsvp-whatsapp-${i}`}
                  className="btn-press flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium text-[#128C7E] border border-[#25D366]/40 bg-white/60 hover:bg-white"
                >
                  {t.whatsapp}
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};

/* ============ INVITATION CARD GENERATOR — 1080×1920 portrait ============ */
const InvitationCardGenerator = () => {
  const { lang } = useLang();
  const t = T[lang].invitation;
  const [generating, setGenerating] = useState(false);
  const canvasRef = useRef(null);

  const generateCard = useCallback(async () => {
    setGenerating(true);
    try {
      const W = 1080, H = 1920;
      const canvas = document.createElement("canvas");
      canvas.width = W;
      canvas.height = H;
      const ctx = canvas.getContext("2d");

      // ---- Rich layered background ----
      // Base gradient
      const bgGrad = ctx.createLinearGradient(0, 0, 0, H);
      bgGrad.addColorStop(0,    "#FFF6F2");
      bgGrad.addColorStop(0.25, "#FBE6E9");
      bgGrad.addColorStop(0.65, "#F8D5DC");
      bgGrad.addColorStop(1,    "#F2C0CB");
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, W, H);

      // Radial glow top-center (light halo behind name)
      const haloTop = ctx.createRadialGradient(W/2, 340, 40, W/2, 340, 500);
      haloTop.addColorStop(0, "rgba(255,255,230,0.55)");
      haloTop.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = haloTop;
      ctx.fillRect(0, 0, W, H);

      // Radial glow bottom
      const haloBot = ctx.createRadialGradient(W/2, H-300, 40, W/2, H-300, 480);
      haloBot.addColorStop(0, "rgba(212,175,55,0.13)");
      haloBot.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = haloBot;
      ctx.fillRect(0, 0, W, H);

      // Subtle noise grain texture (overlaid dots)
      ctx.save();
      ctx.globalAlpha = 0.025;
      for (let i = 0; i < 6000; i++) {
        ctx.fillStyle = i % 3 === 0 ? "#8C4A56" : "#D4AF37";
        ctx.fillRect(Math.random() * W, Math.random() * H, 1.5, 1.5);
      }
      ctx.restore();

      // ---- Outer gold double border frame ----
      const bPad = 32;
      const drawRect = (pad, color, lw, dash=[]) => {
        ctx.strokeStyle = color;
        ctx.lineWidth = lw;
        ctx.setLineDash(dash);
        ctx.strokeRect(pad, pad, W - pad*2, H - pad*2);
        ctx.setLineDash([]);
      };
      drawRect(bPad,      "rgba(212,175,55,0.85)", 3.5);
      drawRect(bPad + 14, "rgba(212,175,55,0.35)", 1);
      drawRect(bPad + 20, "rgba(212,175,55,0.18)", 1, [6, 4]);

      // ---- Corner ornaments (L-brackets + small diamonds) ----
      const corners = [[bPad, bPad, 1, 1], [W-bPad, bPad, -1, 1], [bPad, H-bPad, 1, -1], [W-bPad, H-bPad, -1, -1]];
      corners.forEach(([x, y, sx, sy]) => {
        ctx.save();
        ctx.translate(x, y);
        ctx.scale(sx, sy);
        ctx.strokeStyle = "rgba(212,175,55,0.8)";
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(0, 50); ctx.lineTo(0, 0); ctx.lineTo(50, 0);
        ctx.stroke();
        // inner bracket
        ctx.strokeStyle = "rgba(212,175,55,0.4)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(8, 34); ctx.lineTo(8, 8); ctx.lineTo(34, 8);
        ctx.stroke();
        // diamond dot
        ctx.fillStyle = "rgba(212,175,55,0.85)";
        ctx.beginPath();
        ctx.save(); ctx.translate(0, 0); ctx.rotate(Math.PI/4);
        ctx.fillRect(-5, -5, 10, 10);
        ctx.restore();
        ctx.restore();
      });

      // ---- Decorative mandala-style ring at top ----
      const drawRing = (cx, cy, r, segments=24, color="rgba(212,175,55,0.18)") => {
        for (let i = 0; i < segments; i++) {
          const angle = (Math.PI * 2 * i) / segments;
          const x1 = cx + Math.cos(angle) * (r - 16);
          const y1 = cy + Math.sin(angle) * (r - 16);
          const x2 = cx + Math.cos(angle) * r;
          const y2 = cy + Math.sin(angle) * r;
          ctx.strokeStyle = color;
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(x1, y1); ctx.lineTo(x2, y2);
          ctx.stroke();
        }
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.strokeStyle = color;
        ctx.lineWidth = 1;
        ctx.stroke();
      };

      // ---- Helper: load image ----
      const loadImg = (src) =>
        new Promise((resolve) => {
          const img = new Image();
          img.crossOrigin = "anonymous";
          img.onload = () => resolve(img);
          img.onerror = () => resolve(null);
          img.src = src;
        });

      // ---- Horizontal floral divider ----
      const drawFloralDivider = (y, w=700) => {
        const gd = ctx.createLinearGradient(W/2 - w/2, y, W/2 + w/2, y);
        gd.addColorStop(0, "rgba(212,175,55,0)");
        gd.addColorStop(0.15, "rgba(212,175,55,0.6)");
        gd.addColorStop(0.5, "rgba(212,175,55,0.9)");
        gd.addColorStop(0.85, "rgba(212,175,55,0.6)");
        gd.addColorStop(1, "rgba(212,175,55,0)");
        ctx.strokeStyle = gd;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(W/2 - w/2, y); ctx.lineTo(W/2 + w/2, y);
        ctx.stroke();
        // center diamond ornament
        ctx.save();
        ctx.translate(W/2, y);
        ctx.rotate(Math.PI/4);
        ctx.fillStyle = "rgba(212,175,55,0.9)";
        ctx.fillRect(-6, -6, 12, 12);
        ctx.restore();
        // small flanking diamonds
        [-90, 90].forEach(dx => {
          ctx.save();
          ctx.translate(W/2 + dx, y);
          ctx.rotate(Math.PI/4);
          ctx.fillStyle = "rgba(212,175,55,0.55)";
          ctx.fillRect(-3.5, -3.5, 7, 7);
          ctx.restore();
        });
      };

      // ---- Load photos ----
      const heroImg = await loadImg(PHOTOS[0]);
      const p2Img   = await loadImg(PHOTOS[1]);
      const p3Img   = await loadImg(PHOTOS[2]);

      // ---- SECTION 1: Top band — mantra ----
      let cy = 80;
      ctx.fillStyle = "rgba(140,74,86,0.75)";
      ctx.font = "italic 26px 'Georgia', serif";
      ctx.textAlign = "center";
      ctx.fillText("✦  Om Shri Ganeshaya Namah  ✦", W/2, cy);
      cy += 56;

      drawFloralDivider(cy, 600); cy += 54;

      // ---- SECTION 2: Eyebrow ----
      ctx.fillStyle = "rgba(140,74,86,0.7)";
      ctx.font = "14px 'Arial', sans-serif";
      ctx.fillText("WITH HEARTS FULL OF JOY, WE WELCOME", W/2, cy);
      cy += 44;

      // ---- SECTION 3: Big name — shimmer gold gradient ----
      const nameGrad = ctx.createLinearGradient(W/2 - 340, cy, W/2 + 340, cy);
      nameGrad.addColorStop(0, "#8C4A56");
      nameGrad.addColorStop(0.35, "#D4AF37");
      nameGrad.addColorStop(0.65, "#D4AF37");
      nameGrad.addColorStop(1, "#8C4A56");
      ctx.fillStyle = nameGrad;
      ctx.font = "italic bold 96px 'Georgia', serif";
      ctx.fillText("Aditiri Arya", W/2, cy + 80);
      cy += 110;

      // Hindi name
      ctx.fillStyle = "#8C4A56";
      ctx.font = "42px 'Georgia', serif";
      ctx.fillText("अदित्री आर्या", W/2, cy);
      cy += 54;

      // Name meaning
      ctx.fillStyle = "rgba(107,88,98,0.8)";
      ctx.font = "italic 22px 'Georgia', serif";
      ctx.fillText('"Aditiri" — boundless · "Arya" — noble, pure', W/2, cy);
      cy += 52;

      drawFloralDivider(cy, 560); cy += 50;

      // ---- SECTION 4: HERO ARCH PHOTO (centred, tall) ----
      const archW = 420, archH = 560, archR = archW / 2;
      const archX = W/2 - archW/2, archY = cy;

      // Outer glow ring
      drawRing(W/2, archY + archR, archR + 32, 36, "rgba(212,175,55,0.15)");
      drawRing(W/2, archY + archR, archR + 18, 24, "rgba(212,175,55,0.25)");

      // Arch clip
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(archX, archY + archR);
      ctx.arc(W/2, archY + archR, archR, Math.PI, 0);
      ctx.lineTo(archX + archW, archY + archH);
      ctx.lineTo(archX, archY + archH);
      ctx.closePath();
      ctx.clip();
      if (heroImg) {
        // cover-fit: compute scale so image fills arch box without stretching
        const iw = heroImg.naturalWidth || heroImg.width;
        const ih = heroImg.naturalHeight || heroImg.height;
        const scale = Math.max(archW / iw, archH / ih);
        const dw = iw * scale, dh = ih * scale;
        const dx = archX + (archW - dw) / 2;
        const dy = archY + (archH - dh) / 2;
        ctx.drawImage(heroImg, dx, dy, dw, dh);
      }
      ctx.restore();

      // Arch border
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(archX, archY + archR);
      ctx.arc(W/2, archY + archR, archR, Math.PI, 0);
      ctx.lineTo(archX + archW, archY + archH);
      ctx.lineTo(archX, archY + archH);
      ctx.closePath();
      ctx.strokeStyle = "rgba(212,175,55,0.9)";
      ctx.lineWidth = 5;
      ctx.stroke();
      ctx.restore();

      // Sparkle dots around arch
      [[archX - 18, archY + 80], [archX + archW + 18, archY + 80], [archX - 24, archY + archH - 60], [archX + archW + 24, archY + archH - 60]].forEach(([sx, sy]) => {
        ctx.fillStyle = "rgba(212,175,55,0.85)";
        ctx.beginPath();
        ctx.arc(sx, sy, 6, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "rgba(212,175,55,0.4)";
        ctx.beginPath();
        ctx.arc(sx, sy, 12, 0, Math.PI * 2);
        ctx.fill();
      });

      cy = archY + archH + 48;

      // ---- SECTION 5: Born line ----
      ctx.fillStyle = "#6B5862";
      ctx.font = "italic 26px 'Georgia', serif";
      ctx.fillText("Born · 23 April 2026  ·  Patna", W/2, cy);
      cy += 52;

      drawFloralDivider(cy, 480); cy += 50;

      // ---- SECTION 6: Ceremony badge pill ----
      ctx.save();
      const pillW = 560, pillH = 68, pillX = W/2 - pillW/2, pillY = cy - 4;
      const pillGrad = ctx.createLinearGradient(pillX, pillY, pillX + pillW, pillY);
      pillGrad.addColorStop(0, "rgba(251,230,233,0.95)");
      pillGrad.addColorStop(0.5, "rgba(248,213,220,0.95)");
      pillGrad.addColorStop(1, "rgba(251,230,233,0.95)");
      ctx.fillStyle = pillGrad;
      ctx.beginPath();
      ctx.roundRect(pillX, pillY, pillW, pillH, pillH/2);
      ctx.fill();
      ctx.strokeStyle = "rgba(212,175,55,0.6)";
      ctx.lineWidth = 1.5;
      ctx.stroke();
      ctx.restore();
      ctx.fillStyle = "#8C4A56";
      ctx.font = "bold 20px 'Arial', sans-serif";
      ctx.fillText("CHHATHI SAMAROH  ·  BABY WELCOMING CEREMONY", W/2, cy + 38);
      cy += 88;

      // ---- SECTION 7: Date & time — gold big ----
      const dateGrad = ctx.createLinearGradient(W/2 - 260, 0, W/2 + 260, 0);
      dateGrad.addColorStop(0, "#B8860B");
      dateGrad.addColorStop(0.5, "#D4AF37");
      dateGrad.addColorStop(1, "#B8860B");
      ctx.fillStyle = dateGrad;
      ctx.font = "bold 52px 'Georgia', serif";
      ctx.fillText("19 May 2026  ·  Tuesday", W/2, cy);
      cy += 52;
      ctx.fillStyle = "#6B5862";
      ctx.font = "28px 'Arial', sans-serif";
      ctx.fillText("07:00 PM Onwards", W/2, cy);
      cy += 50;

      drawFloralDivider(cy, 420); cy += 50;

      // ---- SECTION 8: Venue ----
      ctx.fillStyle = "rgba(140,74,86,0.7)";
      ctx.font = "13px 'Arial', sans-serif";
      ctx.fillText("VENUE", W/2, cy);
      cy += 34;
      ctx.fillStyle = "#4A3B42";
      ctx.font = "italic 28px 'Georgia', serif";
      ctx.fillText("House No A/9, Biscoman Colony", W/2, cy);
      cy += 36;
      ctx.fillText("Infront Of BPS ITI, East From Kumhrar", W/2, cy);
      cy += 36;
      ctx.font = "bold 28px 'Georgia', serif";
      ctx.fillText("Patna – 800007", W/2, cy);
      cy += 52;

      drawFloralDivider(cy, 360); cy += 52;

      // ---- SECTION 9: Side-by-side small circular photos ----
      const sCircR = 130;
      const sCircY = cy + sCircR;
      const photos2 = [p2Img, p3Img];
      const sPositions = [W/2 - sCircR - 40, W/2 + sCircR + 40];
      photos2.forEach((img, idx) => {
        const cx2 = sPositions[idx];
        // Glow
        const glowG = ctx.createRadialGradient(cx2, sCircY, sCircR - 10, cx2, sCircY, sCircR + 30);
        glowG.addColorStop(0, "rgba(212,175,55,0.2)");
        glowG.addColorStop(1, "rgba(212,175,55,0)");
        ctx.fillStyle = glowG;
        ctx.beginPath(); ctx.arc(cx2, sCircY, sCircR + 30, 0, Math.PI * 2); ctx.fill();
        // Clip & draw
        ctx.save();
        ctx.beginPath(); ctx.arc(cx2, sCircY, sCircR, 0, Math.PI * 2); ctx.clip();
        if (img) {
          const iw = img.naturalWidth || img.width;
          const ih = img.naturalHeight || img.height;
          const sc = Math.max(sCircR*2/iw, sCircR*2/ih);
          ctx.drawImage(img, cx2 - sCircR - (iw*sc - sCircR*2)/2, sCircY - sCircR - (ih*sc - sCircR*2)/2, iw*sc, ih*sc);
        }
        ctx.restore();
        // Border
        ctx.beginPath(); ctx.arc(cx2, sCircY, sCircR, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(212,175,55,0.85)"; ctx.lineWidth = 4; ctx.stroke();
        // Outer ring
        ctx.beginPath(); ctx.arc(cx2, sCircY, sCircR + 14, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(212,175,55,0.25)"; ctx.lineWidth = 1.5; ctx.stroke();
      });
      cy = sCircY + sCircR + 52;

      drawFloralDivider(cy, 340); cy += 52;

      // ---- SECTION 10: Family ----
      ctx.fillStyle = "rgba(140,74,86,0.7)";
      ctx.font = "13px 'Arial', sans-serif";
      ctx.fillText("PRESENTED BY", W/2, cy);
      cy += 36;
      ctx.fillStyle = "#4A3B42";
      ctx.font = "italic 30px 'Georgia', serif";
      ctx.fillText("Niranjan Kumar  &  Divya Raj", W/2, cy);
      cy += 38;
      ctx.fillStyle = "rgba(140,74,86,0.6)";
      ctx.font = "14px 'Arial', sans-serif";
      ctx.fillText("Parents", W/2, cy);
      cy += 40;
      ctx.fillStyle = "#4A3B42";
      ctx.font = "italic 28px 'Georgia', serif";
      ctx.fillText("Vijay Kumar  &  Sushila Devi", W/2, cy);
      cy += 36;
      ctx.fillStyle = "rgba(140,74,86,0.6)";
      ctx.font = "14px 'Arial', sans-serif";
      ctx.fillText("Grandparents", W/2, cy);
      cy += 50;

      drawFloralDivider(cy, 300); cy += 46;

      // ---- SECTION 11: Footer signature ----
      const footerGrad = ctx.createLinearGradient(W/2 - 280, 0, W/2 + 280, 0);
      footerGrad.addColorStop(0, "#8C4A56");
      footerGrad.addColorStop(0.5, "#D4AF37");
      footerGrad.addColorStop(1, "#8C4A56");
      ctx.fillStyle = footerGrad;
      ctx.font = "italic bold 52px 'Georgia', serif";
      ctx.fillText("✦  Aditiri Arya  ✦", W/2, cy);
      cy += 42;
      ctx.fillStyle = "rgba(140,74,86,0.55)";
      ctx.font = "18px 'Arial', sans-serif";
      ctx.fillText("अदित्री आर्या · Chhathi Samaroh · 19.05.2026", W/2, cy);

      // ---- Trigger download ----
      const link = document.createElement("a");
      link.download = "Aditiri-Arya-Invitation-1080x1920.jpg";
      link.href = canvas.toDataURL("image/jpeg", 0.94);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      console.error("Card generation failed:", err);
    } finally {
      setGenerating(false);
    }
  }, [lang]);

  return (
    <div className="flex flex-col items-center mt-6">
      <motion.button
        onClick={generateCard}
        disabled={generating}
        whileHover={{ y: -3 }}
        whileTap={{ scale: 0.96 }}
        data-testid="download-invitation-btn"
        className="btn-press inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-white font-medium text-sm sm:text-base disabled:opacity-60"
        style={{
          background: "linear-gradient(135deg, #D4AF37 0%, #B8860B 100%)",
          boxShadow: "0 14px 30px -8px rgba(212,175,55,0.55)",
        }}
      >
        {generating
          ? <><ImageIcon className="w-4 h-4 animate-pulse" /><span className={lang === "hi" ? "font-body-hi" : "font-body-en"}>{t.generating}</span></>
          : <><Download className="w-4 h-4" /><span className={lang === "hi" ? "font-body-hi" : "font-body-en"}>{t.download}</span></>
        }
      </motion.button>
      <p className="mt-2 text-[11px] text-[#8C4A56]/60 font-body-en">
        1080 × 1920 · Portrait JPEG
      </p>
    </div>
  );
};

/* ============ CLOSING ============ */
const Closing = () => {
  const { lang } = useLang();
  const t = T[lang].closing;
  return (
    <Section testid="closing-section" className="text-center pb-32">
      <div className="max-w-2xl mx-auto relative">
        {/* Floating stars */}
        <div className="absolute inset-x-0 -top-6 flex justify-center gap-3 opacity-80">
          {[0, 1, 2, 3, 4].map((i) => (
            <span key={i} className="anim-twinkle" style={{ animationDelay: `${i * 0.4}s` }}>
              <Star className="w-3.5 h-3.5 text-[#D4AF37] fill-[#F4D788]" strokeWidth={1} />
            </span>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="mx-auto w-32 h-32 rounded-full overflow-hidden gold-border mb-8"
        >
          <img src={PHOTOS[5]} alt="Aditiri Arya" loading="lazy" decoding="async" className="w-full h-full object-cover object-center" />
        </motion.div>

        <Heading className="mb-6">
          <span className={lang === "hi" ? "rose-solid" : "shimmer-text"}>{t.title}</span>
        </Heading>
        <div className="gold-divider w-24 mx-auto mb-6" />
        <p className={`text-[15px] sm:text-lg leading-loose text-[#4A3B42]/90 mb-8 ${lang === "hi" ? "font-body-hi" : "font-body-en"}`}>
          {t.body}
        </p>
        <p className={`italic text-base sm:text-lg whitespace-pre-line ${lang === "hi" ? "font-display-hi rose-solid" : "font-display-en rose-text"}`}>
          {t.signoff}
        </p>

        <div className="mt-12">
          <ShareDock />
        </div>

        {/* Invitation card download */}
        <InvitationCardGenerator />

        <p className="mt-12 font-script text-2xl sm:text-3xl rose-text">
          ✦ Aditiri Arya ✦
        </p>
      </div>
    </Section>
  );
};

/* ============ ROOT ============ */
export default function Invitation() {
  return (
    <main data-testid="invitation-main" className="relative">
      <Hero />
      <NameReveal />
      <WelcomeMessage />
      <MeetPrincess />
      <EventDetails />
      <Family />
      <Blessings />
      <MemoryGallery />
      <Location />
      <Rsvp />
      <Closing />
    </main>
  );
}
