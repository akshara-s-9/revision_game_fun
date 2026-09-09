# Hazardous Earth — GCSE Geography Expedition

A revision game for **Edexcel GCSE Geography B (Investigating Geographical Issues)**.

Revision is split into two separate halves: the **topics** of the specification,
tested as concepts, and four **case studies** learnt in two linked pairs.
Completing challenges earns **tokens**, which you then spend as a
hazard-management budget in the level finale.

You move between them by running and jumping along a side-scrolling course.

**Level 1 — Hazardous Earth** (Component 1, Topic 1) is fully playable.

## Play it

Open `index.html` in any browser. That's it — no install, no build step, no
internet connection required.

Two files, which need to sit in the same folder:

| File | What it holds |
|---|---|
| `content.js` | Everything you revise from: the topics, the case studies, every question and explanation, and the finale |
| `index.html` | The engine that draws and runs it |

The split is there so that writing questions never means going near the game
code. `content.js` loads as a plain script, so the game stays a double-click
away with no server involved.

## How it works

### The course is a cross-section of the Earth

The level is not a menu. It is a cutaway of the hazardous Earth, scrolling left
to right, and **height on screen means what it says**. The run starts on a cloud
deck high in the atmosphere, drops through the storm band to the coast where
people live, descends into a rift cut through the crust, climbs back out to the
surface, and ends at the field stations where the case studies are.

Topics sit along it **in specification order**, at the depth they belong to:

```
  1.1  1.2                                        UPPER ATMOSPHERE
            1.3                                   STORM BAND
                  1.4              1.7  CS CS CS  SURFACE
                        1.5                       CRUST
                              1.6                 MANTLE
```

Between each stop and the next stands one hazard, and it is the hazard the topic
behind it has just taught: a jet-stream gust, an ice-age cold snap, a cyclone
eyewall, collapsed masonry, a fault scarp, a lava spurt that rises and falls on a
timer, a tsunami surge. You jump them.

Walk up to a signpost and it opens a window at you, with the topic, what it is
worth, and the button that starts it.

`←` `→` run · `↑` jump · `↵` opens the stop you are standing at. Clicking a
signpost takes you straight there, and the course index below the world does the
same thing for anyone who would rather not platform — nothing is reachable only
by jumping.

### Topics and case studies are separate

**Topics** cover the specification content as concepts. Named places appear only
as illustration — there is no case study to memorise here, just the geography.

| Topic | What it covers | Qs |
|---|---|---|
| 1.1 Global atmospheric circulation | Cells, pressure belts, winds, world climate zones | 5 |
| 1.2 Natural climate change | Quaternary fluctuations, the evidence, the natural causes | 5 |
| 1.3 Tropical cyclones: formation and structure | Conditions, Coriolis, anatomy, Saffir–Simpson | 6 |
| 1.4 Hazards, vulnerability and responses | How a hazard becomes a disaster; the exam vocabulary | 4 |
| 1.5 Earth's structure and plate boundaries | Inside the Earth; the four boundary types | 6 |
| 1.6 Tectonic hazards and their effects | Earthquakes, volcanoes, secondary hazards | 6 |
| 1.7 Managing tectonic hazards | The four Ps, and which of them saves lives | 4 |

**Case studies** are their own section, and they come in **two linked pairs**.
Each pair contrasts a high-income country with a poorer one, and each unlocks a
comparison round once you have studied both halves:

| Pair | Case studies | Comparison |
|---|---|---|
| Tectonic | Tōhoku, Japan — earthquake and tsunami, 2011 (5 Qs)<br>Gorkha, Nepal — earthquake, 2015 (5 Qs) | **Japan vs Nepal** (4 Qs) |
| Tropical cyclone | New Orleans, USA — Hurricane Ida, 2021 (5 Qs)<br>Tacloban, Philippines — Typhoon Haiyan, 2013 (5 Qs) | **Ida vs Haiyan** (4 Qs) |

The comparison is where the pairing earns its keep. It is not a recap — it asks
the questions you can only ask once you hold both studies in your head: why
Nepal's $5 billion hurt more than Japan's $235 billion, why a city whose levees
held still lost around 30 people to a power cut, and what each pair proves about
the limits of development as an explanation.

Ida and Haiyan are the only two tropical cyclones named anywhere in the game.
No other storm is used for comparison, so everything you are asked about a
hurricane is answerable from these two case studies alone.

The four case studies sit at the end of the course, after 1.7, colour-coded by
pair.

**Six challenge formats**, so it never becomes one long multiple-choice test:
multiple choice, sequencing, matching pairs, labelling a diagram, data response,
and written exam questions you mark yourself.

### The long-form questions

There are 4-mark and 8-mark questions only, matching the paper, and each is
marked the way Edexcel B marks it.

**4-mark questions are point-marked, and the reason is where the second mark
lives.** Every creditable answer in the scheme is split into a point and the
reason that develops it. The reason cannot be ticked until you have claimed the
point it belongs to, and withdrawing a point takes its development mark with it —
because a statement without a reason scores 1 mark, not 2. A running total shows
what you have earned, capped at two developed reasons:

```
☑ 1  Air rises at the equator, creating a belt of low pressure
  ☑ 1  because intense insolation heats the surface, and as the air rises it
        cools and its water vapour condenses, giving the heavy convectional
        rainfall that supports tropical rainforest
```

