import { motion } from "framer-motion";
import { CalendarPlus } from "lucide-react";
import { EVENT, T } from "@/data/content";
import { useLang } from "@/App";

/**
 * Generates an .ics file inline and triggers a download. Works on iOS Safari,
 * Android Chrome, and desktop. The .ics content has a 1-day-before reminder
 * (VALARM) so guests get a notification 24h before the ceremony.
 */
function buildIcs(lang) {
  const dt = (d) =>
    d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
  const start = EVENT.date;
  const end = new Date(start.getTime() + 3 * 60 * 60 * 1000); // 3-hour event
  const summary =
    lang === "hi"
      ? "अदितिरि आर्या · छठी समारोह"
      : "Aditiri Arya · Chhathi Samaroh";
  const description =
    lang === "hi"
      ? "हमारी प्यारी अदितिरि आर्या के पावन छठी समारोह में सादर आमंत्रित हैं।"
      : "Lovingly invited to the Baby Welcoming Ceremony of Aditiri Arya. Daughter of Niranjan Kumar & Divya Raj.";
  const location = "House A/9, Biscoman Colony, Near BPS ITI, Kumhrar, Patna 800007, India";

  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Aditiri Arya Invitation//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:aditiri-arya-chhathi-${start.getTime()}@invitation`,
    `DTSTAMP:${dt(new Date())}`,
    `DTSTART:${dt(start)}`,
    `DTEND:${dt(end)}`,
    `SUMMARY:${summary}`,
    `DESCRIPTION:${description.replace(/\n/g, "\\n")}`,
    `LOCATION:${location}`,
    "STATUS:CONFIRMED",
    "BEGIN:VALARM",
    "TRIGGER:-P1D",
    "ACTION:DISPLAY",
    `DESCRIPTION:Reminder · ${summary}`,
    "END:VALARM",
    "BEGIN:VALARM",
    "TRIGGER:-PT2H",
    "ACTION:DISPLAY",
    `DESCRIPTION:Starting soon · ${summary}`,
    "END:VALARM",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
}

export default function AddToCalendar() {
  const { lang } = useLang();
  const label = lang === "hi" ? "कैलेंडर में जोड़ें" : "Add to Calendar";
  const sub =
    lang === "hi"
      ? "एक टैप — आपके फ़ोन में 1 दिन और 2 घंटे पहले रिमाइंडर"
      : "One tap · saves with reminders 1 day & 2 hours before";

  const handleClick = () => {
    const ics = buildIcs(lang);
    const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Aditiri-Arya-Chhathi-Samaroh.ics";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 1500);
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <motion.button
        data-testid="add-to-calendar-btn"
        onClick={handleClick}
        whileHover={{ y: -3 }}
        whileTap={{ scale: 0.96 }}
        className="btn-press inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-white font-medium text-sm sm:text-base"
        style={{
          background: "linear-gradient(135deg, #B76E79 0%, #8C4A56 100%)",
          boxShadow: "0 14px 30px -8px rgba(140,74,86,0.55)",
        }}
      >
        <CalendarPlus className="w-4 h-4" />
        <span className={lang === "hi" ? "font-body-hi" : "font-body-en"}>{label}</span>
      </motion.button>
      <p
        className={`mt-3 text-[11px] sm:text-xs text-[#8C4A56]/80 ${
          lang === "hi" ? "font-body-hi" : "font-body-en"
        }`}
      >
        {sub}
      </p>
    </div>
  );
}
