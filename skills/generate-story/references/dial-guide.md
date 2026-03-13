# Generate Story: Dial Guide

The generate-story skill takes four dials (1-4) controlling the influence of each sub-skill. This guide defines what each dial value means and how to combine them.

## The Four Dials

### Dial A: Bible (World Density)
Controls how densely the UET-1 world apparatus appears in the story.

| Value | Effect |
|-------|--------|
| **1** | World is background. The train exists, surveillance hums, but specific systems (ECOROUTE, bio-bands, Pono, specific factions) are barely named. Reader feels a world without being briefed on it. |
| **2** | World is present. 2-3 specific systems named and used. Factions implied. Institutional texture throughout. |
| **3** | World is foregrounded. The systems are characters in their own right. Faction conflict shapes the plot. Specific operations and artifacts active. |
| **4** | Full world immersion. The story is about the world as much as the characters. Multiple systems interact. Geopolitics drive individual choices. Canon elements activate. |

### Dial B: Characters (Voice Fidelity)
Controls whether established characters appear and how faithfully their voices are rendered.

| Value | Effect |
|-------|--------|
| **1** | New characters only, designed to fit the world. Established characters may be referenced but do not appear as POV characters. |
| **2** | One established character as POV or supporting figure, voice-accurate but not the primary focus. New characters carry the story. |
| **3** | One or two established characters in significant roles, voice fully rendered. Their established arcs are active and respected. |
| **4** | Established characters drive the story. Full voice fidelity. Their documented arcs and relationships are the structural spine. Contradicting established canon requires explicit justification. |

### Dial C: Protocol (Structural Complexity)
Controls how explicitly the Story Circle and MICE frameworks shape the narrative architecture.

| Value | Effect |
|-------|--------|
| **1** | Natural storytelling. Beginning, middle, end. No explicit framework application. Tone and moral framework active but structure is intuitive. |
| **2** | Story Circle applied. All 8 steps present, natural flow. One MICE thread dominant. |
| **3** | Story Circle explicit with callbacks between steps 1 and 8. Two MICE threads nested, visible layering. Structural template applied (Murkin, Rowan, Spy/Carrier, or Felix template). |
| **4** | Full architectural approach. All 8 Story Circle steps as distinct beats. 3-4 MICE threads fully nested and closed in correct order. Self-conscious structure. The story knows what kind of story it is. |

### Dial D: Wildcard (Surprise Intensity)
Controls the degree of unexpected complication or reversal.

| Value | Effect |
|-------|--------|
| **1** | One small unexpected detail. Enriches without redirecting. (A Pono editorial, a soup recipe in the archive, a bio-band color that doesn't match.) |
| **2** | One structural wildcard. An unexpected development redirects one character arc or recontextualizes a key relationship. |
| **3** | Two wildcards that intersect — one character-level, one world-level — recontextualizing each other. |
| **4** | Full controlled chaos. A wildcard that inverts the apparent premise. The story we thought we were telling is revealed as the frame for the actual story. |

---

## Dial Combination Profiles

### The Dispatch (1-1-1-1)
Minimal in all dimensions. A quiet, character-focused piece set in the UET-1 world. New characters, intuitive structure, world as texture, single small surprise. Closest to literary fiction. Best for: intimate moments, small-stakes emotional truth.

### The Field Report (2-2-2-1)
Balanced across all dimensions. Established character in a supporting role, Story Circle applied, 2-3 world systems active, one enriching surprise. Reliable story engine for most purposes.

### The Operation (3-3-2-2)
World and character both elevated. Complex institutional context, established characters driving the plot, one structural wildcard. Best for: stories about how operations work, gray-market machinery in motion.

### The Architecture (4-4-4-3)
Full world immersion, established characters, complete structural framework, two intersecting wildcards. Demanding to write; rewarding when done. Best for: stories that are adding to canon in a significant way.

### The Wildcard Special (2-1-2-4)
Moderate world, new characters, standard structure, maximum surprise. The premise inverts. Best for: experimental pieces, testing the edges of the universe.

### The Character Portrait (1-4-3-1)
World minimal, character maximal, explicit structure, small surprise. A deep character study using the Story Circle fully. Best for: exploring a single established character's inner life in detail.

### The World Machine (4-2-4-2)
Full world immersion, one established character, full structural framework, one structural wildcard. The world is the protagonist. Best for: stories where the system produces the story.

---

## Story Length by Protocol Dial

| Protocol Dial | Target Word Count | Section Count |
|---------------|------------------|---------------|
| 1 | 3,000–3,500 | 3–5 sections |
| 2 | 3,500–4,000 | 5–7 sections |
| 3 | 4,000–4,500 | 7–9 sections |
| 4 | 4,500–5,000 | 8–12 sections |

Target range for all stories: 3,000–5,000 words.

---

## Generation Sequence

When generate-story is invoked with dial settings A-B-C-D:

1. **Read Bible (A)** — Pull relevant world context at depth proportional to Dial A
2. **Pull Characters (B)** — Pull relevant character voice briefs at depth proportional to Dial B
3. **Scaffold Protocol (C)** — Apply Story Circle and MICE at complexity proportional to Dial C
4. **Inject Wildcard (D)** — Select or generate wildcard element(s) proportional to Dial D
5. **Synthesize and Write** — Generate the story, targeting word count per Protocol Dial
6. **Tone Check** — Before finalizing, verify against tone card (no villain enjoyment, no cheap sentiment, surveillance as ambient)

---

## Common Mistakes to Avoid

- **Dial A=4 but Dial B=1**: Full world detail with no established characters works only if the new characters have extremely strong voices. Plan carefully.
- **Dial C=4 but Dial D=4**: Full structural complexity + maximum surprise is the hardest combination. The wildcard must be seeded across all 8 Story Circle steps.
- **Dial D=4 without seeds planted**: Wildcards at maximum intensity require setup in the first third of the story. Don't introduce the wildcard cold.
- **All dials at 1**: The Dispatch can be excellent, but make sure the small-scale stakes are genuine, not trivial.
