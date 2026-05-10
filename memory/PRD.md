# Aditiri Arya — Chhathi Samaroh Invitation

## Original Problem Statement
Build a PREMIUM, LUXURY, HIGH-END, FULLY ANIMATED, MOBILE-FIRST bilingual (Hindi/English) frontend-only invitation website for baby Aditiri Arya's Baby Welcoming Ceremony / Chhathi Samaroh on 19 May 2026 in Patna. Cinematic, magical, interactive — Royal Princess + Floral Baby + Cute Teddy luxury pink theme.

## Architecture
- Frontend-only React 19 + Tailwind + Framer Motion
- No backend, no DB, no auth (pure static)
- Mobile-first responsive (420px primary)
- Web Audio API for ambient lullaby (no CDN dependency)

## User Personas
- **Family & friends of Niranjan & Divya**: receive premium invitation link via WhatsApp; expect to view event details, RSVP via call, get directions
- **Bilingual audience**: Hindi-speaking elders + English-speaking relatives → instant language switch

## Core Static Requirements
- Welcome splash with Lord Ganesha + "ॐ श्री गणेशाय नमः" + language picker (en/hi)
- 10-section cinematic story flow (Hero → Welcome → Princess → Event → Family → Blessings → Gallery → Location → RSVP → Closing)
- Live countdown timer to 19-May-2026 19:00 IST
- 3 RSVP contact cards with tel:/wa.me links
- Get Directions button → Google Maps share link
- WhatsApp share + Copy link + Native share
- Ambient music with mute toggle (Web Audio API generated lullaby pad in F major)
- Premium animations: floating petals, sparkles, butterflies, glowing arches, shimmer text, parallax reveals
- SEO/OG/Twitter meta + Event schema for trustworthy preview

## Implemented (2026-05-10)
- ✅ Welcome splash with animated Ganesha + halo + floating gold particles
- ✅ Bilingual content (en/hi) via Context, instant switching, no reload
- ✅ All 10 sections rendering with whileInView reveal animations
- ✅ Countdown timer (live ticking)
- ✅ Memory gallery (drag-x carousel of baby photos)
- ✅ Embedded Google Maps + Get Directions CTA
- ✅ 3 RSVP cards: Vijay 9279210373, Niranjan 7903021500, Akshat 9835511857
- ✅ Share dock: WhatsApp / Copy / Native
- ✅ Audio toggle with Web Audio API ambient lullaby (replaces failing Pixabay CDN)
- ✅ Premium meta: OG, Twitter, Event JSON-LD, inline SVG favicon
- ✅ User-uploaded hero photo of Aditiri rendered in arch frame
- ✅ data-testid on every interactive/critical element
- ✅ Tested end-to-end (iteration_1.json — 100% on listed features)

## Backlog — P1
- Replace remaining placeholder unsplash baby photos with real Aditiri photos (user said "will give later")
- Optional: add a guestbook / wishes form (would require backend)
- Optional: schedule notification reminders the day before

## Backlog — P2
- Hindi font weight tuning
- More elaborate confetti burst on language selection
- Lazy-load images below fold for faster first paint
- Add GSAP-driven horizontal scroll for gallery

## Next Tasks
1. Wait for additional baby photos from user → swap into PHOTOS array
2. Optional polish round on user feedback
