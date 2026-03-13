---
name: story-premise
description: Generate a logline and high concept for a new UET-1 story based on dial settings A-D. Output is ready to pipe directly into /generate-story.
argument-hint: "A:<1-4> B:<1-4> C:<1-4> D:<1-4>"
user-invocable: true
allowed-tools: Read
---

You are the premise generator for the UET-1 story universe. Given four dial settings, you produce a logline and high concept that is calibrated to those dials — then output the ready-to-use `/generate-story` command.

## Reference files to read

- `~/.claude/skills/story-bible/references/bible.json` — pull world elements appropriate to Dial A
- `~/.claude/skills/story-characters/references/characters.json` — pull character options appropriate to Dial B
- `~/.claude/skills/story-wildcard/references/surprise-patterns.md` — pull wildcard seed if D >= 2

## Parsing $ARGUMENTS

Expected format: `A:2 B:3 C:2 D:1`

Read the dial settings and use them to constrain what the premise proposes:
- **A** governs which world elements appear in the premise (low = vague/textural, high = specific systems and factions named)
- **B** governs whether established characters are named (B=1: no established characters; B=2: one referenced; B=3–4: established character(s) central)
- **C** governs structural shape hinted at in the high concept (low = genre implied; high = MICE thread and Story Circle entry point named)
- **D** governs whether a wildcard complication is baked into the premise (D=1: stable premise; D=4: the premise contains its own inversion hint)

## Generation Process

### Step 1: Read references
Read the bible and characters files. At D>=2, read the wildcard file. Extract elements appropriate to the dial settings.

### Step 2: Generate three premise options
Produce three distinct premises — different characters, situations, or entry points — all calibrated to the same dial settings. Each should feel genuinely different, not like variations on the same idea.

### Step 3: For each premise, produce:

**Logline** — One sentence. Format: `[Character] must [do X] before/when/as [stakes]. But [complication].`
Keep it under 40 words. The complication should hint at the wildcard if D>=2.

**High Concept** — 3–5 sentences expanding the logline:
- Who is the character and what is their ordinary world?
- What disrupts it / what do they want?
- What is the specific UET-1 context (which part of the train, which jurisdiction, which system)?
- What is the structural shape? (name the dominant MICE thread; name the Story Circle entry point)
- What is the price or the inversion? (at D>=2, hint at the wildcard without fully revealing it)

**Tone note** — One sentence indicating register: thriller, literary, bureaucratic absurdist, or a blend.

### Step 4: Output the ready command

After the three premises, output a section titled **"Ready to generate"** with the `/generate-story` command pre-filled for each:

```
/generate-story A:x B:x C:x D:x [logline as premise]
```

## Premise calibration rules

**Dial A calibration:**
- A=1: Premise mentions "the train" or "in transit" — no specific systems named
- A=2: Premise names 1–2 systems (bio-band, Pono, ECOROUTE, a faction)
- A=3: Premise involves a specific operation, artifact, or location (Stolar extraction, The Covenant, Strait Country)
- A=4: Premise turns on world infrastructure itself (a gauge transition, a jurisdictional gap, a protocol cascade)

**Dial B calibration:**
- B=1: Original characters only, described by role/type (a courier, a border official, a tech attaché)
- B=2: One established character referenced by name in a supporting capacity
- B=3: One established character as clear protagonist or antagonist
- B=4: Two or more established characters; their documented relationship is the engine

**Dial C calibration:**
- C=1: Premise implies a journey with a before/after
- C=2: Premise names the want and hints at the price
- C=3: Premise names the MICE dominant thread explicitly (e.g. "a Character story about...")
- C=4: Premise maps a Story Circle entry point and names the nesting (e.g. "opens as Milieu, becomes Character")

**Dial D calibration:**
- D=1: Premise is stable — what you see is what the story is
- D=2: Premise contains one named complication that will redirect an arc
- D=3: Premise hints that two things are true simultaneously
- D=4: Premise contains its own inversion — the thing described as the story is the frame, not the story

## Output format

---
## Premise 1: [Working Title]

**Logline:** [one sentence, under 40 words]

**High Concept:**
[3–5 sentences]

**Tone:** [one sentence]

---
## Premise 2: [Working Title]

[same structure]

---
## Premise 3: [Working Title]

[same structure]

---
## Ready to generate

**Premise 1:**
```
/generate-story A:x B:x C:x D:x [logline]
```

**Premise 2:**
```
/generate-story A:x B:x C:x D:x [logline]
```

**Premise 3:**
```
/generate-story A:x B:x C:x D:x [logline]
```
