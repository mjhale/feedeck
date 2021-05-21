import store from "../redux/store"

/*
1, // Play ball!
2, // Half-inning
3, // Pitcher change
11, // Game end log
12, // Plate appearance
13, // Strike (not including Foul Balls)
14, // Ball
15, // Foul Ball
20, // Solar Panels overflow run activation
25, // Strike zapped by Electric blood
28, // End of inning
29, // Site takeover text
33, // Birds flavor text
59, // Decree passed
69, // Echo Chamber
73, // Peanuts flavor text
81, // Tarot reading
82, // Emergency Alert
85, // Over Under
86, // Under Over
88, // Undersea
91, // Homesickness
92, // Superyummy text
93, // Perk
96, // Earlbirds
97, // Late to the Party
106, // Added in-game modifier (Triple Threat, Free Refill, Magmatic, Inhabiting, etc)
107, // Removed in-game modifier (same as above, but when they disappear)
108, // Modifier expires
142, // Postseason spot
143, // Final standings
144, // Wired -> Tired transitions
146, // Added modifier due to another modifier(?) (under/over, Perk)
147, // Removed modifier added due to another modifier(?) (under/over, Perk)
148, // Superyummy transitions (Overperforming -> Underperforming, vice versa, may be general modifier-induced mod swaps)
151, // Decree narration
152, // Will results
154, // Team shamed
153, // Team modification blessing (S15+)
155, // Team shames
156, // Sun 2 grants win
157, // Black Hole swallows
158, // Eliminated from postseason
159, // Postseason advance
165, // High Pressure (The pressure is on/off, Overperforming added and removed)
169, // Echoed player
171, // Echo fades
172, // Echoed modification added
174, // Receiver becomes an echo
175, // Alternate Coin text (hidden from Book, includes player)
176, // The Investigation is Underway.
178, // Midseason Middling
181, // Entering a Crime Scene
185, // Item breaks
192, // Holiday Inning
193, // Prize Match (declaring what the prize is)
 */

const plateOutcomes = [
  4, // Stolen base
  5, // Walk
  6, // Strikeout
  7, // Flyout
  8, // Ground out
  9, // Home run
  10, // Hit (single/double/triple)
  22, // Hit by pitch
  23, // Player skipped due to being Shelled or Elsewhere
  27, // Mild pitch
];

const changes = [
  24, // Partying
  35, // Birds free shelled player
  40, // Feedback blocked
  41, // Feedback
  47, // Allergic reaction
  49, // Reverb shuffle
  51, // Blooddrain
  52, // Siphon
  54, // Incineration
  67, // Consumers attack
  72, // Peanut Mister
  74, // Tasting the infinite (Shelling)
  84, // Return from Elsewhere

  109, // Player recruited (including Postseason Births)
  110, // Player sent to shadows and replaced (necromancy)
  111, // Player removed and replaced from shadows (Returned)
  112, // ECHO STATIC player removed from team
  113, // Player trade
  114, // Player changing position
  115, // Player joining team
  116, // New player after incineration
  117, // Player stat increase
  118, // Player stat decrease
  119, // Player reroll
  125, // Player enters the Hall of Flame
  126, // Player exits the Hall of Flame
  127, // Player gained item
  130, // Reverb shuffle (full)
  132, // Reverb shuffle (rotation)
  137, // Player hatched
  139, // Player Evolves
  145, // Player becomes an Alternate
  149, // Necromancy narration
  150, // Returned player is permitted to stay
  161, // Player gained blood type
  168, // Peanut allergy cured (Nut Button)
  170, // Echo player becomes Static
  179, // Player hidden stat increase
  180, // Player hidden stat decrease
];

const neat = [
  ...changes,
  34, // Murder of crows
  36, // Triple Threat
  37, // Free Refill
  39, // Wired
  48, // Reverberating
  55, // Fire eating
  62, // Flood
  63, // Salmon swim upstream
  65, // Entering the Secret Base
  66, // Exiting the Secret Base
  70, // Grind Rail
];

const team = [
  56, // Flag planted
  57, // Renovation built
  60, // Blessing won
  61, // Will received
  78, // Solar Panels start-up text
  79, // Solar Panels overflow run collection
  135, // New team
  136, // New player (excluding incinerations)
  141, // Team wins Internet Series
  166, // Lineup optimized
];

const types = [...plateOutcomes, ...changes, ...team];

export const initFeed = () => {
  fetch(`https://api.sibr.dev/eventually/events?type=${types.toString()}&limit=10000`)
    .then(res => res.json())
    .then(feed => store.dispatch({type: "player/feed", payload: feed}));
};

export const listenFeed = function(cb) {
  let stream = new EventSource(`https://api.sibr.dev/eventually/sse`);
  stream.addEventListener("message", (event) => {
    const f = JSON.parse(event.data);
    if (types.includes(f.type)) {
      cb(JSON.parse(event.data));
    }
  });
  stream.addEventListener("error", () => {
    console.log("allyoops");
    if (stream !== undefined) {
      stream.close();
    }
    setTimeout(() => listenFeed(cb), 2000);
  });
};
