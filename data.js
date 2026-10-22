// Hulaween 2026 (Oct 22-25, Spirit of the Suwannee Music Park, Live Oak FL)
// Transcribed from the official schedule graphics at https://hulaween.com/schedule/
// Format: Day|Venue|Name|start|end[|x]   (24h clock; start before noon = after midnight,
// still part of that festival day; trailing "x" = non-music: yoga, visuals, performances)

window.DAYS = [
  { id: "Thu", label: "Thursday", date: "Oct 22" },
  { id: "Fri", label: "Friday",   date: "Oct 23" },
  { id: "Sat", label: "Saturday", date: "Oct 24" },
  { id: "Sun", label: "Sunday",   date: "Oct 25" },
];

// x/y are percentages of assets/map.jpg. Spirit Lake sub-venues are not individually
// marked on the official map, so their pins are approximate (around the lake).
window.VENUES = {
  "Meadow":       { name: "The Meadow",       x: 52.9, y: 30.6, color: "#ff5d8f" },
  "Hallows":      { name: "The Hallows",      x: 58.5, y: 43.0, color: "#ffb347" },
  "Amphitheatre": { name: "The Amphitheatre", x: 57.3, y: 54.0, color: "#7be0ad" },
  "Spirit Lake":  { name: "Spirit Lake Stage",x: 40.2, y: 53.8, color: "#5cc8ff" },
  "Off Limits":   { name: "Def Off Limits",   x: 30.8, y: 53.8, color: "#c792ff" },
  "House of Lost":{ name: "House of Lost",    x: 27.5, y: 58.5, color: "#ff8a5c", approx: true },
  "Incendia":     { name: "Incendia",         x: 31.5, y: 56.0, color: "#ff6b6b", approx: true },
  "Lake Show":    { name: "Lake Show",        x: 34.7, y: 59.8, color: "#6ee7e7", approx: true },
  "Oasis":        { name: "Oasis",            x: 43.5, y: 58.8, color: "#a3e635", approx: true },
};

