# UET-1 Wiki — Schema

This document is the operating manual for the UET-1 wiki. Read it before editing any wiki page.

---

## What This Wiki Is

A persistent, compounding knowledge base for the UET-1 fictional universe. It grows as new material arrives. It is maintained by Claude across sessions.

The wiki is the canonical source of truth. The skills in `skills/` read from it. The drafts in `drafts/` are downstream of it.

---

## Directory Structure

```
wiki/
├── schema.md           ← this file — read before editing
├── index.md            ← master catalog of all pages
├── log.md              ← append-only change log
├── sources/            ← immutable source PDFs (never edit)
│   ├── The Chartered Flesh .pdf
│   ├── Ghost Inside The Light.pdf
│   ├── Signals in the Margins.pdf
│   ├── The Headless Empire.pdf
│   └── UET-1 Wiki.pdf
├── stories/            ← one page per story
├── characters/         ← one page per character
├── world/              ← systems, factions, locations, artifacts
└── concepts/           ← structural patterns, tensions, tone rules
```

---

## Page Types

### Story pages (`stories/`)
One page per completed story. Filename: `[story-slug].md`

Required sections:
- **Title and metadata** (author position, status, canonical source)
- **Summary** (3–5 sentences: what happens, to whom, at what cost)
- **Reverse outline** (scene-by-scene table: scene, POV, what changes, function)
- **Arc positions** (Story Circle steps for each major character)
- **Tensions active** (which tensions from `concepts/tensions.md` are running)
- **New canon introduced** (systems, facts, characters first established here)
- **Cross-links** (to characters, world pages, concepts)
- **Open questions / ambiguities** (unresolved things the wiki cannot yet answer)

### Character pages (`characters/`)
One page per significant character. Filename: `[character-slug].md`

Required sections:
- **Name, role, affiliation**
- **Voice** (register, signature moves, what they don't say)
- **Want / Need / Lie / Ghost** (Story Circle interiority)
- **Arc summary** (what they do across the story/stories they appear in)
- **Appears in** (links to story pages)
- **Relationships** (links to other character pages)
- **Canon ambiguities** (anything contradicted across sources)

### World pages (`world/`)
One page per system, faction, location, operation, or artifact. Filename: `[slug].md`

Required sections:
- **What it is** (one paragraph)
- **How it works** (technical or operational detail)
- **Who controls it / who is affected**
- **Appears in** (links to story pages)
- **Canon source** (which PDF or reference file)
- **Ambiguities** (contradictions between sources)

### Concept pages (`concepts/`)
One page per structural/craft concept. Filename: `[slug].md`

Required sections:
- **What it is**
- **How it operates in UET-1 stories**
- **Examples from canon** (with story links)

---

## Three Operations

### Ingest
When new material arrives (a new story, a new PDF, user-provided information):

1. Read the new source in full before writing anything.
2. Identify: What is new? What confirms existing pages? What contradicts them?
3. Create new pages as needed.
4. Update existing pages where new material adds or revises.
5. Log every change in `log.md`.
6. Update `index.md` with any new entries.

**Rule:** Never delete information that came from a source. If a source says X and a later source says not-X, record both under **Ambiguities** and note which source each claim comes from.

### Query
When asked a question about the universe:

1. Check `index.md` first to locate the relevant page(s).
2. Read the relevant pages.
3. If the answer is fully contained: answer from the wiki.
4. If the answer requires inference: answer and note what is inference vs. stated canon.
5. If the question exposes a gap: note the gap in `log.md` and optionally create a stub page.

### Lint
Periodic health check. Run when asked or when a significant ingest has occurred.

Check for:
- **Orphaned pages** — pages with no links in `index.md` or from other pages
- **Stale claims** — pages referencing source material in a way that contradicts a newer source
- **Missing cross-links** — a character is mentioned on a story page but has no link to their character page
- **Ambiguity unresolved** — an ambiguity flagged long ago with no subsequent update
- **Canon contradictions** — two pages making incompatible factual claims without noting the conflict

Report findings. Do not silently fix ambiguities — surface them to the user first.

---

## Authorship and Trust Hierarchy

1. **Source PDFs** — highest authority. If a PDF says X, X is canon.
2. **UET-1 Wiki PDF** — high authority for world facts, infrastructure, character backgrounds.
3. **Story PDFs** — authority for their own events and characters.
4. **Skills reference files** (`bible.json`, `characters.json`, etc.) — secondary authority. May be outdated or simplified. Where they contradict source PDFs, trust the PDFs.
5. **Drafted stories** (`drafts/`) — working documents, not canon until designated.
6. **This wiki** — maintained from the above sources; only as good as its ingests.

---

## Known Discrepancies (at time of initial build)

**Rowan's gender:** `characters.json` uses neutral pronouns. *The Chartered Flesh* PDF consistently uses she/her. **Canonical: she/her** (source story is authoritative).

**Lin Yuan Exact's fate:** Story drafts (v1–v6) and the `headless-empire-rewrite` skill present Lin as settled and philosophical in a Saudi wadi. The UET-1 Wiki PDF states his extraction to Geneva was his plan; operatives accepted a better offer and delivered him to Saudi Arabia instead; he "expressed no distress." The Saudi Arabia location is consistent, but the voluntary/involuntary question is unresolved. This may be intentional ambiguity.

---

## Style Rules for Wiki Pages

- Write in declarative present tense: "Rowan is a somatic self-optimization specialist" not "Rowan was."
- Use **bold** for first introduction of terms with their own pages.
- Cross-links: `[term](../category/slug.md)`
- Source citations: `(source: *The Chartered Flesh* PDF)` inline.
- Ambiguities get their own **Ambiguities** section, not inline hedging.
- No editorializing. Record what the sources say. Analysis goes in concept pages or the log.
