/* ============================================================================
   HAZARDOUS EARTH — GAME CONTENT
   Level 1 of the Edexcel GCSE Geography B revision game.

   Everything a person revising actually reads lives in this file: the topics,
   the case studies, every question and every explanation, and the finale they
   spend their tokens on. index.html holds the engine that draws and runs it and
   needs no edits to take new content.

   Loaded as a plain script before index.html's own, so LEVELS, TOPICS, PAIRS
   and FINALE are simply there when the engine starts. That keeps the game a
   double-click away with no server and no build step.

   Question types: mcq | order | match | label | data | exam
   ============================================================================ */

"use strict";

var LEVELS = [
  { n:1, name:"Hazardous Earth",                  comp:"Component 1", live:true  },
  { n:2, name:"Development Dynamics",             comp:"Component 1", live:false },
  { n:3, name:"Challenges of an Urbanising World",comp:"Component 1", live:false },
  { n:4, name:"UK's Evolving Physical Landscape", comp:"Component 2", live:false },
  { n:5, name:"UK's Evolving Human Landscape",    comp:"Component 2", live:false },
  { n:6, name:"Geographical Investigations",      comp:"Component 2", live:false },
  { n:7, name:"People and the Biosphere",         comp:"Component 3", live:false },
  { n:8, name:"Forests Under Threat",             comp:"Component 3", live:false },
  { n:9, name:"Consuming Energy Resources",       comp:"Component 3", live:false }
];

/* ----------------------------------------------------------------------------
   TOPICS — the specification content, tested as concepts.
   No case studies live here: named places appear only as illustration.
   ---------------------------------------------------------------------------- */

