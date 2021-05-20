import NodeCache from "node-cache";

const cache = new NodeCache();

export const getNames = () => {
  var p = cache.get("names");
  if (p !== undefined) {
    return Promise.resolve(p);
  }
  return fetch(`https://api.sibr.dev/chronicler/v1/players/names`)
    .then(res => res.json())
    .then(res => {
      cache.mset("names", res, 600);
      return res;
    })
}

export const getName = async function(uuid) {
  var p = await getNames();
  return p[uuid];
};
