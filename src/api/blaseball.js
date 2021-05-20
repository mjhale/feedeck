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
