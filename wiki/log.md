# UET-1 Wiki — Change Log

Append-only. Most recent entry at top.

---

## 2026-04-10 — universe.yaml created

**Operation:** New artifact

**Pages created:**
- `wiki/universe.yaml` — single-file LLM context document; all canon in structured YAML with ID references; covers tensions (9), technologies (6), factions (5), characters (7), world infrastructure (3), stories (4), narrative rules

**Structure:** Definitions declared once with `id` fields; stories and other entries reference ids by string. Intended for pasting into LLM context or file upload. Open/unresolved questions marked `[open]` or under `open:` keys.

---

## 2026-04-08 — BRX-90 mechanism ingest + canon correction

**Operation:** Ingest (targeted) + correction

**Sources consulted:** Web research into real scientific literature (molecular steganography, collagen-binding nanoparticles, THz/NIR tissue imaging, GLP-1 connective tissue effects, DNA origami cryptography)

**Pages updated:**
- `wiki/world/brx-90.md` — full mechanism rewrite; compound now grounded in real science; cover story logic explained; flagging problem resolved; masking compound function clarified; Car 7 activation architecture specified; real scientific basis section added

**Canon corrections:**
- Car 7 is NOT mandatory transit for all passengers — only flagged passengers pass through it. Previous wiki entries (uet1-train.md, ecoroute.md, brx-90.md) implied it was a universal chokepoint. BRX-90 page corrected; uet1-train.md and ecoroute.md to be updated in next pass.
- Flagging is a separate upstream mechanism from the BRX-90 extraction itself — the "Class 2 metabolic variance" is an *output* of Car 7, not what routes carriers there.

**New concept introduced:**
- **Hale Gap** — term for a crypto bridge built into infrastructure (Car 7 as the prototype). Not yet given its own wiki page — concept needs further development before committing. Key open question: is the Car 7 relay compromise permanent (ongoing Hale Gap) or was it Stolar-specific?

**Open questions logged:**
- Is the Stolar key split across carriers or replicated?
- Is the Car 7 relay an ongoing Hale Gap or a one-time compromise?
- Can Rowan's tissue be read by a different activation signal than the one the masking compound blocks?

---

## 2026-04-06 — Initial build

**Operation:** Ingest (full)

**Sources read:**
- `wiki/sources/UET-1 Wiki.pdf` (33 pages — world infrastructure, route, systems, factions, key figures, known vulnerabilities)
- `wiki/sources/The Chartered Flesh .pdf` (12 pages — Rowan's story)
- `wiki/sources/Ghost Inside The Light.pdf` (14 pages — The Spy / The Carrier)
- `wiki/sources/Signals in the Margins.pdf` (10 pages — Murkin / Mirage Handler)
- `wiki/sources/The Headless Empire.pdf` (source PDF not yet read — v6 draft used as working text)
- `skills/story-bible/references/bible.json`
- `skills/story-characters/references/characters.json`
- `skills/story-protocol/references/pacing-guide.md`
- `skills/story-protocol/references/tone-card.md`
- `skills/story-wildcard/references/surprise-patterns.md`
- `skills/story-premise/references/tensions.md`

**Pages created:**
- `wiki/schema.md`
- `wiki/log.md` (this file)
- `wiki/index.md`
- `wiki/stories/the-chartered-flesh.md`
- `wiki/stories/ghost-inside-the-light.md`
- `wiki/stories/signals-in-the-margins.md`
- `wiki/stories/the-headless-empire.md`
- `wiki/characters/rowan.md`
- `wiki/characters/the-spy.md`
- `wiki/characters/the-carrier.md`
- `wiki/characters/felix-lim.md`
- `wiki/characters/lin-yuan-exact.md`
- `wiki/characters/detective-pavel-murkin.md`
- `wiki/characters/marcus-hale.md`
- `wiki/world/uet1-train.md`
- `wiki/world/ecoroute.md`
- `wiki/world/pono.md`
- `wiki/world/the-covenant.md`
- `wiki/world/mirage-handler.md`
- `wiki/world/brx-90.md`
- `wiki/world/factions.md`
- `wiki/concepts/tensions.md`
- `wiki/concepts/story-circle.md`
- `wiki/concepts/tone-rules.md`

**Sources moved:**
- All PDFs moved from `wiki/` root to `wiki/sources/`

**Known discrepancies flagged:**
- Rowan gender: `characters.json` neutral vs. *The Chartered Flesh* she/her. **Canonical: she/her.**
- Lin Yuan Exact's fate: v6 draft presents settled resignation; UET-1 Wiki PDF suggests extraction plan was subverted by operatives. Flagged in schema.md and lin-yuan-exact.md.

**Gaps noted:**
- `The Headless Empire.pdf` not yet read in full (draft v6 used as proxy). Should be ingested directly.
- The Lights (installation by The Carrier) — has no dedicated world page yet; referenced in ghost-inside-the-light.md.
- Sable Meridian — deserves its own world page (currently included in factions.md).
- Corvin Field Services — brief reference only; no dedicated page.