var TOPICS = [

/* ---------------------------------------------------------------- 1.1 ---- */
{
  id:"circulation", ref:"1.1", name:"Global atmospheric circulation",
  short:"Circulation",
  theme:"Cells, pressure belts, winds, and the pattern of world climate zones",
  brief:"Three circulation cells in each hemisphere carry surplus heat from the tropics towards the poles. Where air rises you get low pressure and rain; where it sinks you get high pressure and desert. Get this straight and the position of the rainforests, the hot deserts, the trade winds and the tropical cyclone belts all follow from it. Switch on 'Show circulation cells' on the map to see the bands.",
  keys:["Hadley · Ferrel · Polar","Rising air = low pressure","Sinking air = high pressure","Coriolis deflection","The ITCZ"],
  qs:[
    { t:"order",
      q:"Name the circulation cells in order, starting at the equator and moving to the pole.",
      items:["Hadley cell (0° to 30°)","Ferrel cell (30° to 60°)","Polar cell (60° to 90°)"],
      hint:"There are only three, and the last one is named after the region it sits over.",
      why:"Each hemisphere has three cells: Hadley (equator to 30°), Ferrel (30° to 60°) and Polar (60° to pole). They transfer surplus heat from the tropics towards the poles, which is why the tropics do not keep getting hotter and the poles do not keep getting colder." },

    { t:"mcq",
      q:"Why does the equator receive so much rainfall?",
      opts:[
        "Cold air sinks there, forcing moisture out of the atmosphere",
        "Intense insolation heats the surface, so air rises, cools and condenses, creating low pressure and convectional rainfall",
        "Ocean currents push rain clouds towards the equator",
        "It is closest to the Sun, so the rain evaporates less"
      ], a:1,
      hint:"Rising air always does the same thing as it gains height.",
      why:"The equator receives the most concentrated insolation, because the Sun's rays strike almost vertically. The heated air rises, cools with height, and its water vapour condenses — producing low pressure, towering cloud and heavy convectional rainfall. This is why tropical rainforests lie along the equator." },

    { t:"mcq",
      q:"Why are most of the world's hot deserts found at around 30° north and south?",
      opts:[
        "Air is rising there, so all the rain falls elsewhere",
        "Air that rose at the equator has cooled, lost its moisture, and now descends — warming and drying as it sinks, creating high pressure",
        "They are the closest latitudes to the Sun",
        "Ocean currents there are unusually warm"
      ], a:1,
      hint:"Follow the air that rose at the equator. Where does it come back down, and what has it already lost?",
      why:"Air rising at the equator loses its moisture as rain, moves polewards at height, then descends at roughly 30°. Sinking air warms and its capacity to hold moisture increases, so there is no condensation and no cloud — giving stable high pressure and arid conditions. The Sahara, Arabian, Kalahari and Australian deserts all sit in this belt." },

    { t:"match",
      q:"Match each latitude to its pressure and typical climate.",
      pairs:[
        ["0° (equator)","Low pressure, rising air, heavy convectional rain — tropical rainforest"],
        ["30° north and south","High pressure, sinking air, very dry — hot deserts"],
        ["60° north and south","Low pressure where cold polar and warm tropical air meet — changeable, frontal rain"],
        ["90° (the poles)","High pressure, sinking dry air, very cold — polar desert"]
      ],
      hint:"Rising air always means low pressure and rain; sinking air always means high pressure and dry conditions.",
      why:"Alternating low and high pressure belts explain the pattern of global climate zones. The UK sits near 50–60°N at the polar front, which is exactly why our weather is so changeable — warm tropical air and cold polar air are constantly meeting overhead." },

    { t:"exam", marks:4,
      q:"Explain two ways in which global atmospheric circulation affects the pattern of world climate zones. (4 marks)",
      guidance:"Award 1 mark for each valid reason identified, and a further 1 mark where that reason is developed with an explanation of how or why it had that effect. A point stated without a reason scores 1 mark only. Credit a maximum of two developed reasons.",
      scheme:[
        {
          "p": "Air rises at the equator, creating a belt of low pressure",
          "r": "because intense insolation heats the surface, and as the air rises it cools and its water vapour condenses, giving the heavy convectional rainfall that supports tropical rainforest"
        },
        {
          "p": "Air descends at around 30° north and south, creating high pressure",
          "r": "because air that rose at the equator has already lost its moisture as rain, so as it sinks it warms and its capacity to hold moisture rises, meaning no condensation and therefore the world's hot desert belt"
        },
        {
          "p": "Low pressure forms at around 60° north and south",
          "r": "because warm tropical air meets cold polar air at the polar front and is forced to rise, producing the frontal rainfall and changeable weather of the mid-latitudes"
        },
        {
          "p": "High pressure sits over the poles",
          "r": "because very cold, dense air sinks there, and sinking air cannot produce precipitation, which is why the poles are classed as deserts despite the ice"
        },
        {
          "p": "Surface winds blow from the high pressure belts towards the low",
          "r": "because air always moves from high to low pressure, and the Coriolis effect deflects it into the trade winds and the westerlies rather than letting it travel due north or south"
        }
      ],
      why:"Notice how each creditable answer is a chain, not a fact. 'Air rises at the equator' on its own is worth 1 mark — it is a statement. The second mark comes from saying what that rising does: cools, condenses, rains, rainforest. In the exam, the words 'because', 'so' and 'which means' are what turn a 1-mark point into a 2-mark one." }
  ]
},

/* ---------------------------------------------------------------- 1.2 ---- */
{
  id:"naturalchange", ref:"1.2", name:"Natural climate change",
  short:"Climate change",
  theme:"Quaternary fluctuations, the evidence for them, and their natural causes",
  brief:"The climate changed long before anyone burned a lump of coal. Through the Quaternary — the last 2.6 million years — the Earth has swung between cold glacials and warm interglacials roughly every 100,000 years. This topic is about how we know that, from ice cores, tree rings, pollen and historical records, and what drove it: orbital cycles, variations in solar output, and volcanic eruptions.",
  keys:["Quaternary period","Ice cores over 400,000 years","Milankovitch cycles","Solar output","Volcanic cooling"],
  qs:[
    { t:"data",
      chart:{ kind:"line", title:"Atmospheric CO₂ from an Antarctic ice core", sub:"Carbon dioxide concentration over the last 400,000 years.",
        xlab:"Thousands of years ago", ylab:"CO₂ (ppm)", xmin:0, xmax:400, ymin:170, ymax:290, xflip:true,
        series:[{ label:"CO₂ (ppm)", colour:"#3ad4bb", points:[[400,280],[385,240],[370,200],[350,225],[340,240],[332,290],[320,250],[300,220],[280,215],[270,210],[255,235],[243,280],[230,255],[215,240],[200,215],[190,200],[170,195],[150,190],[138,200],[130,285],[120,278],[110,250],[100,235],[90,230],[80,235],[70,220],[60,205],[50,200],[40,205],[30,200],[25,190],[20,185],[15,200],[12,240],[8,265],[4,275],[0,280]] }]
      },
      q:"Roughly how often do the warm peaks in carbon dioxide occur?",
      opts:["About every 10,000 years","About every 100,000 years","About every 1,000 years","They occur completely at random"], a:1,
      hint:"Count the peaks across 400,000 years of record.",
      why:"There are about four peaks across 400,000 years, so a warm interglacial roughly every 100,000 years. That matches the eccentricity Milankovitch cycle — the change in the shape of Earth's orbit — which is strong evidence that orbital changes drive glacial and interglacial cycles." },

    { t:"mcq",
      q:"How does an ice core tell scientists about past carbon dioxide levels?",
      opts:[
        "The ice changes colour depending on the CO₂ level",
        "Bubbles of ancient air are trapped as the snow compacts into ice, and that air can be analysed directly",
        "Scientists estimate it from the thickness of each layer",
        "CO₂ is measured from fossils found inside the ice"
      ], a:1,
      hint:"The ice is not a proxy here — it is a container.",
      why:"Falling snow traps air between the flakes. As layer upon layer compacts into ice, that air is sealed into bubbles. Drilling down and releasing the bubbles gives a direct sample of the ancient atmosphere. Oxygen isotope ratios in the water molecules separately record the temperature at the time the snow fell." },

    { t:"match",
      q:"Match each source of evidence for past climate to what it reveals.",
      pairs:[
        ["Ice cores","Trapped air gives past greenhouse gas levels; isotopes give past temperature"],
        ["Tree rings","Wide rings indicate warm wet years, narrow rings cool dry years, dated year by year"],
        ["Pollen analysis","Preserved pollen in peat shows which plants grew, and therefore the climate they needed"],
        ["Historical records","Diaries, harvest dates and paintings such as Thames frost fairs record recent centuries"]
      ],
      hint:"Two of these give a record going back many thousands of years; two are much more recent.",
      why:"Ice cores give the longest record — hundreds of thousands of years. Tree rings and pollen cover thousands. Written and painted records only cover the last few hundred years but are very detailed, such as the frozen Thames during the Little Ice Age." },

    { t:"mcq",
      q:"Which of these is a Milankovitch cycle — a natural cause of long-term climate change?",
      opts:[
        "Changes in the shape of Earth's orbit, its axial tilt, and the wobble of its axis",
        "The burning of coal, oil and gas since the Industrial Revolution",
        "Deforestation of tropical rainforests",
        "The release of methane from intensive cattle farming"
      ], a:0,
      hint:"Three of these options are things people do.",
      why:"The three Milankovitch cycles are eccentricity (orbit shape, about 100,000 years), obliquity (axial tilt, about 41,000 years) and precession (the wobble of the axis, about 26,000 years). They alter how much solar radiation reaches different latitudes. The other three options are human causes — make sure you keep natural and human causes separate in the exam." },

    { t:"mcq",
      q:"What effect does a very large volcanic eruption usually have on global climate?",
      opts:[
        "Long-term warming lasting centuries",
        "Short-term cooling, because ash and sulphur dioxide reflect incoming solar radiation",
        "No measurable effect at all",
        "Immediate melting of the polar ice caps"
      ], a:1,
      hint:"Think about what a haze high in the atmosphere does to sunlight.",
      why:"Sulphur dioxide converts to sulphate aerosols in the stratosphere and reflects sunlight back to space, cooling the surface for a year or two. After the 1815 eruption of Tambora, 1816 became known in Europe and North America as 'the year without a summer'." }
  ]
},

/* ---------------------------------------------------------------- 1.3 ---- */
{
  id:"cyclones", ref:"1.3", name:"Tropical cyclones: formation and structure",
  short:"Cyclones",
  theme:"The conditions a cyclone needs, why it spins, what the parts are called, and how it is measured",
  brief:"Tropical cyclones need warm deep ocean, unstable rising air and enough spin from the Coriolis effect — which is why they form in a belt between about 5° and 30° of latitude and never on the equator itself. This topic covers the conditions, the sequence of formation, the anatomy of the storm and the scale used to rank it.",
  keys:["Sea over 26.5°C","5°–30° latitude","Eye and eyewall","Rain bands","Saffir–Simpson 1–5"],
  qs:[
    { t:"mcq",
      q:"Tropical cyclones can only form over oceans warmer than a certain temperature. What is that threshold?",
      opts:["18°C","22°C","26.5°C","32°C"], a:2,
      hint:"Think about the heat needed to evaporate enough water to power the storm — it is well above British sea temperatures.",
      why:"Sea surface temperatures must be at least 26.5°C, and warm to a depth of roughly 50–70 m. The warm water evaporates, and the latent heat released as that vapour condenses is the storm's energy source." },

    { t:"order",
      q:"Put the stages of tropical cyclone formation into the correct order.",
      items:[
        "Warm ocean (over 26.5°C) evaporates, creating warm moist air",
        "The moist air rises rapidly, leaving an area of low pressure at the surface",
        "Air rushes in to replace it and is deflected by the Coriolis effect, so the storm begins to spin",
        "The rising vapour condenses, releasing latent heat that powers further rising",
        "Bands of towering thunderstorms build around a calm central eye",
        "The cyclone drifts west, gathering strength until it reaches land or cooler water"
      ],
      hint:"Start with the energy source, and finish with the storm moving away.",
      why:"The chain is: warm sea → evaporation → rising air → low pressure → converging air deflected by Coriolis → condensation releasing latent heat → intensification. The storm weakens once cut off from warm water at landfall." },

    { t:"mcq",
      q:"What does the Coriolis effect do to winds, and why does it matter for tropical cyclones?",
      opts:[
        "It slows winds down, so cyclones cannot form near the equator",
        "It deflects winds — right in the northern hemisphere, left in the southern — and is zero at the equator, so cyclones cannot spin up within about 5° of it",
        "It only affects ocean currents, not winds",
        "It makes all winds blow directly from high to low pressure"
      ], a:1,
      hint:"Look at where cyclone tracks begin — never right on the equator itself.",
      why:"Earth's rotation deflects moving air: to the right in the northern hemisphere, to the left in the southern. This is what makes a cyclone spin. The effect is zero at the equator, so tropical cyclones form between about 5° and 30° of latitude — warm enough for the energy, far enough from the equator for the spin." },

    { t:"mcq",
      q:"The same type of storm has different names in different oceans. Which is correct?",
      opts:[
        "Hurricane in the North Atlantic, typhoon in the north-west Pacific, cyclone in the Indian Ocean",
        "Typhoon in the North Atlantic, hurricane in the Indian Ocean, cyclone in the Pacific",
        "Cyclone in the North Atlantic, hurricane in the Indian Ocean, typhoon in the Southern Ocean",
        "They are entirely different storms with different formation processes"
      ], a:0,
      hint:"One of your case studies hit the USA and one hit the Philippines. What was each one called?",
      why:"They are the same phenomenon — a tropical cyclone — named by region: hurricane in the North Atlantic and north-east Pacific, typhoon in the north-west Pacific, and cyclone in the Indian Ocean and around Australia." },

    { t:"label", diagram:"cyclone",
      q:"Label the cross-section of a tropical cyclone.",
      targets:[
        { id:"eye",     prompt:"Click the eye — calm, cloud-free, with air descending and the lowest pressure." },
        { id:"wall",    prompt:"Click the eyewall — the ring of towering cloud with the strongest winds and heaviest rain." },
        { id:"bands",   prompt:"Click one of the spiralling rain bands." },
        { id:"surge",   prompt:"Click the storm surge — the wall of sea water pushed onshore." }
      ],
      why:"The eye is a column of descending air, so it is calm and clear. The eyewall beside it has the most violent uplift, and therefore the strongest winds and heaviest rainfall. Outer rain bands spiral away from the centre. Low pressure and powerful onshore winds together raise sea level into a storm surge — usually the biggest killer." },

    { t:"data",
      chart:{ kind:"table", title:"The Saffir–Simpson scale", sub:"Tropical cyclones are ranked 1–5 by sustained wind speed.",
        headers:["Category","Sustained wind","Typical damage"],
        rows:[
          ["1","119–153 km/h","Damage to roof tiles, gutters and trees"],
          ["2","154–177 km/h","Major roof and siding damage; trees uprooted"],
          ["3","178–208 km/h","Devastating: small buildings destroyed"],
          ["4","209–251 km/h","Catastrophic: severe structural damage, area uninhabitable for weeks"],
          ["5","252 km/h and above","Catastrophic: a high percentage of homes destroyed"]
        ] },
      q:"A storm makes landfall with sustained winds of 205 km/h. Which category is it, and what does the scale not tell you?",
      opts:[
        "Category 2 — and the scale already accounts for flooding",
        "Category 3 — and the scale measures wind only, so it says nothing about surge or rainfall",
        "Category 4 — and the scale measures total energy released",
        "Category 5 — and the scale includes the size of the storm"
      ], a:1,
      hint:"Find the band 205 km/h falls into, then read the column headings carefully.",
      why:"205 km/h sits in the 178–208 km/h band, so Category 3. The important limitation is that Saffir–Simpson ranks sustained wind speed alone. It ignores storm surge, rainfall totals, the physical size of the storm and how long it lingers — which is why a 'lower category' storm can still be the deadlier one." }
  ]
},

/* ---------------------------------------------------------------- 1.4 ---- */
{
  id:"vulnerability", ref:"1.4", name:"Hazards, vulnerability and responses",
  short:"Vulnerability",
  theme:"How a natural hazard becomes a disaster, and the vocabulary examiners expect",
  brief:"A hazard is a physical event; a disaster is what happens when that event meets a vulnerable population. This topic is the framework you apply to every case study: separating primary from secondary effects, immediate from long-term responses, and explaining why the same magnitude of event produces wildly different outcomes in different places.",
  keys:["Hazard vs disaster","Primary and secondary effects","Immediate and long-term responses","Vulnerability","The development contrast"],
  qs:[
    { t:"match",
      q:"Match each term to its meaning.",
      pairs:[
        ["Immediate response","Action in the hours and days after the event — rescue, shelter, emergency aid"],
        ["Long-term response","Action over months and years — rebuilding, improving defences, restoring the economy"],
        ["Primary effect","Damage caused directly by the hazard itself, such as buildings destroyed by wind"],
        ["Secondary effect","Damage that follows on afterwards, such as disease spreading through flood water"],
        ["Vulnerability","How exposed and unable to cope a population is when a hazard strikes"]
      ],
      hint:"Split them into two pairs — effects versus responses — and one term about people.",
      why:"Examiners award marks for using these distinctions precisely. Primary and secondary describe effects; immediate and long-term describe responses. Vulnerability explains why the same magnitude of hazard produces different disasters in different places." },

    { t:"mcq",
      q:"Which of these is a long-term response rather than an immediate one?",
      opts:[
        "Evacuating a low-lying coastal district before landfall",
        "A coastguard helicopter lifting people off flooded rooftops",
        "Rebuilding sea defences higher and relocating electrical substations above flood level",
        "Distributing bottled water and blankets in the days after the event"
      ], a:2,
      hint:"Which one takes years, and reduces the damage from the *next* event?",
      why:"Long-term responses take months or years and reduce future risk: rebuilding defences, changing building codes, relocating infrastructure, restoring the economy. Evacuation happens before the event — that is preparation. Rescue and distributing supplies are immediate responses in the first hours and days." },

    { t:"mcq",
      q:"Which statement about the relationship between hazard magnitude and deaths is most accurate?",
      opts:[
        "The larger the event, the higher the death toll, always",
        "Magnitude sets the size of the hazard, but deaths depend far more on building quality, wealth, warning and preparation",
        "Magnitude has no effect on damage at all",
        "Only the very largest events cause any deaths"
      ], a:1,
      hint:"If magnitude alone decided it, the strongest event on record would always be the deadliest. It is not.",
      why:"Magnitude describes the energy released — the hazard. The disaster depends on exposure and vulnerability: how many people are there, what their buildings are made of, whether they were warned, and how well prepared they were. Your paired case studies are the evidence for this." },

    { t:"exam", marks:4,
      q:"Explain two reasons why hazards of similar magnitude can have very different impacts in developed and developing countries. (4 marks)",
      guidance:"Award 1 mark for each valid reason identified, and a further 1 mark where that reason is developed with an explanation of how or why it had that effect. A point stated without a reason scores 1 mark only. Credit a maximum of two developed reasons.",
      scheme:[
        {
          "p": "Developed countries can afford to enforce building regulations",
          "r": "so structures are engineered to survive the hazard, whereas informal or unreinforced housing in a developing country collapses on its occupants, which is why building collapse causes so many more deaths in poorer countries"
        },
        {
          "p": "Developed countries have better monitoring and warning systems",
          "r": "so warnings reach people earlier and evacuation can be organised, giving the population time to move away from the area at risk before the event arrives"
        },
        {
          "p": "Emergency services in developed countries are better funded and equipped",
          "r": "so the injured are reached and treated within the first hours, when survival rates are highest, rather than dying while waiting for rescue that cannot get through"
        },
        {
          "p": "Developed countries lose far more in absolute economic terms",
          "r": "because their infrastructure and property are worth much more, so the same physical damage produces a far larger repair bill"
        },
        {
          "p": "Developing countries lose far more relative to the size of their economy",
          "r": "because even a smaller absolute bill can represent a large share of national output, leaving the country dependent on international aid and slowing recovery for years"
        },
        {
          "p": "Population density in vulnerable locations is often higher in developing countries",
          "r": "because poorer residents are pushed onto the cheapest and most exposed land, such as low-lying coasts or unstable slopes, so more people are directly in the path of the hazard"
        }
      ],
      why:"This is the single most reliable 4-marker in the unit. The trap is writing four separate one-mark statements instead of two developed reasons — the mark scheme caps you at two reasons, so a list of four bare points scores 2, not 4. Pick two, and explain each one properly." }
  ]
},

/* ---------------------------------------------------------------- 1.5 ---- */
{
  id:"plates", ref:"1.5", name:"Earth's structure and plate boundaries",
  short:"Plate boundaries",
  theme:"What is inside the Earth, what moves the plates, and the four types of boundary",
  brief:"Beneath a thin crust lies the mantle, and convection in it — helped by the pull of dense subducting slabs — drags the plates across the surface. Almost every tectonic hazard happens where two plates meet, and there are four ways they can meet: pulling apart, colliding with subduction, colliding without it, and sliding past. Each produces a distinctive set of landforms and hazards. The coloured lines on the map show where each type runs.",
  keys:["Crust · mantle · core","Convection and slab pull","Constructive","Destructive","Conservative","Collision"],
  qs:[
    { t:"match",
      q:"Match each layer or process to its description.",
      pairs:[
        ["Crust","The thin, rigid outer shell — oceanic crust is thin and dense, continental crust is thick and less dense"],
        ["Mantle","The thick semi-molten layer beneath, where slow convection currents circulate"],
        ["Core","The dense iron and nickel centre, whose heat drives the whole system"],
        ["Slab pull","A dense plate sinking at a subduction zone drags the rest of the plate along behind it"]
      ],
      hint:"Work from the outside inwards, then the odd one out is a process rather than a layer.",
      why:"Heat from the core drives convection in the mantle, which was long taught as the sole reason plates move. Slab pull is now thought to be the stronger force: once a dense oceanic plate begins to subduct, its own weight drags the rest of the plate down behind it. Mentioning both gets you full credit." },

    { t:"mcq",
      q:"Two continental plates move towards each other. What happens, and why?",
      opts:[
        "One subducts beneath the other, forming a deep ocean trench and explosive volcanoes",
        "Neither is dense enough to subduct, so the crust crumples upwards into fold mountains, giving powerful shallow earthquakes but no volcanoes",
        "They slide past one another without any deformation",
        "New crust is created between them"
      ], a:1,
      hint:"Continental crust is thick and buoyant. What can it not do?",
      why:"This is a collision boundary. Both plates are continental and neither is dense enough to sink, so the crust buckles and is forced upwards into fold mountains — the Himalayas are the classic example. Collision boundaries produce powerful, shallow-focus earthquakes but no volcanoes, because no crust is being melted." },

    { t:"mcq",
      q:"Where oceanic and continental crust converge, which subducts and why?",
      opts:[
        "The continental plate, because it is thicker and therefore heavier",
        "The oceanic plate, because oceanic crust is thinner but denser than continental crust",
        "Neither — they simply slide past one another",
        "Both subduct at the same time"
      ], a:1,
      hint:"Compare the density of the two types of crust, not their thickness.",
      why:"Oceanic crust is thinner but denser (basaltic) than continental crust (granitic), so the oceanic plate is forced beneath. This forms an ocean trench, deep and powerful earthquakes along the descending slab, and composite volcanoes inland where the melting slab feeds magma upwards. The Andes above the Peru–Chile Trench are the textbook example." },

    { t:"label", diagram:"destructive",
      q:"Label this destructive (convergent) plate boundary.",
      targets:[
        { id:"ocean",  prompt:"Click the oceanic plate that is being subducted." },
        { id:"cont",   prompt:"Click the continental plate." },
        { id:"trench", prompt:"Click the ocean trench." },
        { id:"volc",   prompt:"Click the composite volcano." },
        { id:"focus",  prompt:"Click the focus of the earthquake, deep along the subducting slab." }
      ],
      why:"Dense oceanic crust subducts beneath continental crust, forming a deep ocean trench. As the slab descends it melts, and the buoyant magma rises to build steep composite volcanoes. Friction along the descending slab generates earthquakes that get deeper further inland — the Benioff zone." },

    { t:"mcq",
      q:"What happens at a constructive (divergent) boundary?",
      opts:[
        "Plates move apart, magma rises to fill the gap and solidifies as new oceanic crust, building a mid-ocean ridge",
        "One plate is destroyed beneath another, forming a trench",
        "Plates grind past one another and crust is conserved",
        "Two continents crumple into fold mountains"
      ], a:0,
      hint:"The name is the clue — something is being built.",
      why:"As the plates diverge, pressure on the mantle beneath falls and it melts, and the magma rises to fill the gap and solidifies as new oceanic crust. This builds a mid-ocean ridge such as the Mid-Atlantic Ridge, which Iceland sits astride. Earthquakes here are shallow and comparatively weak, and eruptions are frequent but gentle." },

    { t:"mcq",
      q:"Which statement about conservative boundaries is correct?",
      opts:[
        "New crust is created as the plates move apart",
        "Crust is destroyed as one plate subducts beneath another",
        "Crust is neither created nor destroyed; the plates slide past each other, so there are earthquakes but no volcanoes",
        "They produce the world's most explosive volcanoes"
      ], a:2,
      hint:"Nothing goes down and nothing comes up — so where would the magma come from?",
      why:"At a conservative boundary the plates move past one another, sometimes at different speeds or in the same direction at different rates. No magma is generated, so there are no volcanoes — but friction locks the plates until the strain releases suddenly as a shallow, destructive earthquake. The San Andreas Fault in California is the standard example." }
  ]
},

/* ---------------------------------------------------------------- 1.6 ---- */
{
  id:"tectonichazards", ref:"1.6", name:"Tectonic hazards and their effects",
  short:"Tectonic hazards",
  theme:"Earthquakes, volcanoes, and the secondary hazards that follow them",
  brief:"A plate boundary generates the hazard; the ground, the sea and the ice above it decide what form the damage takes. This topic covers how earthquakes are described, the secondary hazards that follow — liquefaction, landslides, aftershocks and tsunamis — and how the type of magma at a boundary decides whether a volcano oozes or explodes.",
  keys:["Focus and epicentre","Liquefaction","Tsunami","Shield vs composite","Pyroclastic flows and lahars"],
  qs:[
    { t:"mcq",
      q:"What is the difference between the focus and the epicentre of an earthquake?",
      opts:[
        "The focus is the point underground where the earthquake starts; the epicentre is the point on the surface directly above it",
        "The focus is on the surface; the epicentre is underground",
        "They are two words for exactly the same place",
        "The focus is where the most damage occurs; the epicentre is where the fault is"
      ], a:0,
      hint:"One is a depth, one is a map position.",
      why:"The focus (or hypocentre) is where the rock actually fractures underground. The epicentre is the surface point directly above it. Focus depth matters enormously: a shallow focus concentrates the energy at the surface, so a moderate shallow earthquake can do more damage than a much larger deep one." },

    { t:"match",
      q:"Match each secondary tectonic hazard to its definition.",
      pairs:[
        ["Liquefaction","Saturated soil is shaken until it behaves like a liquid and buildings sink into it"],
        ["Aftershock","A smaller earthquake following the main one, which can topple already weakened buildings"],
        ["Landslide","Slope material is shaken loose and slides downhill, burying land and blocking routes"],
        ["Tsunami","A series of waves generated when the sea floor is suddenly displaced"]
      ],
      hint:"One of these needs saturated ground, one needs the sea floor, one needs a slope.",
      why:"Which secondary hazards are possible depends entirely on the place. A landlocked mountainous country cannot have a tsunami but is extremely exposed to landslides; a low-lying coastal city on soft sediment faces liquefaction and tsunami instead. Choosing hazards that actually fit the location is what separates a top answer from a generic one." },

    { t:"mcq",
      q:"What causes a tsunami?",
      opts:[
        "Volcanic ash falling onto the sea surface",
        "Strong winds generated by an earthquake",
        "Sudden vertical displacement of the sea floor, which lifts the entire water column above it",
        "Heavy rainfall following an earthquake"
      ], a:2,
      hint:"Something has to move a huge volume of water very quickly, from below.",
      why:"When a locked subduction boundary suddenly slips, a section of sea floor jolts upwards and displaces the whole water column above it. The waves travel fast and low across deep ocean — hundreds of km/h, barely a metre high — then slow and pile up to great height in shallow coastal water. This is why subduction zones, not collision or conservative boundaries, are the tsunami-producing ones." },

    { t:"mcq",
      q:"Which set of characteristics describes volcanoes typically found at constructive boundaries?",
      opts:[
        "Runny basaltic lava, gently sloping shield volcanoes, frequent but relatively gentle eruptions",
        "Thick andesitic lava, steep composite cones, violently explosive eruptions with pyroclastic flows",
        "No lava at all, only ash and steam",
        "Identical in every way to volcanoes at destructive boundaries"
      ], a:0,
      hint:"Runnier lava lets gas escape easily. What shape does lava that flows a long way build?",
      why:"At constructive boundaries the magma is basaltic — hot, low in silica and runny — so gas escapes easily and eruptions are comparatively gentle, building broad shield volcanoes. Destructive boundaries produce viscous, silica-rich andesitic magma that traps gas until it erupts explosively, forming steep composite cones." },

    { t:"match",
      q:"Match each volcanic hazard to its description.",
      pairs:[
        ["Pyroclastic flow","A fast, superheated avalanche of gas, ash and rock that flows down the volcano's flanks"],
        ["Lahar","A mudflow of volcanic ash mixed with water, which can travel far down river valleys"],
        ["Jökulhlaup","A sudden flood released when an eruption melts the glacier sitting above it"],
        ["Tephra / ash fall","Fragments thrown into the air that collapse roofs, ruin crops and ground aircraft"]
      ],
      hint:"One of these words is Icelandic, and it names a flood.",
      why:"Volcanic hazards reach far beyond lava, which rarely kills anyone because it moves slowly. Pyroclastic flows and lahars cause most volcanic deaths, and ash causes most of the economic disruption — fine glassy particles melt inside jet engines, which is why eruptions close airspace." },

    { t:"mcq",
      q:"Why can an eruption beneath a glacier or ice cap be far more explosive than the same magma erupting on dry land?",
      opts:[
        "The magma cools completely before it can erupt",
        "Meltwater meets the magma and flashes to steam, shattering the lava into extremely fine ash",
        "Ice increases the silica content of the magma",
        "The weight of the ice compresses the magma chamber"
      ], a:1,
      hint:"Think about what happens the instant water touches something at 1,000°C.",
      why:"Water flashing to steam on contact with magma causes violent fragmentation, shattering it into extremely fine, far-travelling ash — even where the magma itself is the runny basaltic kind that would normally erupt gently. Eyjafjallajökull in 2010 is the standard example: a modest eruption that closed European airspace for days because it happened under ice." }
  ]
},

/* ---------------------------------------------------------------- 1.7 ---- */
{
  id:"managing", ref:"1.7", name:"Managing tectonic hazards",
  short:"Managing hazards",
  theme:"Prediction, preparation, protection and planning — and which of them actually saves lives",
  brief:"You cannot stop an earthquake, so management means reducing what it does to people. The four Ps give you a structure for any management answer: prediction (knowing it is coming), preparation (knowing what to do), protection (building so it survives) and planning (deciding where to build at all). The trade-offs between them — cost against lives saved — are exactly what evaluation questions are asking about.",
  keys:["The four Ps","Early-warning systems","Drills and education","Aseismic design","Land-use zoning"],
  qs:[
    { t:"match",
      q:"Match each of the four Ps of hazard management to an example.",
      pairs:[
        ["Prediction","Seismometer and GPS networks, and alert systems that warn seconds before shaking arrives"],
        ["Preparation","Annual public drills in which millions practise 'drop, cover, hold on'"],
        ["Protection","Retrofitting bridges and fitting base isolators and cross-bracing in buildings"],
        ["Planning","Zoning laws that stop hospitals and schools being built directly across a fault line"]
      ],
      hint:"Prediction is about knowing when; protection is about engineering; planning is about where you build.",
      why:"Prediction = monitoring and forecasting. Preparation = education, drills and emergency plans. Protection = engineering the built environment to survive. Planning = deciding land use so vulnerable buildings are not in the highest-risk places. Using the four Ps as a structure will organise almost any management answer." },

    { t:"mcq",
      q:"Can scientists currently predict the exact date of a large earthquake?",
      opts:[
        "Yes — seismometers give the precise date months in advance",
        "No — they can only give long-term probabilities for a region, plus warnings of seconds once shaking has begun",
        "Yes, but only for conservative boundaries",
        "No — earthquakes are entirely random and no forecasting is possible"
      ], a:1,
      hint:"Compare earthquakes with volcanoes, which give measurable warning signs beforehand.",
      why:"Unlike volcanoes, which show precursors such as swelling and gas emissions, earthquakes give no reliable short-term warning. Scientists forecast probabilities over decades and use early-warning systems that detect the fast P-waves and give a few seconds before the destructive S-waves arrive. This is exactly why preparation and protection save more lives than prediction." },

    { t:"data",
      chart:{ kind:"table", title:"Cost and benefit of management strategies", sub:"Approximate relative figures used for comparison.",
        headers:["Strategy","Relative cost","Lives protected","Weakness"],
        rows:[
          ["Earthquake drills in schools","Very low","High","Relies on people responding correctly"],
          ["Aseismic building codes","High","Very high","Only applies to new or retrofitted buildings"],
          ["Early-warning system","Medium","Medium","Gives only seconds of warning"],
          ["Land-use zoning","Low","High","Politically difficult where land is valuable"]
        ] },
      q:"Based on the table, which strategy gives the greatest protection of life for the lowest cost?",
      opts:["Aseismic building codes","Early-warning systems","Earthquake drills in schools","Nothing can protect life cheaply"], a:2,
      hint:"Look for the row combining 'very low' cost with 'high' lives protected.",
      why:"Education and drills are extremely cheap and highly effective, which is why they are the first strategy adopted in lower-income countries. Building codes protect more lives overall but are expensive and take decades to apply across a whole city — a genuine trade-off worth mentioning in evaluation questions." },

    { t:"exam", marks:8,
      q:"'Preparation saves more lives than prediction.' Assess this statement with reference to tectonic hazards. (8 marks)",
      guidance:"Read the level descriptors, decide which one your answer as a whole reaches, then award a mark within that band. An answer that reaches no supported judgement cannot enter Level 3, however much it knows.",
      indicative:[
        "Earthquakes cannot be predicted precisely: scientists give long-term probabilities for a region, not dates, so a strategy built on prediction leaves a population unprotected.",
        "Preparation is cheap, reaches everyone and works without any warning at all — drills, education and emergency plans change what people do in the first seconds.",
        "Evidence: countries with a strong drill and education culture record far lower death tolls than countries of similar hazard exposure without one.",
        "Against: volcanoes can be predicted, because they give measurable precursors — ground swelling, gas emissions, increased seismicity — allowing successful evacuation before an eruption.",
        "Against: earthquake early-warning systems give only seconds, but those seconds automatically stop trains, close gas valves and halt surgery, which does save lives.",
        "Against: protection through aseismic building codes arguably saves more lives than either, because it works even when nobody reacts at all.",
        "The argument depends on hazard type — prediction works for volcanoes and largely fails for earthquakes — and on the wealth of the country deciding where to spend.",
        "A judgement should weigh the strategies against each other rather than simply agreeing, ideally noting that the four Ps are complementary rather than alternatives."
      ],
      levels:[
        {
          "band": "Level 3 (7–8 marks)",
          "lo": 7,
          "hi": 8,
          "d": "Accurate and detailed knowledge and understanding throughout. A logical, coherent and fully developed line of reasoning, applied directly to the question. Specific, relevant evidence from both case studies used to support each point. Reaches a substantiated judgement that follows from the argument made."
        },
        {
          "band": "Level 2 (4–6 marks)",
          "lo": 4,
          "hi": 6,
          "d": "Mostly accurate knowledge and understanding. A line of reasoning that is mostly logical but undeveloped in places, with some points asserted rather than explained. Some relevant case-study evidence, though it may be one-sided or imprecise. A judgement is offered but only partly supported."
        },
        {
          "band": "Level 1 (1–3 marks)",
          "lo": 1,
          "hi": 3,
          "d": "Limited knowledge and understanding, with some inaccuracy. A simple or undeveloped line of reasoning, often a list of points rather than an argument. Little or no specific case-study evidence. Judgement is absent, or asserted without support."
        }
      ],
      why:"An 8-mark 'assess' is marked by levels, not by counting points, so the quality of the reasoning decides the band. Two things pull answers into Level 3: using specific evidence rather than generalisation, and reaching a judgement that actually follows from the argument. An answer that lists everything it knows and then stops has no judgement, and cannot leave Level 2 however much it contains." }
  ]
}

];

