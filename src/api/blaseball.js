import NodeCache from "node-cache";
const cache = new NodeCache();

export const getNames = () => {
  var p = cache.get("names");
  if (p !== undefined) {
    return Promise.resolve(p);
  }
  return fetch(`https://cors-proxy.blaseball-reference.com/database/playerNamesIds`)
    .then(res => res.json())
    .then(res => {
      cache.set("names", res, 600);
      return res;
    })
}

export const getName = function(uuid) {
  return getNames().then((players) => {
    for (let p of players) {
      if (p.id === uuid) {
        return p.name;
      }
    }
    return "";
  });
}

const neatPitchEvents = [
  /hits a (Single|Double|Triple|Quadruple|grand slam)/,
  /hits a (solo|2-run|3-run|4-run) home run/,
  /strikes out/,
  /hits [\w\s]+ with a pitch/,
  /draws a walk/,
  /charms/
];

const neatHitEvents = [
  /hits a (Single|Double|Triple|Quadruple|grand slam)/,
  /hits a (solo|2-run|3-run|4-run) home run/,
  /strikes out/,
  /hits [\w\s]+ with a pitch/,
  /draws a walk/,
  /steals (second base|third base|fourth base|fifth base|home)/,
  /scores/,
  /Red Hot/,
  /flyout/,
  /ground out/,
  /charms/
];

const neatChangeEvents = [
  /Rogue Umpire/,
  /feedback/,
  /Reverb/,
  /(yummy|allergic) reaction/,
  /they peck [\w\s]+ free!/,
  /Big Peanut/,
  /tastes the infinite/,
  /is now being Observed/,
  /surge of Immateria/,
  /Elsewhere/,
  /CONSUMERS ATTACK/,
  /ECHO/,
  /STATIC/,
  /Echoed/
];

function isPitching(update) {
  for (const pattern of neatPitchEvents) {
    if (pattern.test(update)) {
      return true;
    }
  }
  return false;
}

function isNeat(update) {
  for (const pattern of [...neatHitEvents, ...neatChangeEvents]) {
    if (pattern.test(update)) {
      return true;
    }
  }
  return false;
}

export const scheduleToFeed = function(schedule) {
  return schedule.map((game) => {
    let feed = {
      id: `${game.id}_${game.playCount}`,
      playerTags: [],
      teamTags: [
        game.awayTeam,
        game.homeTeam
      ],
      gameTags: [
        game.id
      ],
      season: game.season,
      tournament: game.tournament,
      day: game.day,
      phase: game.phase,
      category: 0, // uh
      description: game.lastUpdate,
      nuts: 0,
      playerNames: [],
      teamNames: [
        game.awayTeamName,
        game.homeTeamName,
      ],
      created: null,
      type: null, // TODO lmao
      metadata: {}
    };
    let players = [];
    if (isPitching(game.lastUpdate)) {
      if (game.topOfInning) {
        players.push(game.homePitcher);
      } else {
        players.push(game.awayPitcher);
      }
    }
    feed.playerTags = players;
    if (players.length || isNeat(game.lastUpdate)) {
      return feed;
    }
    return undefined;
  }).filter(f => f !== undefined);
};

export const listenSchedule = function(cb) {
  let stream = new EventSource(`https://cors-proxy.blaseball-reference.com/events/streamData`);
  stream.addEventListener("message", (event) => {
    const sched = JSON.parse(event.data).value?.games?.schedule;
    cb(sched);
  });

  stream.addEventListener("error", () => {
    console.log("oops");
    if (stream !== undefined) {
      stream.close();
    }
    setTimeout(() => listenSchedule(cb), 2000);
  });
};
