// Bilingual content for Aditiri Arya's invitation site
// All photos served from /public/photos/ — compressed JPEGs (~70KB each) for fast load
export const PHOTOS = [
  "/photos/hero.jpg",  // hero arch (toddler in pink dress)
  "/photos/p1.jpg",    // newborn close-up with cap
  "/photos/p2.jpg",    // sleeping peaceful (blue hood)
  "/photos/p3.jpg",    // tiny fist hand
  "/photos/p4.jpg",    // parents holding baby (It's a Girl)
  "/photos/p5.jpg",    // smiling sleeping baby
  "/photos/p6.jpg",    // close-up sleeping baby face
];

export const GANESHA_IMG = "https://images.unsplash.com/photo-1758210125253-1974471bb697?crop=entropy&cs=srgb&fm=jpg&w=900&q=82";

export const FLORAL_BG = "https://images.unsplash.com/photo-1682587368650-40a601316178?crop=entropy&cs=srgb&fm=jpg&w=1200&q=70";

// YouTube ambient music (Krishna Flute / soft devotional)
export const YT_MUSIC_ID = "Hd2M-_0TCHU";

export const EVENT = {
  date: new Date("2026-05-19T19:00:00+05:30"),
  dobDisplay: { en: "23 April 2026", hi: "23 अप्रैल 2026" },
  dateDisplay: { en: "19 May 2026 · Tuesday", hi: "19 मई 2026 · मंगलवार" },
  timeDisplay: { en: "07:00 PM Onwards", hi: "सायं 07:00 बजे से" },
  mapsUrl: "https://maps.app.goo.gl/eLsLM3MqLhhGHb5y8?g_st=ac",
  mapEmbed: "https://www.google.com/maps?q=Biscoman+Colony+Kumhrar+Patna+800007&output=embed",
};

export const CONTACTS = [
  { name: { en: "Vijay Kumar",     hi: "विजय कुमार" },     role: { en: "Grandfather", hi: "दादा जी" },    phone: "9279210373" },
  { name: { en: "Niranjan Kumar",  hi: "निरंजन कुमार" },  role: { en: "Father",      hi: "पिता" },         phone: "7903021500" },
  { name: { en: "Akshat Aarav",    hi: "अक्षत आरव" },      role: { en: "Brother",     hi: "भाई" },          phone: "9835511857" },
];