/* ----------------------------------------------------------------------------
   CASE STUDIES — separate from the topics, in two linked pairs.
   Each pair holds two studies plus a comparison that unlocks once both are done.
   The `lon`/`lat` on each study places its pin on the map.
   ---------------------------------------------------------------------------- */

var PAIRS = [

/* ================================================================ TECTONIC == */
{
  id:"tectonic", name:"Tectonic pair", colour:"#b98cff",
  sub:"An earthquake and a tsunami — one in a high-income country, one in a low-income one",
  intro:"Japan and Nepal give you the cleanest tectonic contrast on the specification. Japan's was far larger and killed by water; Nepal's was smaller and killed by falling buildings and landslides. Learn them as a pair and you can answer almost any question about why development changes the outcome of an earthquake.",
  studies:[

  /* ------------------------------------------------------------ Japan ---- */
  {
    id:"tohoku", short:"Tōhoku", name:"Tōhoku, Japan", sub:"Earthquake and tsunami, 2011",
    brief:"At 14:46 on 11 March 2011 a magnitude 9.0 megathrust earthquake ruptured the Japan Trench about 130 km east of Sendai, where the Pacific plate subducts beneath Japan. The seabed jolted upwards by several metres and the tsunami that followed reached run-up heights of up to 40 m, travelling as far as 10 km inland. Around 18,500 people died or went missing, over ninety per cent of them by drowning. It remains the costliest natural disaster ever recorded, at roughly $235 billion.",
    facts:["11 March 2011","Magnitude 9.0","Focus ~30 km deep","Tsunami run-up up to ~40 m","~18,500 dead or missing","~$235 billion"],
    qs:[
      { t:"mcq",
        q:"Why was the Tōhoku earthquake able to reach magnitude 9.0 and generate a major tsunami?",
        opts:[
          "It occurred at a collision boundary where two continental plates crumpled together",
          "It occurred at a conservative boundary where plates slid past one another",
          "It was a megathrust rupture at a subduction zone, where the locked plate boundary slipped and jolted the sea floor vertically upwards",
          "It was caused by magma rising beneath the sea floor"
        ], a:2,
        hint:"Only one type of boundary can store enough strain for a magnitude 9, and only one moves the sea floor up and down.",
        why:"The Pacific plate subducts beneath Japan at the Japan Trench. The two plates lock together, strain builds for centuries, and when it releases the overriding plate springs upwards — a megathrust. Only subduction zones have fault surfaces large enough for magnitude 9, and the vertical seabed movement is exactly what displaces the water column to make a tsunami. A collision or conservative boundary could do neither." },

      { t:"mcq",
        q:"What killed the overwhelming majority of the roughly 18,500 victims?",
        opts:[
          "Buildings collapsing during the ground shaking",
          "Drowning in the tsunami",
          "Radiation released from the Fukushima Daiichi power station",
          "Fires that broke out after the shaking"
        ], a:1,
        hint:"Japan's buildings are engineered for earthquakes. Its coastline was engineered for a smaller wave than the one that arrived.",
        why:"Over ninety per cent of deaths were drownings. Japan's aseismic building codes worked — remarkably few buildings collapsed from the shaking itself, despite a magnitude 9.0. It was the tsunami that overwhelmed sea walls, some of which had been built for a wave half the size, and swept several kilometres inland. No deaths have been directly attributed to radiation from Fukushima." },

      { t:"order",
        q:"Put the events of 11 March 2011 and afterwards into the order they occurred.",
        items:[
          "The locked plate boundary at the Japan Trench slips, and the sea floor is thrust upwards",
          "Warnings are broadcast within about three minutes and coastal communities begin to evacuate",
          "The tsunami reaches the coast, overtops sea walls and floods up to 10 km inland",
          "Flooding disables the backup generators at Fukushima Daiichi and three reactors go into meltdown",
          "Around 470,000 people are evacuated, many from the nuclear exclusion zone",
          "Coastal defences are rebuilt higher and some settlements are relocated onto higher ground"
        ],
        hint:"Primary effect first, then the warning, then the water, then what the water broke.",
        why:"This chain is worth learning because it shows a secondary effect cascading into a technological disaster: the earthquake caused the tsunami, the tsunami disabled the cooling systems, and the loss of cooling caused the meltdowns. The final stage — building back higher and relocating settlements — is the long-term response." },

      { t:"data",
        chart:{ kind:"table", title:"Tōhoku 2011 — the record", sub:"Why this event is used as the benchmark for tsunami risk.",
          headers:["Measure","Figure","Why it matters"],
          rows:[
            ["Magnitude","9.0","Fourth largest recorded anywhere since 1900"],
            ["Focus depth","~30 km","Shallow, so energy reached the surface and the sea floor moved"],
            ["Maximum run-up","~40 m","Far above the height most sea walls were designed for"],
            ["Deaths","~18,500","Over 90% by drowning, not by building collapse"],
            ["Economic cost","~$235 billion","The costliest natural disaster ever recorded"],
            ["Evacuated","~470,000","Including the Fukushima exclusion zone"]
          ] },
        q:"Japan had sea walls, a three-minute warning system and regular public drills. What does the death toll tell you about hazard management?",
        opts:[
          "Management is pointless, because people died anyway",
          "Management works only in poor countries",
          "Management reduces risk but cannot remove it — defences designed for a smaller event can be overwhelmed, and can even encourage people to stay",
          "The warning system must have failed completely"
        ], a:2,
        hint:"Ask what the sea walls were designed for, and what actually arrived.",
        why:"Japan's preparation unquestionably saved tens of thousands of lives — the shaking itself killed very few. But defences are built to an assumed maximum, and 2011 exceeded it. Worse, some residents believed the sea walls made them safe and did not evacuate, so protection can create a false sense of security. This nuance is exactly what top-band answers contain." },

      { t:"exam", marks:4,
      q:"Explain two reasons why the 2011 Tōhoku tsunami killed around 18,500 people despite Japan's preparation. (4 marks)",
      guidance:"Award 1 mark for each valid reason identified, and a further 1 mark where that reason is developed with an explanation of how or why it had that effect. A point stated without a reason scores 1 mark only. Credit a maximum of two developed reasons.",
      scheme:[
        {
          "p": "The sea walls along much of the coast were overtopped",
          "r": "because they had been built for waves of roughly 5–10 m, while run-up reached up to 40 m in places, so the defences were designed for a smaller event than the one that arrived"
        },
        {
          "p": "The epicentre lay close to the coast",
          "r": "so the tsunami reached land in around 30 minutes, which left far too little time for people to travel inland or reach high ground even though the warning was issued within about three minutes"
        },
        {
          "p": "The affected coastline is low-lying and densely populated",
          "r": "so a very large number of people were living within the area the water reached, which travelled as much as 10 km inland"
        },
        {
          "p": "Many coastal residents were elderly",
          "r": "so they could not move quickly enough on foot to reach high ground in the time available, which is why the death toll was concentrated in older age groups"
        },
        {
          "p": "Some residents trusted the sea walls and did not evacuate",
          "r": "because the visible presence of a large defence created a false sense of security, meaning protection actually reduced the speed of the human response"
        },
        {
          "p": "The tsunami disabled the backup generators at Fukushima Daiichi",
          "r": "so the reactors lost cooling and went into meltdown, adding a nuclear evacuation of around 470,000 people to a response already stretched by the tsunami itself"
        }
      ],
      why:"The examiner is looking for the idea that Japan's preparation was not absent but exceeded. Every strong answer says what the defences were designed for and what actually happened. Note the counter-intuitive point about sea walls reducing evacuation — that kind of nuance is what separates a confident answer from a recited one." }
    ]
  },

  /* ------------------------------------------------------------ Nepal ---- */
  {
    id:"gorkha", short:"Gorkha", name:"Gorkha, Nepal", sub:"Earthquake, 2015",
    brief:"On 25 April 2015 a magnitude 7.8 earthquake struck the Gorkha district about 80 km north-west of Kathmandu, with a shallow focus roughly 15 km down. Nepal sits on the collision boundary where the Indian plate drives into the Eurasian plate and pushes up the Himalayas. Around 8,900 people died and some 600,000 homes were destroyed. Nepal is one of the poorest countries in Asia, and the damage bill of roughly $5 billion was about a quarter of its entire annual economy.",
    facts:["25 April 2015","Magnitude 7.8","Focus ~15 km deep","~8,900 deaths","~600,000 homes destroyed","~$5 billion (~25% of GDP)"],
    qs:[
      { t:"mcq",
        q:"Which type of plate boundary runs beneath Nepal, and what does that rule out?",
        opts:[
          "Constructive — so no earthquakes are possible",
          "Destructive — so a tsunami was likely",
          "Collision, where two continental plates crumple upwards — so there are powerful shallow earthquakes but no volcanoes and no tsunami",
          "Conservative — so only very weak earthquakes occur"
        ], a:2,
        hint:"Two plates of the same type are involved, neither can sink, and Nepal is landlocked.",
        why:"The Indian and Eurasian plates are both continental, so neither is dense enough to subduct. The crust crumples upwards into the Himalayas instead. That means powerful shallow-focus earthquakes, but no subduction means no magma and no volcanoes — and because Nepal is landlocked, no tsunami either. Landslides take the place of a tsunami as the dominant secondary hazard." },

      { t:"mcq",
        q:"The focus was only about 15 km deep. Why did that make the earthquake so much more destructive?",
        opts:[
          "A shallow focus means the seismic waves reach the surface with far less energy lost, so shaking is much more intense",
            "A shallow focus makes the earthquake last longer but shake less",
          "Focus depth has no effect on surface damage",
          "A shallow focus means the epicentre is further from the fault"
        ], a:0,
        hint:"The energy has less rock to travel through before it reaches people.",
        why:"Seismic energy spreads out and weakens as it travels. A focus only 15 km down delivers violent shaking to the surface directly above it, which is why a magnitude 7.8 did such damage. Depth is one of the first things to mention when explaining why a moderate earthquake was unexpectedly destructive." },

      { t:"order",
        q:"Put these consequences of the Nepal earthquake into the order they occurred.",
        items:[
          "Violent ground shaking collapses poorly built homes across Kathmandu",
          "Landslides triggered by the shaking bury villages and block mountain roads",
          "International search-and-rescue teams fly in and set up field hospitals",
          "Tens of thousands of survivors live in temporary tented camps through the monsoon",
          "Schools and heritage sites are rebuilt to a stronger earthquake-resistant standard"
        ],
        hint:"Primary effect, then secondary effect, then immediate response, then long-term response.",
        why:"This sequence is the exam framework in action: primary effect (shaking collapses buildings) → secondary effect (landslides) → immediate response (search and rescue) → longer-term response (temporary shelter, then rebuilding). Being able to sort events this way earns marks in almost every hazard question." },

      { t:"match",
        q:"Match each factor to the way it worsened the disaster in Nepal.",
        pairs:[
          ["Poverty","Little money for hazard-resistant construction, and no insurance to fund rebuilding"],
          ["Building quality","Unreinforced brick and concrete homes with no aseismic design collapsed on their occupants"],
          ["Mountainous relief","Landslides blocked the roads, so aid could not reach remote villages for days"],
          ["One international airport","Aid flights congested a single runway, delaying the arrival of supplies"],
          ["Aftershocks","A magnitude 7.3 shock on 12 May brought down already weakened structures and killed more people"]
        ],
        hint:"Two of these are about money and buildings, two about getting help in, one about what came afterwards.",
        why:"This is the anatomy of vulnerability. None of these factors changed the magnitude of the earthquake — they changed how many people it killed. In an exam, pairing a physical factor (shallow focus, mountainous relief) with a human one (poverty, building quality, single airport) is what turns description into explanation." },

      { t:"exam", marks:4,
      q:"Explain two reasons why the 2015 Nepal earthquake had such severe impacts on people. (4 marks)",
      guidance:"Award 1 mark for each valid reason identified, and a further 1 mark where that reason is developed with an explanation of how or why it had that effect. A point stated without a reason scores 1 mark only. Credit a maximum of two developed reasons.",
      scheme:[
        {
          "p": "The focus was shallow, at around 15 km",
          "r": "so the seismic energy travelled only a short distance through rock before reaching the surface and had lost little of its strength, making the ground shaking far more violent than the magnitude alone suggests"
        },
        {
          "p": "The epicentre was close to Kathmandu",
          "r": "so a densely populated capital city was directly exposed to the strongest shaking, putting a very large number of people at risk at once"
        },
        {
          "p": "Most buildings were unreinforced brick and concrete",
          "r": "because Nepal had no enforced aseismic building code, so homes collapsed on their occupants rather than flexing and remaining standing"
        },
        {
          "p": "Nepal is one of the poorest countries in Asia",
          "r": "so there was little money for hazard-resistant construction or emergency preparation, and no insurance to fund rebuilding afterwards"
        },
        {
          "p": "The terrain is steep and mountainous",
          "r": "so the shaking triggered landslides that buried villages and blocked the only roads, meaning aid could not reach remote districts for days"
        },
        {
          "p": "Nepal has only one international airport",
          "r": "so incoming aid flights congested a single runway, delaying the arrival of supplies and rescue teams past the critical first 72 hours"
        },
        {
          "p": "A magnitude 7.3 aftershock struck on 12 May",
          "r": "so structures already weakened by the April earthquake collapsed, killing more people and undermining the recovery that had begun"
        }
      ],
      why:"Blend a physical reason with a human one: the physical points explain the hazard, the human points explain why it became a disaster. Name Kathmandu, Gorkha or Langtang — place-specific detail is explicitly credited, and 'a poor country in Asia' is not." }
    ]
  }],

  /* ------------------------------------------------------ the comparison -- */
  compare:{
    id:"cmp-tectonic", name:"Japan vs Nepal",
    sub:"Comparing the linked tectonic case studies",
    brief:"Now put the two side by side. Japan's earthquake released roughly sixty times more energy than Nepal's and killed about twice as many people — but the reasons behind each figure, and what the damage cost each country relative to its size, tell a story that raw death tolls hide completely.",
    qs:[
      { t:"data",
        chart:{ kind:"bars", title:"Tōhoku 2011 vs Gorkha 2015", sub:"Two earthquakes, two levels of development, two very different outcomes.",
          series:[
            { label:"Japan magnitude",  value:9.0,   of:10,     display:"9.0",     colour:"#b98cff" },
            { label:"Nepal magnitude",  value:7.8,   of:10,     display:"7.8",     colour:"#ffd166" },
            { label:"Japan deaths",     value:18500, of:20000,  display:"~18,500", colour:"#ff7a5e" },
            { label:"Nepal deaths",     value:8900,  of:20000,  display:"~8,900",  colour:"#f5b93f" },
            { label:"Japan cost",       value:235,   of:250,    display:"~$235bn", colour:"#3ad4bb" },
            { label:"Nepal cost",       value:5,     of:250,    display:"~$5bn",   colour:"#4fdc95" }
          ] },
        q:"Japan lost about $235 billion and Nepal about $5 billion. Why is it misleading to conclude that Japan suffered the greater economic blow?",
        opts:[
          "Because the Japanese figures were exaggerated",
          "Because Nepal's $5 billion was roughly a quarter of its entire annual economy, while Japan's $235 billion was a few per cent of a far larger one",
          "Because economic damage is never worth comparing",
          "Because Nepal received international aid and Japan did not"
        ], a:1,
        hint:"Compare each loss with the size of the economy that has to absorb it.",
        why:"Absolute damage figures always favour the richer country, because there is simply more valuable property to destroy. Judged as a share of GDP the picture reverses: Nepal lost about a quarter of its annual economic output and depended on international aid for years, while Japan absorbed a far larger bill from its own resources. Making this point moves an answer into the top band." },

      { t:"match",
        q:"Match each feature to the case study it belongs to.",
        pairs:[
          ["Megathrust rupture at a subduction zone","Tōhoku, Japan — the Pacific plate subducting beneath Japan"],
          ["Collision boundary with no subduction","Gorkha, Nepal — the Indian plate driving into Eurasia"],
          ["Drowning was the dominant cause of death","Tōhoku, Japan — the tsunami, not the shaking"],
          ["Building collapse and landslides caused most deaths","Gorkha, Nepal — unreinforced homes and unstable slopes"],
          ["Rebuilding funded largely from within the country","Tōhoku, Japan — a high-income economy"],
          ["Recovery dependent on international aid","Gorkha, Nepal — a low-income economy"]
        ],
        hint:"Sort by boundary type first, then by what actually killed people, then by who paid for the recovery.",
        why:"The boundary type decides the hazard: subduction can produce a tsunami, collision cannot. That single fact explains why water killed in Japan and buildings and slopes killed in Nepal. Development then decides the recovery. Structuring a comparison this way — physical cause, then human consequence — is the reliable way to score." },

      { t:"mcq",
        q:"Japan's earthquake released about sixty times more energy, yet killed only about twice as many people. What does the comparison best demonstrate?",
        opts:[
          "That magnitude scales are unreliable",
          "That preparation and building standards break the link between magnitude and death toll — but cannot remove risk entirely",
          "That Nepal was better prepared than Japan",
          "That earthquake deaths are entirely random"
        ], a:1,
        hint:"Think about how many people a magnitude 9.0 would have killed in a country with Nepal's buildings.",
        why:"If magnitude alone decided the outcome, a sixty-fold energy difference would have produced a vastly higher toll in Japan. Aseismic building codes meant the shaking itself killed very few there — Japan's deaths came almost entirely from a tsunami that exceeded its defences. Nepal's much smaller earthquake killed 8,900 mostly through building collapse, a cause Japan had almost eliminated." },

      { t:"exam", marks:8,
      q:"'A country's level of development is the most important factor in determining the impacts of an earthquake.' Assess this statement using Tōhoku (2011) and Gorkha (2015). (8 marks)",
      guidance:"Read the level descriptors, decide which one your answer as a whole reaches, then award a mark within that band. An answer that reaches no supported judgement cannot enter Level 3, however much it knows.",
      indicative:[
        "Supporting: Japan's enforced aseismic building codes meant a magnitude 9.0 caused very few deaths from ground shaking, while Nepal's magnitude 7.8 destroyed around 600,000 homes.",
        "Supporting: Japan issued a tsunami warning within about three minutes and runs regular public drills; Nepal had no comparable warning system or drill culture.",
        "Supporting: Japan funded its own recovery, whereas Nepal depended on international aid and left hundreds of thousands in temporary shelter through the monsoon.",
        "Supporting: relative to the size of each economy, Nepal's roughly $5 billion — about a quarter of national output — was far more damaging than Japan's roughly $235 billion.",
        "Challenging: physical factors set the ceiling. Subduction at the Japan Trench made a tsunami possible; Nepal's collision boundary could not produce one, whatever either country spent.",
        "Challenging: Nepal's shallow 15 km focus and mountainous relief, which triggered landslides and blocked roads, were physical causes of severity rather than economic ones.",
        "Challenging: development did not prevent around 18,500 deaths in Japan, because the tsunami exceeded the height its defences had been designed for.",
        "Challenging: within Japan, the deaths fell disproportionately on elderly coastal residents, so vulnerability operates inside a rich country as well as between countries.",
        "A judgement might distinguish what development does and does not control: it almost eliminated building-collapse deaths in Japan and governs the speed of recovery, but it cannot change the physical nature of the hazard."
      ],
      levels:[
        {
          "band": "Level 3 (7–8 marks)",
          "lo": 7,
          "hi": 8,
          "d": "Accurate and detailed knowledge and understanding throughout. A logical, coherent and fully developed line of reasoning, applied directly to the question. Specific, relevant evidence from both case studies used to support each point. Reaches a substantiated judgement that follows from the argument made."
        },
        {
          "band": "Level 2 (4–6 marks)",
          "lo": 4,
          "hi": 6,
          "d": "Mostly accurate knowledge and understanding. A line of reasoning that is mostly logical but undeveloped in places, with some points asserted rather than explained. Some relevant case-study evidence, though it may be one-sided or imprecise. A judgement is offered but only partly supported."
        },
        {
          "band": "Level 1 (1–3 marks)",
          "lo": 1,
          "hi": 3,
          "d": "Limited knowledge and understanding, with some inaccuracy. A simple or undeveloped line of reasoning, often a list of points rather than an argument. Little or no specific case-study evidence. Judgement is absent, or asserted without support."
        }
      ],
      why:"The examiner is not counting facts here; the levels reward reasoning. The move that lifts this answer into Level 3 is noticing that development and physical geography act on different parts of the problem — development decided how many buildings fell, while the boundary type decided whether a tsunami was possible at all. Say what the statement is true of, and where it stops being true." }
    ]
  }
},

/* ================================================================ CYCLONE == */
{
  id:"cyclone", name:"Tropical cyclone pair", colour:"#3ad4bb",
  sub:"Two tropical cyclones — one in a high-income country, one in an emerging one",
  intro:"Ida and Haiyan show what money buys and what it does not. Ida struck a city ringed by $14.5 billion of levees and floodwalls, and they held. Haiyan struck a coast with no comparable protection at all. But Ida still killed around 30 people in Louisiana — almost none of them by drowning — which is the part of the story a simple rich-versus-poor answer misses.",
  studies:[

  /* -------------------------------------------------------------- Ida ---- */
  {
    id:"ida", short:"New Orleans", name:"New Orleans, USA", sub:"Hurricane Ida, 2021",
    brief:"Ida made landfall at Port Fourchon, Louisiana on 29 August 2021 as a Category 4 hurricane with sustained winds of about 240 km/h — one of the strongest storms ever recorded to strike the state. New Orleans lies largely below sea level, but the $14.5 billion system of levees, floodwalls and surge barriers that rings the city held, and it did not flood. What failed instead was the electricity grid: all eight transmission lines into the city went down, leaving over a million customers without power in late-August heat. Around 30 people died in Louisiana, most of them after the storm had passed, and damage across the USA reached roughly $75 billion.",
    facts:["29 August 2021","Category 4 at landfall","~240 km/h winds","Levees held — no city flooding","Whole grid failed","~30 deaths in Louisiana","~$75 billion"],
    qs:[
      { t:"mcq",
        q:"Much of New Orleans lies below sea level, yet Ida's storm surge did not flood the city. Why not?",
        opts:[
          "The surge was far too small to threaten a city of that size",
          "The ring of levees, floodwalls and surge barriers around the city withstood the water, keeping it out of the bowl the city sits in",
          "New Orleans stands on high ground well above the reach of any surge",
          "Pumping stations removed the flood water as fast as it arrived"
        ], a:1,
        hint:"The city is a bowl. Ask what stands between the bowl and the sea.",
        why:"New Orleans sits up to about 3 m below sea level, so everything depends on keeping water out — once it is inside, it has nowhere to drain to. The $14.5 billion Hurricane and Storm Damage Risk Reduction System of armoured levees, raised floodwalls, surge barriers and pumping stations was tested by a Category 4 surge and held. This is protection working exactly as intended, and it is the clearest evidence on the specification that engineering a defence can stop a hazard becoming a disaster." },

      { t:"mcq",
        q:"If the city did not flood, what made New Orleans uninhabitable for days after Ida?",
        opts:[
          "Structural collapse of most buildings in the city centre",
          "The complete failure of the electricity grid — all eight transmission lines into the city went down, leaving over a million customers without power in late-August heat",
          "A chemical spill from the port",
          "Contaminated drinking water from the Mississippi"
        ], a:1,
        hint:"The water stayed out. Something else was not protected.",
        why:"Every transmission line feeding New Orleans failed, including a tower that collapsed into the Mississippi. With no power there was no air conditioning, no refrigeration and no functioning medical equipment, in temperatures above 30°C. The levees had been hardened; the grid had not. Protection had removed one vulnerability and left another completely exposed — a point worth remembering whenever a question asks you to evaluate hazard management." },

      { t:"match",
        q:"Sort each consequence of Hurricane Ida into the correct category.",
        pairs:[
          ["Primary effect","Winds of about 240 km/h tore roofs off buildings and destroyed coastal communities in Lafourche and Terrebonne parishes"],
          ["Secondary effect","The loss of all electricity supply left New Orleans without air conditioning, refrigeration or working medical equipment"],
          ["Indirect deaths","Most Louisiana fatalities came after the storm, from heat exhaustion and carbon monoxide poisoning from indoor generators"],
          ["Distant impact","Ida's remnants caused record flash flooding in New York and New Jersey days later, killing around 50 people"],
          ["Long-term response","Louisiana began a programme to strengthen the electricity network against future storms"]
        ],
        hint:"What the wind did, what the power cut caused, how people actually died, what happened 2,000 km away, and what changed afterwards.",
        why:"Ida is a very useful case study because the primary effect was not what killed people. Most Louisiana deaths were indirect, occurring days later among elderly residents in unpowered homes and people running generators indoors. And the storm's remnants killed more people in the north-east than the landfall did in Louisiana. Both points show that a hazard's impact is neither confined to the moment of impact nor to the place it strikes." },

      { t:"data",
        chart:{ kind:"table", title:"Hurricane Ida — the record", sub:"What the defences stopped, and what they did not.",
          headers:["Measure","Figure","What it shows"],
          rows:[
            ["Category at landfall","4 (~240 km/h)","Among the strongest storms recorded to strike Louisiana"],
            ["Levee system","Held","The city's $14.5 billion defences kept the surge out"],
            ["Customers without power","Over 1 million","All eight transmission lines into New Orleans failed"],
            ["Deaths in Louisiana","~30","Most indirect — heat and carbon monoxide, days after the storm"],
            ["Deaths in New York and New Jersey","~50","From flash flooding as Ida's remnants moved north-east"],
            ["Economic cost","~$75 billion","Among the costliest hurricanes in US history"]
          ] },
        q:"Ida killed around 30 people in Louisiana but around 50 in New York and New Jersey, some 2,000 km from where it made landfall. What does this best show?",
        opts:[
          "That the storm made a second landfall in the north-east",
          "That the remnants of a tropical cyclone can be deadlier far inland than at the coast, especially where there are no defences and no expectation of the hazard",
          "That the storm surge travelled north along the coast to New York",
          "That the Saffir–Simpson category applies equally along the whole track"
        ], a:1,
        hint:"Ida was no longer a hurricane by the time it reached New York. Ask what it still carried.",
        why:"By the time Ida reached the north-east it had weakened to a rain-bearing depression, but it delivered record-breaking rainfall onto ground and drainage systems built for far less. The flash flooding that followed killed around fifty people, many of them in basement apartments. Louisiana had defences, drills and an expectation of hurricanes; New York had none of those for this hazard. The lesson worth carrying into an exam is that a cyclone's impacts are not confined to the point of landfall, and that vulnerability depends on what a place is prepared for." },

      { t:"exam", marks:4,
      q:"Explain two reasons why Hurricane Ida caused so few deaths in New Orleans, despite making landfall as a Category 4 hurricane. (4 marks)",
      guidance:"Award 1 mark for each valid reason identified, and a further 1 mark where that reason is developed with an explanation of how or why it had that effect. A point stated without a reason scores 1 mark only. Credit a maximum of two developed reasons.",
      scheme:[
        {
          "p": "The ring of levees and floodwalls around the city held",
          "r": "so the storm surge was kept out of a city lying up to 3 m below sea level, preventing the deep and long-lasting flooding that would otherwise have trapped residents in their homes"
        },
        {
          "p": "Warnings were issued well in advance and evacuation was organised",
          "r": "so a large share of the population had already left the area before landfall, which meant far fewer people were present to be exposed to the strongest winds and water"
        },
        {
          "p": "Louisiana enforces building regulations designed for hurricane winds",
          "r": "so most buildings remained standing under sustained winds of about 240 km/h, and structural collapse never became a significant cause of death as it does where housing is poorly built"
        },
        {
          "p": "The most severe surge came ashore south-west of the city",
          "r": "so the worst of the water struck the thinly populated coastal parishes of Lafourche and Terrebonne rather than the dense urban area of New Orleans, greatly reducing the number of people exposed"
        },
        {
          "p": "Emergency services were well resourced and reached affected communities quickly",
          "r": "so people who were trapped or injured were rescued within the first days, when survival rates are highest, rather than waiting for help that never came"
        }
      ],
      why:"The value of Ida is that it shows protection and planning working: a Category 4 landfall on a city below sea level, and almost nobody drowned. But be careful not to turn that into 'Ida was not serious'. Damage still reached about $75 billion, and around 30 people did die — overwhelmingly from the consequences of the power failure that followed, because the money had gone into keeping water out rather than into hardening the grid." }
    ]
  },

  /* ---------------------------------------------------------- Haiyan ---- */
  {
    id:"haiyan", short:"Tacloban", name:"Tacloban, Philippines", sub:"Typhoon Haiyan, 2013",
    brief:"On 8 November 2013 Typhoon Haiyan made landfall near Tacloban as a Category 5 super typhoon — one of the most powerful tropical cyclones ever to strike land. Sustained winds reached about 315 km/h and a storm surge of roughly 5 m swept through the city, which sits at the head of a funnel-shaped bay. Around 6,300 people died and damage reached roughly $12 billion. Over four million people were displaced.",
    facts:["8 November 2013","Category 5 at landfall","~315 km/h sustained winds","~5 m storm surge","~6,300 deaths","~$12 billion"],
    qs:[
      { t:"data",
        chart:{ kind:"table", title:"The Saffir–Simpson scale", sub:"Tropical cyclones are ranked 1–5 by sustained wind speed.",
          headers:["Category","Sustained wind","Typical damage"],
          rows:[
            ["1","119–153 km/h","Damage to roof tiles, gutters and trees"],
            ["2","154–177 km/h","Major roof and siding damage; trees uprooted"],
            ["3","178–208 km/h","Devastating: small buildings destroyed"],
            ["4","209–251 km/h","Catastrophic: severe structural damage, area uninhabitable for weeks"],
            ["5","252 km/h and above","Catastrophic: a high percentage of homes destroyed"]
          ] },
        q:"Haiyan struck Tacloban with sustained winds of about 315 km/h. Which category was it?",
        opts:["Category 2","Category 3","Category 4","Category 5"], a:3,
        hint:"Read the wind column and find which band 315 km/h falls into.",
        why:"315 km/h is far above the 252 km/h threshold, so Haiyan was a Category 5 super typhoon at landfall — among the strongest ever recorded to make landfall anywhere. Remember what the category does and does not tell you: it ranks sustained wind alone, and at Tacloban it was the storm surge, not the wind, that killed most of the victims." },

      { t:"mcq",
        q:"Which hazard killed the majority of victims in Tacloban, and why was the city so exposed to it?",
        opts:[
          "High winds, because the city is built on an exposed ridge",
          "The storm surge, because low-lying Tacloban sits at the head of a funnel-shaped bay that concentrated the water",
          "Landslides from the hills behind the city",
          "Flooding from rivers swollen by rainfall days later"
        ], a:1,
        hint:"Look at the shape of the coastline, and at how high the city sits above the sea.",
        why:"A surge of roughly 5 m swept through low-lying Tacloban. The bay's funnel shape squeezed the water into a progressively narrower channel, raising its height. Compounding this, many residents did not understand the English term 'storm surge' used in warnings, and sheltered from the wind in buildings that were then flooded. Storm surge is the biggest killer in most tropical cyclones." },

      { t:"order",
        q:"Put the Haiyan sequence into the order it occurred.",
        items:[
          "Warnings are issued and around 800,000 people are evacuated in the days beforehand",
          "The Category 5 typhoon makes landfall and a 5 m storm surge sweeps through Tacloban",
          "Blocked roads, a damaged airport and destroyed communications cut the city off",
          "International aid arrives and field hospitals are established",
          "Over four million displaced people begin a rebuilding programme lasting years"
        ],
        hint:"One of these happened *before* the storm — that is preparation, not response.",
        why:"Note that the first stage is preparation, not a response: the Philippines did warn and evacuate, and that saved many lives. The failure was not an absence of warning but that the warnings used a term people did not understand, and that many evacuation shelters were themselves in the surge zone. Getting this nuance right avoids the lazy claim that 'developing countries have no warnings'." },

      { t:"match",
        q:"Match each factor to the way it worsened the disaster in the Philippines.",
        pairs:[
          ["Building quality","Homes of wood and corrugated iron offered almost no resistance to 315 km/h winds"],
          ["Coastal geography","A low-lying city at the head of a funnel-shaped bay concentrated the storm surge"],
          ["Communication","Warnings used the term 'storm surge', which many residents did not understand as meaning a wall of sea water"],
          ["Isolation","A damaged airport and blocked roads delayed rescue past the critical first days"],
          ["Poverty","Limited money for defences, and emergency services quickly overwhelmed"]
        ],
        hint:"Two are physical, two are about information and access, one is economic.",
        why:"Haiyan shows that a disaster is rarely caused by one thing. The physical hazard was extreme, but the death toll was driven up by housing that could not survive it, a warning that did not communicate the real danger, and an isolation that delayed rescue. Naming the funnel-shaped bay is the sort of place-specific detail that lifts an answer." },

      { t:"exam", marks:4,
      q:"Explain two reasons why Typhoon Haiyan caused such a high death toll in the Philippines. (4 marks)",
      guidance:"Award 1 mark for each valid reason identified, and a further 1 mark where that reason is developed with an explanation of how or why it had that effect. A point stated without a reason scores 1 mark only. Credit a maximum of two developed reasons.",
      scheme:[
        {
          "p": "A storm surge of around 5 m struck a low-lying coastal city",
          "r": "so sea water swept through Tacloban at a height above that of most single-storey buildings, drowning people who had sheltered from the wind indoors"
        },
        {
          "p": "Tacloban sits at the head of a funnel-shaped bay",
          "r": "so the narrowing coastline squeezed the surge into a progressively smaller channel, forcing the water higher than it would have reached on a straight coast"
        },
        {
          "p": "Housing was largely built of wood and corrugated iron",
          "r": "so it offered almost no resistance to sustained winds of about 315 km/h, and the debris created was itself lethal to people caught outside"
        },
        {
          "p": "Warnings used the English term 'storm surge'",
          "r": "which many residents did not understand as meaning a wall of sea water, so they sheltered from the wind in buildings that were then flooded rather than moving inland"
        },
        {
          "p": "The Philippines is a lower-income country",
          "r": "so there was limited money for coastal defences and emergency services were overwhelmed almost immediately, leaving survivors without help"
        },
        {
          "p": "A damaged airport, blocked roads and destroyed communications cut Tacloban off",
          "r": "so rescue teams and aid could not reach the city for several days, and injured survivors died of treatable injuries while waiting"
        }
      ],
      why:"The strongest answers pair the physical with the human. Extreme wind and surge explain the hazard; wooden housing, a misunderstood warning and days of isolation explain why so many died. The funnel-shaped bay is the detail examiners look for — it shows you know this place rather than typhoons in general." }
    ]
  }],

  /* ------------------------------------------------------ the comparison -- */
  compare:{
    id:"cmp-cyclone", name:"Ida vs Haiyan",
    sub:"Comparing the linked tropical cyclone case studies",
    brief:"Haiyan killed around 6,300 people and cost about $12 billion. Ida killed around 30 in Louisiana and cost about $75 billion. That is the development contrast in its starkest form — the death tolls and the damage bills run in opposite directions. But look closely at how Ida's victims actually died, and at the fifty people its remnants killed 2,000 km away, and the picture becomes more interesting than wealth alone.",
    qs:[
      { t:"data",
        chart:{ kind:"bars", title:"Ida 2021 vs Haiyan 2013", sub:"The storm in the poorer country killed far more; the storm in the richer one cost far more.",
          series:[
            { label:"Ida deaths (Louisiana)", value:30,   of:7000, display:"~30",     colour:"#4fdc95" },
            { label:"Haiyan deaths",          value:6300, of:7000, display:"~6,300",  colour:"#ff7a5e" },
            { label:"Ida damage",             value:75,   of:80,   display:"~$75bn",  colour:"#3ad4bb" },
            { label:"Haiyan damage",          value:12,   of:80,   display:"~$12bn",  colour:"#f5b93f" }
          ] },
        q:"Haiyan killed roughly two hundred times as many people as Ida did in Louisiana, but Ida cost about six times as much. What explains this opposite pattern?",
        opts:[
          "Ida was a far more powerful storm in every respect",
          "Wealthier countries have far more valuable property to destroy, but also better warnings, defences, healthcare and rescue — so damage bills rise while death tolls fall",
          "Economic damage and death tolls are never related to development",
          "The Philippines has more expensive infrastructure than the United States"
        ], a:1,
        hint:"Think about what a country's wealth buys — and what that same wealth is worth once it is under water.",
        why:"This is the core development contrast, and it runs in opposite directions for the two measures. High-income countries have dense, expensive infrastructure, so financial losses are enormous. They also have accurate forecasting, enforced building codes, organised evacuation and well-funded emergency services, so far fewer people die. Lower-income countries show the reverse: smaller absolute damage bills, far higher death tolls." },

      { t:"mcq",
        q:"What did Ida and Haiyan have in common, despite the very different levels of development?",
        opts:[
          "In both, wind was by far the biggest killer",
          "In neither did wind cause most deaths, and in both the victims were concentrated among the poorest and most vulnerable residents",
          "In both, the government response was widely praised as rapid and effective",
          "In both, there was no warning of any kind before landfall"
        ], a:1,
        hint:"Ask how people actually died in each — then ask which people.",
        why:"Wind is rarely the main killer. Haiyan's deaths came overwhelmingly from the storm surge; Ida's came from heat and carbon monoxide during the power failure that followed. Different mechanisms, but the same social pattern: those who died were disproportionately poor, elderly or without the means to leave — in Tacloban's wood and iron housing, and in unpowered New Orleans homes and New York basement apartments. Finding the shared pattern as well as the contrast is what an 'assess' question rewards." },

      { t:"mcq",
        q:"Ida's defences held and almost nobody in New Orleans drowned, yet around 30 people still died in Louisiana and about 50 more in New York and New Jersey. What does this show about hazard management?",
        opts:[
          "That the levee rebuild was a waste of money",
          "That protection can remove one vulnerability while leaving others — the water was stopped, but the power grid was not hardened, and the storm's remnants struck a region that had not prepared for it",
          "That the United States is a developing country",
          "That storm surge is never dangerous"
        ], a:1,
        hint:"The levees worked. Ask what the money was not spent on.",
        why:"Ida is the case study that stops you writing a lazy answer in either direction. The city's $14.5 billion defences unquestionably worked — a Category 4 surge struck a city below sea level and it did not flood. But the investment had gone into keeping water out, not into hardening a power grid that then failed completely, so the deaths moved to heat and carbon monoxide instead. And Ida's remnants drowned around fifty people 2,000 km away in a region with no hurricane defences at all. Management reduces risk and redistributes what remains; it does not abolish it." },

      { t:"exam", marks:8,
      q:"'The impacts of a tropical cyclone depend more on the level of development of the country it hits than on the strength of the storm.' Assess this statement using Hurricane Ida (2021) and Typhoon Haiyan (2013). (8 marks)",
      guidance:"Read the level descriptors, decide which one your answer as a whole reaches, then award a mark within that band. An answer that reaches no supported judgement cannot enter Level 3, however much it knows.",
      indicative:[
        "Supporting: Haiyan made landfall as a Category 5 and killed around 6,300 people; Ida made landfall as a Category 4 and killed around 30 in Louisiana, so the stronger storm in the poorer country was vastly deadlier.",
        "Supporting: the USA could afford $14.5 billion of levees and floodwalls around New Orleans, which held against a Category 4 surge; the Philippines had no comparable coastal protection at Tacloban.",
        "Supporting: enforced building codes meant US structures largely survived, while wood and corrugated-iron housing in Tacloban was destroyed outright.",
        "Supporting: Haiyan's warnings failed partly because the term 'storm surge' was not understood, a communication and education gap linked to development.",
        "Supporting: the USA absorbed a roughly $75 billion bill from its own resources, whereas the Philippines depended on international aid for years.",
        "Challenging: physical geography was decisive in both. Tacloban's funnel-shaped bay amplified the surge, and New Orleans sits in a bowl below sea level — neither fact depends on wealth.",
        "Challenging: development did not prevent all deaths in Louisiana. Most were indirect, from heat and carbon monoxide during a power failure lasting days, and fell mainly on elderly and poorer residents.",
        "Challenging: Ida's remnants killed around 50 more people in New York and New Jersey, many in basement apartments, showing that vulnerability within a rich country is unevenly distributed.",
        "Challenging: absolute damage figures always favour the richer country, because there is more valuable property to destroy, so the comparison depends on which measure is chosen.",
        "A judgement might separate deaths from damage: development strongly determines the death toll and the speed of recovery, but physical geography sets the scale of the hazard, and inequality within a country can still cost lives even where the engineering works."
      ],
      levels:[
        {
          "band": "Level 3 (7–8 marks)",
          "lo": 7,
          "hi": 8,
          "d": "Accurate and detailed knowledge and understanding throughout. A logical, coherent and fully developed line of reasoning, applied directly to the question. Specific, relevant evidence from both case studies used to support each point. Reaches a substantiated judgement that follows from the argument made."
        },
        {
          "band": "Level 2 (4–6 marks)",
          "lo": 4,
          "hi": 6,
          "d": "Mostly accurate knowledge and understanding. A line of reasoning that is mostly logical but undeveloped in places, with some points asserted rather than explained. Some relevant case-study evidence, though it may be one-sided or imprecise. A judgement is offered but only partly supported."
        },
        {
          "band": "Level 1 (1–3 marks)",
          "lo": 1,
          "hi": 3,
          "d": "Limited knowledge and understanding, with some inaccuracy. A simple or undeveloped line of reasoning, often a list of points rather than an argument. Little or no specific case-study evidence. Judgement is absent, or asserted without support."
        }
      ],
      why:"Ida is a demanding case study to argue with, because it supports the statement and complicates it at the same time. The defences held, which is the clearest evidence anywhere on the specification that investment saves lives — and yet people still died, from heat rather than water, and mostly the old and the poor. An answer that notices vulnerability moved rather than disappeared is arguing at Level 3." }
    ]
  }
}

];