window.SETS_RAW = `
Thu|Meadow|Casey Club|16:00|17:00
Thu|Meadow|Richard Finger|18:00|19:00
Thu|Meadow|Hamdi|20:00|21:00
Thu|Meadow|Excision|22:30|00:00
Thu|Hallows|Costa|15:15|16:00
Thu|Hallows|Steller|17:00|18:00
Thu|Hallows|Ahee|19:00|20:00
Thu|Hallows|Crankdat|21:00|22:25
Thu|Amphitheatre|Baalti|16:00|17:00
Thu|Amphitheatre|Dean Turnley|18:00|19:30
Thu|Amphitheatre|Riordan|20:30|22:00
Thu|Amphitheatre|Kettama|22:30|00:00
Thu|Spirit Lake|Joy Wagon|16:30|17:30
Thu|Spirit Lake|Minim|18:30|19:30
Thu|Spirit Lake|Supertaste|20:30|21:30
Thu|Spirit Lake|Midnight Generation|22:30|00:00
Thu|Spirit Lake|Magoo|01:00|02:45
Thu|Off Limits|Karan!|17:30|18:30
Thu|Off Limits|Gravagerz|19:30|20:30
Thu|Off Limits|Effy|21:30|22:30
Thu|Off Limits|¥ØU$UK€ ¥UK1MAT$U|00:00|01:00
Thu|Off Limits|Surprise Sets|01:15|02:45
Thu|House of Lost|Wyatt Norton|18:45|19:30
Thu|House of Lost|Shevonne & The Force|23:00|00:00
Thu|House of Lost|Flowskate.wav|01:00|02:00
Thu|House of Lost|Hwoofer (Parlor Stage)|02:00|03:00
Thu|Incendia|Fungi Flows & J Rose|20:00|20:45
Thu|Incendia|ODZ|20:45|21:30
Thu|Incendia|Redaktd|21:30|22:30
Thu|Incendia|Kouch Kollective (2 hr takeover)|22:30|00:30
Thu|Incendia|Fly|00:30|01:30
Thu|Incendia|Ahee|01:30|02:45
Thu|Lake Show|Holographic Visuals|20:30|03:00|x
Thu|Oasis|Inner Animal Yoga|15:15|16:15|x
Thu|Oasis|Crystal Healing|16:15|17:15|x

Fri|Meadow|Karina Rykman|15:15|16:15
Fri|Meadow|The String Cheese Incident|17:15|18:30
Fri|Meadow|The String Cheese Incident|19:30|21:00
Fri|Meadow|My Morning Jacket|22:00|00:30
Fri|Hallows|Caitlin Krisko & The Broadcast|16:15|17:15
Fri|Hallows|Eggy|18:30|19:30
Fri|Hallows|Lettuce|21:00|22:00
Fri|Hallows|STS9|00:30|02:00
Fri|Amphitheatre|Curra|16:00|17:00
Fri|Amphitheatre|Saka x Fly|17:30|18:30
Fri|Amphitheatre|Opiuo|19:00|20:00
Fri|Amphitheatre|Lyny|20:30|21:45
Fri|Amphitheatre|Of The Trees (Memory Palace Takeover)|22:15|23:45
Fri|Spirit Lake|The Yeah Babys|15:30|16:30
Fri|Spirit Lake|Natalie Brooke|17:30|18:30
Fri|Spirit Lake|Anthill Cinema w/ Jon Ditty|19:30|20:30
Fri|Spirit Lake|Guavatron|21:30|22:30
Fri|Spirit Lake|EOTO & Friends|23:30|00:30
Fri|Spirit Lake|Lamp|02:15|03:45
Fri|Off Limits|Rudashi|16:30|17:30
Fri|Off Limits|AK Sports|18:30|19:30
Fri|Off Limits|Hhunter|20:30|21:30
Fri|Off Limits|Frost Children (DJ Set)|22:30|23:30
Fri|Off Limits|Surprise Sets|00:30|03:00
Fri|House of Lost|Shevonne|15:30|16:30
Fri|House of Lost|Cozy in the Black|00:00|01:00
Fri|House of Lost|You Still Feel Them Out Here, Don't You|03:00|04:00
Fri|Incendia|Serenety w/ Steller|16:00|17:00
Fri|Incendia|WWALS Tree Conservation|17:00|18:00|x
Fri|Incendia|Tyler Labs|20:00|21:00
Fri|Incendia|Subspace|21:00|22:00
Fri|Incendia|Charlie Hustle|22:00|23:00
Fri|Incendia|Henry Dope|23:00|00:00
Fri|Incendia|Bria Domina|00:00|01:00
Fri|Incendia|Cut Rugs|01:00|02:00
Fri|Incendia|Knob Ross|02:00|03:45
Fri|Lake Show|Holographic Visuals|20:30|22:30|x
Fri|Lake Show|Performance|22:30|23:30|x
Fri|Lake Show|Holographic Visuals|23:30|00:30|x
Fri|Lake Show|Performance|00:30|01:30|x
Fri|Lake Show|Holographic Visuals|01:30|04:00|x
Fri|Oasis|Dubstep & Pilates|15:15|16:15|x

Sat|Meadow|Sneezy|15:45|16:45
Sat|Meadow|The String Cheese Incident|17:45|19:00
Sat|Meadow|The Warren Haynes Incident|20:15|21:45
Sat|Meadow|Pretty Lights|23:00|02:00
Sat|Hallows|Motifv|15:15|15:45
Sat|Hallows|Heyz|16:45|17:45
Sat|Hallows|Daily Bread|19:00|20:15
Sat|Hallows|Levity|21:45|23:00
Sat|Amphitheatre|Jerro|16:00|17:15
Sat|Amphitheatre|Gudfella|17:30|18:45
Sat|Amphitheatre|Kasablanca|19:30|21:00
Sat|Amphitheatre|Ben Böhmer Live|21:30|23:15
Sat|Spirit Lake|Tire Fire|15:30|16:30
Sat|Spirit Lake|Jon Stickley Trio|17:00|18:00
Sat|Spirit Lake|Asydequest|18:30|19:30
Sat|Spirit Lake|Willis|20:15|21:15
Sat|Spirit Lake|Dope Lemon|22:00|23:30
Sat|Spirit Lake|Mountain Grass Unit|02:15|03:45
Sat|Off Limits|Close Friends Only|20:00|21:00
Sat|Off Limits|Tini Gessler|21:00|22:00
Sat|Off Limits|Jackie Hollander|22:00|23:00
Sat|Off Limits|Green Velvet (LaLaLand Takeover)|23:00|01:00
Sat|Off Limits|Green Velvet B2B & Surprise Sets|01:00|02:00
Sat|House of Lost|Beach Terror|19:00|20:00
Sat|House of Lost|Rudashi|21:30|22:30
Sat|House of Lost|Post Physique|22:30|23:00
Sat|House of Lost|Cardiel|23:30|00:30
Sat|House of Lost|Dagger (Speakeasy)|00:30|01:15
Sat|House of Lost|Mass|02:00|03:00
Sat|House of Lost|Prudence & Dani Jaye|03:30|04:00
Sat|Incendia|Carl Pemberton|19:00|20:00
Sat|Incendia|Möbius Drip|20:00|20:45
Sat|Incendia|Sammy Beats|20:45|21:30
Sat|Incendia|Monji|21:30|22:15
Sat|Incendia|Crucial|22:15|23:00
Sat|Incendia|Kollapse|23:00|00:00
Sat|Incendia|A Hundred Drums|00:00|01:00
Sat|Incendia|Rudashi|03:00|03:55
Sat|Lake Show|Holographic Visuals|20:30|22:30|x
Sat|Lake Show|Performance|22:30|23:30|x
Sat|Lake Show|Holographic Visuals|23:30|00:30|x
Sat|Lake Show|Performance|00:30|01:30|x
Sat|Lake Show|Holographic Visuals|01:30|04:00|x
Sat|Oasis|Deep Stretch Into Nirvana|15:15|16:14|x
Sat|Oasis|Transformational Breathwork|17:00|18:30|x
Sat|Oasis|F*** The Pain Away|18:45|19:45|x

Sun|Meadow|Tapers Choice|13:00|14:00
Sun|Meadow|The String Cheese Incident|15:00|17:00
Sun|Meadow|Geese|18:30|20:00
Sun|Hallows|Playlunch|12:15|13:00
Sun|Hallows|Guerilla Toss|14:00|15:00
Sun|Hallows|Unknown Mortal Orchestra|17:00|18:30
Sun|Amphitheatre|Hershe|13:15|14:15
Sun|Amphitheatre|A Hundred Drums|14:30|15:30
Sun|Amphitheatre|Maddy O'Neal|15:45|16:45
Sun|Amphitheatre|Manic Focus|17:00|18:00
Sun|Amphitheatre|Big Gramatik (Big Gigantic B2B Gramatik)|18:30|20:00
Sun|Spirit Lake|Moonstone Riders|13:00|14:00
Sun|Spirit Lake|True Loves|15:00|16:00
Sun|Spirit Lake|Lewis OfMan|17:00|18:00
Sun|Spirit Lake|Drama [Club]|19:00|20:00
Sun|Spirit Lake|Greyboy Allstars|21:30|23:30
Sun|Off Limits|Open Aux Contest Winner|14:00|15:00
Sun|Off Limits|INVT|16:00|17:00
Sun|Off Limits|Daniel Allan|18:00|19:00
Sun|Off Limits|Salute|20:00|21:15
Sun|Off Limits|Surprise Sets|22:15|23:30
Sun|Incendia|SOL B2B Gia Nobody|20:00|21:00
Sun|Incendia|Surprise Guest|21:00|22:30
Sun|Incendia|Refeeki|22:30|23:45
Sun|Lake Show|Holographic Visuals|20:30|21:00|x
Sun|Lake Show|Performance|21:00|22:00|x
Sun|Lake Show|Holographic Visuals|22:00|23:00|x
Sun|Lake Show|Performance|23:00|00:00|x
Sun|Oasis|Oral History of the Spirit of Suwannee|12:15|13:00|x
`;
