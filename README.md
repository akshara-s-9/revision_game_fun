# Hazardous Earth — GCSE Geography Expedition

A revision game for **Edexcel GCSE Geography B (Investigating Geographical Issues)**.

You fly around a real world map, land on genuine case-study locations, complete
challenges to earn **tokens**, then spend those tokens as a hazard-management
budget in the level finale.

**Level 1 — Hazardous Earth** (Component 1, Topic 1) is fully playable.

## Play it

Open `index.html` in any browser. That's it — no install, no build step, no
internet connection required. It is a single self-contained file.

## How it works

**Eight case-study sites**, each pinned at its true latitude and longitude:

| Site | Case study | Spec content |
|---|---|---|
| Tacloban, Philippines | Typhoon Haiyan, 2013 | Cyclone formation, structure, hazards |
| New Jersey & New York | Hurricane Sandy, 2012 | Developed/developing impact contrast |
| Gorkha, Nepal | Nepal earthquake, 2015 | Collision boundary, low-income country |
| Maule, Chile | Chile earthquake, 2010 | Destructive boundary, development contrast |
| Eyjafjallajökull, Iceland | Ash cloud, 2010 | Constructive boundary, volcano types |
| San Andreas, California | Managing tectonic risk | Conservative boundary, the four Ps |
| Vostok, Antarctica | Ice core record | Natural climate change and its evidence |
| Equatorial Atlantic | The ITCZ | Global atmospheric circulation |

The map also draws the **plate boundaries**, colour-coded by type, and can
overlay the **atmospheric circulation cells** — so the map itself is revision.

**Six challenge formats**, so it never becomes one long multiple-choice test:
multiple choice, sequencing, matching pairs, labelling a diagram, data response,
and a written exam question you mark yourself against the real mark scheme.

**Tokens.** Every challenge is worth ◈ 3. Each hint or mistake costs one. You
always get the full explanation afterwards, right or wrong. Reach ◈ 60 and the
finale unlocks.

**The finale.** You advise a government on tectonic risk and spend your tokens
across prediction, preparation, protection and planning. Buying everything costs
◈ 156 and a perfect run earns ◈ 126 — so you cannot have it all. The game then
simulates the earthquake and reports deaths, economic loss and recovery time,
with a debrief explaining which choices worked, which combinations reinforced
each other, and what your plan left exposed.

Progress saves automatically in your browser. **Reset** wipes it.

## Adding or editing questions

All content lives in one place near the top of `index.html`, under
`2. GAME CONTENT`. You never need to touch the engine code below it.

Each site is an object in the `SITES` array. Add a question by dropping another
object into that site's `qs` array:

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
  `id` must match a `data-id` on a hotspot in that diagram (see `9. DIAGRAMS`).
- `{ t:"data", chart:{...}, q, opts, a }` — `chart.kind` is `"bars"`, `"table"` or `"line"`.
- `{ t:"exam", q, marks, scheme:[...] }` — one credit point per array entry.

Every question needs a `why`. That explanation is the point of the game.

To move or add a map pin, set `lon` and `lat` to the real coordinates — the
projection places it automatically.

## Levels 2–9

The level rail shows all nine topics of the specification. Only Level 1 is built.
The remaining eight follow the same structure: pick real locations, write the
questions, and add a finale that spends tokens on a decision relevant to that topic.

## Accuracy

Figures are the ones commonly quoted at GCSE and are rounded (`~6,300 deaths`,
`~$12 billion`). Sources vary, particularly on economic damage. Check anything
you plan to quote in an exam against your own notes and the current specification.