/* ============================================================================
   THE LEVEL FINALE — spend your tokens as a hazard-management budget
   ============================================================================ */

var FINALE = {
  unlockAt: 90,
  title: "Advising a government on tectonic risk",
  brief: "A densely populated coastal region sits on an active plate boundary. A major earthquake is considered likely within the next twenty years. You have been given the tokens you earned in the field as your budget. Spend them across the four Ps — you cannot afford everything, so the choices you leave out matter as much as the ones you make.",
  cats: [
    { name:"Prediction", desc:"Knowing that an event is coming — and how much warning that actually buys you.", items:[
      { id:"seismo", n:"Seismometer and GPS monitoring network", d:"Tracks strain building along the fault. Gives long-term probability, not a date.", cost:18, lives:4, econ:3, recov:2 },
      { id:"alert",  n:"Earthquake early-warning alert system",  d:"Detects the fast P-waves and broadcasts an alert seconds before the damaging shaking arrives.", cost:30, lives:10, econ:6, recov:2 }
    ]},
    { name:"Preparation", desc:"Making sure people and services know what to do when it happens.", items:[
      { id:"drills", n:"Earthquake drills in every school and workplace", d:"Millions practise drop, cover and hold on each year. Very cheap, very effective.", cost:12,  lives:14, econ:2, recov:3 },
      { id:"kits",   n:"Emergency supply kits and evacuation signage",    d:"Households stock water, food and first aid; routes to high ground are clearly marked.", cost:15, lives:8,  econ:2, recov:6 },
      { id:"teams",  n:"Trained and equipped search-and-rescue teams",    d:"Local teams reach trapped survivors in the first 24 hours, when survival rates are highest.", cost:24, lives:12, econ:3, recov:10 }
    ]},
    { name:"Protection", desc:"Engineering the built environment so it survives the shaking.", items:[
      { id:"retrofit", n:"Retrofit hospitals and schools to aseismic standards", d:"Strengthens the buildings society depends on most in the hours after an earthquake.", cost:30, lives:18, econ:12, recov:12 },
      { id:"codes",    n:"Enforce aseismic building codes on all new construction", d:"Base isolators, cross-bracing and steel frames. Expensive, slow — and the single biggest life-saver.", cost:36, lives:22, econ:20, recov:10 },
      { id:"seawall",  n:"Tsunami sea wall and vertical evacuation towers",  d:"Protects the coastal town from the tsunami that a sea-floor rupture would generate.", cost:39, lives:16, econ:14, recov:6 }
    ]},
    { name:"Planning", desc:"Deciding where building is allowed in the first place.", items:[
      { id:"zoning", n:"Land-use zoning away from the fault and liquefaction zones", d:"No new housing or critical infrastructure on the most dangerous ground.", cost:21, lives:12, econ:14, recov:8 },
      { id:"maps",   n:"Public hazard mapping and awareness campaign",  d:"Everyone can see which ground is risky — which is what makes zoning politically possible.", cost:9, lives:6, econ:3, recov:3 }
    ]}
  ],
  /* Combinations that are worth more together than apart. */
  synergies: [
    { needs:["alert","drills"],  lives:8, recov:0, note:"An early warning is only useful if people know what to do with those few seconds. Pairing the alert system with drills turned a siren into a survival response." },
    { needs:["zoning","maps"],   lives:5, recov:0, note:"Publishing hazard maps made the zoning laws enforceable — residents could see why the restrictions existed, so they were accepted rather than fought." },
    { needs:["retrofit","teams"],lives:0, recov:5, note:"Hospitals stayed standing and rescue teams could actually deliver casualties to them, so the region recovered noticeably faster." }
  ],
  /* Gaps the debrief will call out. */
  gaps: [
    { when:function(b){ return !b.retrofit && !b.codes; },
      text:"You bought no structural protection. Collapsing buildings are the single biggest cause of death in earthquakes — this is the gap that costs the most lives." },
    { when:function(b){ return (b.seismo||b.alert) && !b.drills && !b.kits && !b.teams; },
      text:"You invested in prediction but not preparation. Earthquakes cannot be predicted precisely, and a warning nobody has rehearsed for saves very few people." },
    { when:function(b){ return !b.zoning && !b.maps; },
      text:"With no land-use planning, rebuilding happened on the same dangerous ground — including liquefaction-prone land near the fault." },
    { when:function(b){ return !b.seawall; },
      text:"The offshore rupture generated a tsunami and the coastal town had no barrier and nowhere high to run to." },
    { when:function(b){ return !b.drills; },
      text:"Drills are the cheapest life-saving measure available. Skipping them left people unsure what to do in the first thirty seconds." }
  ]
};
