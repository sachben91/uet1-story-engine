# UET-1 Story Engine

A Claude Code skill system for generating literary fiction set in the **UET-1 (Unified Eurasian Transit Line 1)** universe — a fictional world built around the longest train in the world, running 23,300km from Lagos/Lisbon to Woodlands, Singapore across 17 jurisdictions.

---

## What This Is

Six Claude Code skills that work together as a story engine:

| Skill | What it does |
|-------|-------------|
| `/story-premise` | Premise generator — produces three loglines and high concepts calibrated to your dial settings, ready to pipe into `/generate-story` |
| `/story-bible` | World canon keeper — answers questions about the UET-1 universe and updates canon |
| `/story-characters` | Character voice tracker — maintains profiles, voices, and arcs for established characters |
| `/story-protocol` | Narrative scaffold — applies Dan Harmon's Story Circle and Orson Scott Card's MICE framework |
| `/story-wildcard` | Controlled chaos — injects unexpected complications that feel inevitable in retrospect |
| `/generate-story` | Orchestrator — takes four dials and writes a 3,000–5,000 word story |

**Recommended workflow:** `/story-premise` → pick a premise → `/generate-story`

---

## Installation

1. Clone the repo and copy the skills into your Claude Code skills folder:

```bash
git clone https://github.com/sachinbenny/uet1-story-engine.git
cp -r uet1-story-engine/skills/* ~/.claude/skills/
```

This installs six skills globally:
```
~/.claude/skills/story-premise/
~/.claude/skills/story-bible/
~/.claude/skills/story-characters/
~/.claude/skills/story-protocol/
~/.claude/skills/story-wildcard/
~/.claude/skills/generate-story/
```

2. Verify installation — open a Claude Code session and type `/story-bible`. It should respond with a world summary.

---

## Quick Start

The main entry point is `/generate-story`. It takes four dials (1–4) and an optional premise:

```
/generate-story A:2 B:3 C:2 D:1 [optional premise]
```

**Example invocations:**

```
/generate-story A:2 B:2 C:2 D:1
```
A balanced story — moderate world detail, one established character in a supporting role, Story Circle applied, one small surprise. Good starting point.

```
/generate-story A:3 B:4 C:3 D:2 Felix Lim attempting to modify The Covenant a year after Lin's disappearance
```
World-forward, established characters driving, visible structure, one structural wildcard.

```
/generate-story A:1 B:1 C:2 D:4 A new passenger who doesn't understand what their bio-band reading means
```
New character, minimal world machinery, standard structure, maximum surprise — the premise inverts.

---

## The Four Dials

### A — Bible (World Density)
How much of the UET-1 world apparatus appears in the story.

| 1 | 2 | 3 | 4 |
|---|---|---|---|
| World as background texture | 2–3 systems named and used | Systems are characters; faction conflict active | Full world immersion; geopolitics drive choices |

### B — Characters (Voice Fidelity)
Whether established characters appear and how faithfully.

| 1 | 2 | 3 | 4 |
|---|---|---|---|
| New characters only | One established character supporting | 1–2 established characters in significant roles | Established characters drive; full voice fidelity |

### C — Protocol (Structural Complexity)
How explicitly the narrative frameworks shape the story.

| 1 | 2 | 3 | 4 |
|---|---|---|---|
| Intuitive structure | Story Circle applied; one MICE thread | Visible nesting; structural template | Full architecture; 8 beats; 3–4 MICE threads |

### D — Wildcard (Surprise Intensity)
The degree of unexpected complication or reversal.

| 1 | 2 | 3 | 4 |
|---|---|---|---|
| One small enriching detail | One structural redirection | Two intersecting wildcards | Premise inversion |

---

## Dial Combination Profiles

| Profile | Dials | Best for |
|---------|-------|----------|
| **The Dispatch** | 1-1-1-1 | Quiet, intimate, literary — small-stakes emotional truth |
| **The Field Report** | 2-2-2-1 | Reliable story engine for most purposes |
| **The Operation** | 3-3-2-2 | Stories about how gray-market operations work |
| **The Architecture** | 4-4-4-3 | Canon-expanding stories; demanding but rewarding |
| **The Wildcard Special** | 2-1-2-4 | Experimental; tests the edges of the universe |
| **The Character Portrait** | 1-4-3-1 | Deep study of a single established character |
| **The World Machine** | 4-2-4-2 | The system as protagonist |

---

## The World