export const T = {
  en: {
    welcome: {
      mantra: "Om Shri Ganeshaya Namah",
      heading: "Welcome to",
      celebrationOf: "Aditiri Arya's Celebration",
      tagline: "An invocation of blessings before the joy begins",
      chooseLang: "Choose your language",
      english: "English",
      hindi: "हिन्दी",
      enter: "Enter Celebration",
    },
    hero: {
      eyebrow: "With hearts overflowing, we present",
      title: "A Little Princess",
      titleAccent: "Has Arrived",
      sub: "Daughter of Niranjan Kumar & Divya Raj",
      dob: "Born",
      scroll: "Scroll to begin",
    },
    welcomeMsg: {
      eyebrow: "An Invitation",
      title: "Our Hearts Have a New Home",
      body: "Our family cordially invites you to the auspicious Chhathi celebrations of little Aditri Arya on May 19, 2026. Your presence on this evening filled with blessings, sweet music, gentle smiles, and boundless love is the most precious gift we could ever ask for.",
      signoff: "— With love, Vijay & Sushila",
    },
    princess: {
      eyebrow: "Meet Our Princess",
      title: "Aditiri Arya",
      meaning: "\u201cAditiri\u201d — boundless, like the sky · \u201cArya\u201d — noble, pure of heart",
      desc: "She arrived softly, like a whisper of starlight, and turned every ordinary moment into magic.",
    },
    event: {
      eyebrow: "Save the Date",
      title: "Ceremony Details",
      ceremony: "Chhathi Samaroh · Baby Welcoming",
      labels: { date: "Date", time: "Time", venue: "Venue", address: "Address" },
      venue: "At Our Residence",
      address: "House No A/9, Biscoman Colony,\nInfront Of BPS ITI, East of Kumhrar Gumti,\nPatna \u2013 800007",
      countdown: "The celebration begins in",
      d: "Days", h: "Hours", m: "Minutes", s: "Seconds",
    },
    family: {
      eyebrow: "Lovingly Presented By",
      title: "Our Family",
      parents: "Parents",
      grandparents: "Grandparents",
      greatgrandparents: "Elder Grandparents",
      father: "Niranjan Kumar",
      mother: "Divya Raj",
      grandfather: "Sushila Devi",
      grandfatherMale: "Vijay Kumar",
      greatgrandmother: "Lt. Janki Devi",
      greatgrandfather: "Keshwar Prasad",
      ampersand: "&",
    },
    blessings: {
      eyebrow: "Whispered Wishes",
      title: "Blessings for the Little One",
      cards: [
        "May her laughter be the music that fills every room.",
        "May the stars above keep watch and the moon hum her lullabies.",
        "May she walk through this world wrapped in love, courage and grace.",
        "May every flower bloom a little brighter on the path she chooses.",
        "May her heart stay tender, her dreams stay wild, her soul stay free.",
      ],
    },
    gallery: {
      eyebrow: "A Glimpse",
      title: "Memories in Soft Light",
      sub: "Tiny moments, eternal joy",
    },
    location: {
      eyebrow: "Find Us",
      title: "The Venue",
      directions: "Get Directions",
      sub: "Tap to open in Google Maps",
    },
    rsvp: {
      eyebrow: "RSVP With Love",
      title: "Please Let Us Know",
      sub: "Tap a name to call · Or share your blessings on WhatsApp",
      call: "Call",
      whatsapp: "WhatsApp",
    },
    closing: {
      title: "Thank You",
      body: "For sharing in this beginning. We cannot wait to celebrate with you under the soft glow of evening lamps.",
      signoff: "With grace,\nThe Family of Aditiri Arya",
    },
    share: {
      title: "Share the Joy",
      whatsapp: "Share on WhatsApp",
      copy: "Copy Link",
      copied: "Link copied",
      message: "You're lovingly invited to Aditiri Arya's Chhathi Samaroh — 19 May 2026, Patna. ",
    },
    audio: { play: "Play music", pause: "Pause music" },
    invitation: {
      download: "Download Invitation Card",
      generating: "Generating…",
    },
  },
  hi: {
    welcome: {
      mantra: "ॐ श्री गणेशाय नमः",
      heading: "स्वागत है",
      celebrationOf: "अदित्री आर्या के उत्सव में",
      tagline: "हर शुभ आरंभ से पहले, श्री गणेश का स्मरण",
      chooseLang: "अपनी भाषा चुनें",
      english: "English",
      hindi: "हिन्दी",
      enter: "उत्सव में प्रवेश करें",
    },
    hero: {
      eyebrow: "हृदय की पूरी ख़ुशी के साथ प्रस्तुत है",
      title: "हमारी नन्ही",
      titleAccent: "राजकुमारी आ गई हैं",
      sub: "श्री निरंजन कुमार एवं श्रीमती दिव्या राज की लाडली",
      dob: "जन्म",
      scroll: "नीचे की ओर बढ़ें",
    },
    welcomeMsg: {
      eyebrow: "स्नेहपूर्ण निमंत्रण",
      title: "हमारे आँगन में नई ख़ुशी आई है",
      body: "हमारा परिवार आगामी 19 मई 2026 को नन्हीं अदित्री आर्या के पावन छठी समारोह में आपको सादर आमंत्रित करता है। आशीर्वाद, मधुर संगीत, कोमल मुस्कुराहटों और असीम प्रेम से भरी संध्या में आपकी उपस्थिति हीं हमारे लिए सबसे बहुमूल्य उपहार है।",
      signoff: "— सस्नेह, विजय एवं सुशीला",
    },
    princess: {
      eyebrow: "हमारी राजकुमारी से मिलिए",
      title: "अदित्री आर्या",
      meaning: "\u201cअदित्री\u201d — आकाश सी अनंत · \u201cआर्या\u201d — पवित्र, श्रेष्ठ",
      desc: "वह तारों की हल्की छाँव सी आई, और हर साधारण क्षण को जादू में बदल गई।",
    },
    event: {
      eyebrow: "तिथि याद रखें",
      title: "समारोह का विवरण",
      ceremony: "छठी समारोह · शिशु स्वागत",
      labels: { date: "तिथि", time: "समय", venue: "स्थान", address: "पता" },
      venue: "हमारे निवास पर",
      address: "मकान सं॰ A/9, बिस्कोमान कॉलोनी,\nBPS ITI के सामने, कुम्हरार गुमटी से पूरव,\nपटना – 800007",
      countdown: "उत्सव शुरू होने में",
      d: "दिन", h: "घंटे", m: "मिनट", s: "सेकंड",
    },
    family: {
      eyebrow: "स्नेह सहित आमंत्रित करते हैं",
      title: "हमारा परिवार",
      parents: "माता-पिता",
      grandparents: "दादा-दादी",
      greatgrandparents: "बड़े दादा-दादी",
      father: "श्री निरंजन कुमार",
      mother: "श्रीमती दिव्या राज",
      grandfather: "श्रीमती सुशीला देवी",
      grandfatherMale: "श्री विजय कुमार",
      greatgrandmother: "स्व॰ जानकी देवी",
      greatgrandfather: "श्री केश्वर प्रसाद",
      ampersand: "एवं",
    },
    blessings: {
      eyebrow: "मधुर आशीर्वाद",
      title: "नन्ही परी के लिए आशीर्वचन",
      cards: [
        "तुम्हारी हँसी हर घर का संगीत बने।",
        "तारे तुम्हारी रक्षा करें, चंद्रमा तुम्हारी लोरी गाए।",
        "जीवन के हर क़दम पर प्रेम, साहस और शालीनता तुम्हारे साथ रहें।",
        "तुम्हारे चुने हुए हर रास्ते पर फूल खिलें।",
        "हृदय कोमल रहे, सपने विशाल रहें, आत्मा सदैव मुक्त रहे।",
      ],
    },
    gallery: {
      eyebrow: "एक झलक",
      title: "कोमल यादें",
      sub: "छोटे पल, अनंत ख़ुशियाँ",
    },
    location: {
      eyebrow: "हमें ढूँढें",
      title: "समारोह स्थल",
      directions: "रास्ता देखें",
      sub: "गूगल मैप्स में खोलने के लिए टैप करें",
    },
    rsvp: {
      eyebrow: "उपस्थिति की पुष्टि",
      title: "कृपया हमें सूचित करें",
      sub: "नाम पर टैप कर सीधे कॉल करें · या व्हाट्सऐप पर आशीर्वाद भेजें",
      call: "कॉल",
      whatsapp: "व्हाट्सऐप",
    },
    closing: {
      title: "हार्दिक धन्यवाद",
      body: "इस नई शुरुआत में हमारे साथ शामिल होने के लिए। शाम की कोमल रौशनी में आपके साथ उत्सव मनाने के लिए हम उत्साहित हैं।",
      signoff: "सस्नेह,\nअदित्री आर्या का परिवार",
    },
    share: {
      title: "ख़ुशी साझा करें",
      whatsapp: "व्हाट्सऐप पर साझा करें",
      copy: "लिंक कॉपी करें",
      copied: "लिंक कॉपी हो गया",
      message: "अदित्री आर्या के छठी समारोह में आप सादर आमंत्रित हैं — 19 मई 2026, पटना। ",
    },
    audio: { play: "संगीत चलाएँ", pause: "संगीत रोकें" },
    invitation: {
      download: "निमंत्रण कार्ड डाउनलोड करें",
      generating: "बना रहे हैं…",
    },
  },
};