**8-mark questions are levels-based.** You get indicative content for reference,
then place your whole answer in Level 1, 2 or 3 against the real descriptors and
award yourself a mark inside that band. An answer with no supported judgement
cannot reach Level 3, however much it knows.

**Tokens.** Every challenge is worth ◈ 3. Each hint or mistake costs one. You
always get the full explanation afterwards, right or wrong. Reach ◈ 90 and the
finale unlocks.

**The finale.** You advise a government on tectonic risk and spend your tokens
across prediction, preparation, protection and planning. Buying everything costs
◈ 234 and a perfect run earns ◈ 192 — so you cannot have it all. The game then
simulates the earthquake and reports deaths, economic loss and recovery time,
with a debrief explaining which choices worked, which combinations reinforced
each other, and what your plan left exposed.

Progress saves automatically in your browser. **Reset** wipes it.

## Adding or editing questions

All content lives in `content.js`. You never need to open `index.html` to add,
edit or remove a question.

There are two arrays, matching the two halves of the game.

`TOPICS` holds the concept revision:

```js
{ id:"cyclones", ref:"1.3", name:"Tropical cyclones: formation and structure",
  short:"Cyclones",                     // the label on the signpost in the world
  theme:"One line shown on the topic card",
  brief:"The paragraph shown before the first challenge.",
  keys:["Chips","Shown","Under","The brief"],
  qs:[ /* … */ ] }
```

`PAIRS` holds the case studies. Each pair has exactly two `studies` and one
`compare`, which stays locked until both studies have been done:

```js
{ id:"tectonic", name:"Tectonic pair", colour:"#b98cff",
  sub:"One line shown under the pair title",
  studies:[
    { id:"tohoku", short:"Tōhoku",          // `short` is the signpost label
      name:"Tōhoku, Japan", sub:"Earthquake and tsunami, 2011",
      brief:"…", facts:["11 March 2011","Magnitude 9.0"],
      qs:[ /* … */ ] },
    { /* the second study */ }
  ],
  compare:{ id:"cmp-tectonic", name:"Japan vs Nepal",
            brief:"…", qs:[ /* … */ ] } }
```

Add a question by dropping another object into any `qs` array — topics, studies
and comparisons all use the same question formats:

```js
{ t:"mcq",
  q:"Your question?",
  opts:["Wrong","Right","Wrong","Wrong"], a:1,   // a = index of the correct option
  hint:"A nudge, costing one token.",
  why:"The explanation shown afterwards. This is where the actual teaching happens." }
```

The other formats:

- `{ t:"order", q, items:[...] }` — `items` in the **correct** order; the game shuffles them.
- `{ t:"match", q, pairs:[[term, meaning], ...] }`
- `{ t:"label", q, diagram:"cyclone"|"destructive", targets:[{id, prompt}] }` —
  `id` must match a `data-id` on a hotspot in that diagram (see `7. DIAGRAMS`
  in `index.html`).
- `{ t:"data", chart:{...}, q, opts, a }` — `chart.kind` is `"bars"`, `"table"` or `"line"`.
- `{ t:"exam", marks:4, q, guidance, scheme:[{p, r}, ...] }` — point-marked.
  `p` is the point (1 mark), `r` is the reason that develops it (1 further mark).
  Write `r` as a continuation beginning "because", "so" or "which" — it is shown
  as the second half of the same sentence, and it is what the second mark is for.
- `{ t:"exam", marks:8, q, guidance, indicative:[...], levels:[{band, lo, hi, d}] }` —
  levels-based. The three bands must tile 1–8 with no gap or overlap.

Every question needs a `why`. That explanation is the point of the game.

Stops are laid out along the course automatically, in the order they appear in
`TOPICS` and then `PAIRS`, so adding a topic extends the level. How deep each
topic sits is one number in `TOPIC_DEPTH`, and the hazard standing after it is
one name in `GAP_HAZARD` — both at the top of `3. THE COURSE` in `index.html`,
and the only two places the engine needs telling about new content.

## Levels 2–9

The level rail shows all nine topics of the specification. Only Level 1 is built.
The remaining eight follow the same structure: split the level into its
specification sub-topics for `TOPICS`, choose linked pairs of contrasting case
studies for `PAIRS`, and add a finale that spends tokens on a decision relevant
to that level. The course rebuilds itself around whatever those arrays contain.

## Accuracy

Figures are the ones commonly quoted at GCSE and are rounded (`~6,300 deaths`,
`~$12 billion`). Sources vary, particularly on economic damage. Two worth
knowing about:

- **Japan's death toll** is usually given as around 15,900 confirmed plus 2,500
  still missing, hence "~18,500".
- **Ida's death toll** depends on where you draw the boundary. Around 30 died in
  Louisiana, most of them indirectly, and around 50 more when the remnants
  flooded New York and New Jersey days later. Totals of "around 90" or higher
  circulate because they count the whole track. The game keeps Louisiana and the
  north-east separate, because the distinction is the interesting part.
- **The $14.5 billion figure** is the cost of the levee, floodwall and surge
  barrier system that rings New Orleans, which held against Ida's surge.

Check anything you plan to quote in an exam against your own notes and the
current specification.
