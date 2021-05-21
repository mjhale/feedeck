import NodeCache from "node-cache";
import { feedMe } from "../redux/actions";
import { scheduleToFeed } from "./blaseball";

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

export const initChron = () => {
  fetch(`https://api.sibr.dev/chronicler/v1/games/updates?order=desc&count=1000`)
    .then(res => res.json())
    .then(res => {
      for (var r of res.data) {
        feedMe(scheduleToFeed([r.data]));
      }
    });
};
