import NodeCache from "node-cache";
import { feedMe, addFilterOptions } from "../redux/actions";
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
      cache.set("names", res, 600);
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
  getNames()
    .then(res => {
      addFilterOptions(Object.entries(res).map((n) => ({value: {filters: n }, label: n[1]})))
    });

  fetch(`https://api.sibr.dev/chronicler/v1/teams`)
    .then(res => res.json())
    .then(res => {
      addFilterOptions(res.data.map((d) => ({value: {filters: [d.id, d.data.nickname, d.data.fullName] }, label: d.data.fullName})))
    })
};