### UET-1 at a Glance
- **Route**: Lagos/Lisbon → Woodlands, Singapore
- **Distance**: 23,300km across 17 jurisdictions
- **Key doctrine**: *Stopping is a jurisdictional event.*
- **Surveillance**: ECOROUTE system with bio-band monitoring (green → black)
- **Institutional memory**: Pono devices — persistent, opinionated, relentless

### Established Characters

| Character | Story | Voice |
|-----------|-------|-------|
| **Rowan** | *The Chartered Flesh* | Sardonic, technical, body-aware. British working-class intelligence in gray-market professional. |
| **The Spy** | *Ghost Inside the Light* | Institutional grammar fracturing under grief. Says "vehicle operator" when he means "my son." |
| **The Carrier** | *Ghost Inside the Light* | Craft-focused, physical, occasionally lyrical. American understatement. Doesn't ask what things are for. |
| **Felix Lim** | *The Headless Empire* | Earnest, organized, increasingly fractured. True believer whose thesis is being destroyed. |
| **Detective Murkin** | *Signals in the Margins* | Deadpan bureaucratic absurdism. Gogol register. His mercy is legible only through what he doesn't file. |
| **Lin Yuan Exact** | *The Headless Empire* | Aphoristic. Quotes his own manual. Use sparingly. |
| **Marcus Hale** | *The Chartered Flesh* | Never appears in his own POV. Felt through surveillance feeds and intermediaries. |

### Key Factions
- **Fiduciary States** — US analogue; interventionist intelligence apparatus
- **Telluric Empire** — China analogue; expansion through infrastructure
- **Neutral Forge** — Tech conglomerate in Strait Country; built The Covenant
- **Sable Meridian / Corvin Field Services** — Arms brokerage; gray-market operations

---

## Using Individual Skills

### `/story-bible`
Ask world questions or update canon:
```
/story-bible What are the bio-band tier meanings?
/story-bible update: The 11-minute jurisdictional gap during the Russian-to-Chinese gauge transition has been mapped by at least one Sable Meridian operative
```

### `/story-characters`
Get voice briefs or create new characters:
```
/story-characters voice: Murkin
/story-characters new: A Telluric Empire trade attaché who has been on the train for 60 consecutive days
```

### `/story-protocol`
Scaffold a story or diagnose narrative problems:
```
/story-protocol scaffold: A story about the refugee boy from Signals in the Margins, five years later
/story-protocol diagnose: My story has an ending that feels unearned — the character gets away with everything
```

### `/story-premise`
Generate three calibrated premises before writing:
```
/story-premise A:2 B:3 C:2 D:2
```
Returns three loglines + high concepts + ready-to-run `/generate-story` commands. Pick the one you like and run it.

### `/story-wildcard`
Get surprise element suggestions:
```
/story-wildcard dial: 3
/story-wildcard seed: The soup recipes in the Mirage archive are actually code
/story-wildcard suggest
```

---

## Narrative Rules (Always Apply)

These are inviolable regardless of dial settings:

1. **Stopping is a jurisdictional event.** The train almost never stops. When it does, it changes everything.
2. **Surveillance is ambient, not dramatic.** ECOROUTE hums. It does not announce.
3. **The price is always paid.** Nobody escapes consequence.
4. **Strategic amnesia is moral argument, not evasion.** Choosing not to file, not to report, not to see — this is the dominant moral act in this universe.
5. **No villain enjoys being evil.** Hale is professional. The system is indifferent. That's worse.
6. **Technical vocabulary reveals character.** It does not educate the reader.
7. **Distance is not freedom.** 23,300km is one long room.

---

## The Source Material

The world is built from four original stories:

- *The Chartered Flesh* — Rowan, BRX-90, Stolar Key Extraction
- *Ghost Inside the Light* — The Spy, The Carrier, The Lights installation
- *The Headless Empire* — Felix Lim, Lin Yuan Exact, The Covenant
- *Signals in the Margins* — Detective Murkin, Mirage Handler, the refugee boy

Source PDFs are in `/wiki/`.

---

## Extending the System

### Adding new canon
Use `/story-bible update: [detail]` — the skill will add it to `bible.json` in the appropriate section.

### Adding new characters
Use `/story-characters new: [description]` — the skill will create a profile consistent with the world and add it to `characters.json`.

### Adding wildcard patterns
Edit `~/.claude/skills/story-wildcard/references/surprise-patterns.md` directly — add new patterns to the appropriate category and new entries to the seed bank.

### Building on existing stories
Set Dial B to 3 or 4 and reference established characters by name in your premise. The skill will read their full character files and maintain voice and arc consistency.
