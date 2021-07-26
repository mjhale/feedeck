import NodeCache from "node-cache";
import { setTeamOptions, setPlayerOptions } from "../redux/actions";

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
  getNames()
    .then(res => {
      setPlayerOptions(
        Object.entries(res).map((n) => ({value: n[0], label: n[1]}))
      );
    });

  fetch(`https://api.sibr.dev/chronicler/v1/teams`)
    .then(res => res.json())
    .then(res => {
      setTeamOptions(
        res.data
        .filter((d) => ilbTeamIds.indexOf(d.id) !== -1)
        .map((d) => (
          {value: d.id, label: d.data.fullName}
        ))
      );
    });
};

// stolen from https://github.com/xSke/blaseball-player-list/blob/main/src/teams.ts thanks astrid
const ilbTeamIds = [
    "105bc3ff-1320-4e37-8ef0-8d595cb95dd0",
    "23e4cbc1-e9cd-47fa-a35b-bfa06f726cb7",
    "36569151-a2fb-43c1-9df7-2df512424c82",
    "3f8bbb15-61c0-4e3f-8e4a-907a5fb1565e",
    "46358869-dce9-4a01-bfba-ac24fc56f57e",
    "57ec08cc-0411-4643-b304-0e80dbc15ac7",
    "747b8e4a-7e50-4638-a973-ea7950a3e739",
    "7966eb04-efcc-499b-8f03-d13916330531",
    "878c1bf6-0d21-4659-bfee-916c8314d69c",
    "8d87c468-699a-47a8-b40d-cfb73a5660ad",
    "979aee4a-6d80-4863-bf1c-ee1a78e06024",
    "9debc64f-74b7-4ae1-a4d6-fce0144b6ea5",
    "a37f9158-7f82-46bc-908c-c9e2dda7c33b",
    "adc5b394-8f76-416d-9ce9-813706877b84",
    "b024e975-1c4a-4575-8936-a3754a08806a",
    "b63be8c2-576a-4d6e-8daf-814f8bcea96f",
    "b72f3061-f573-40d7-832a-5ad475bd7909",
    "bb4a9de5-c924-4923-a0cb-9d1445f1ee5d",
    "bfd38797-8404-4b38-8b82-341da28b1f83",
    "c73b705c-40ad-4633-a6ed-d357ee2e2bcf",
    "ca3f1c8c-c025-4d8e-8eef-5be6accbeb16",
    "d9f89a8a-c563-493e-9d64-78e4f9a55d4a",
    "eb67ae5e-c4bf-46ca-bbbc-425cd34182ff",
    "f02aeae2-5e6a-4098-9842-02d2273f25c7",
    "b47df036-3aa4-4b98-8e9e-fe1d3ff1894b", // The Oxford Paws
];
