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
          {value: d.id, label: d.data.state?.scattered?.fullName || d.data.fullName}
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
    "b47df036-3aa4-4b98-8e9e-fe1d3ff1894b", // Oxford Paws
    "2e22beba-8e36-42ba-a8bf-975683c52b5f", // Carolina Queens
    "88151292-6c12-4fb8-b2d6-3e64821293b3", // Alaskan Immortals
    "54d0d0f2-16e0-42a0-9fff-79cfa7c4a157", // Antarctic Fireballs
    "9494152b-99f6-4adb-9573-f9e084bc813f", // Baltimore Crabs
    "d6a352fc-b675-40a0-864d-f4fd50aaeea0", // Canada Artists
    "55c9fee3-79c8-4467-8dfb-ff1e340aae8c", // Dallas Cows
    "4c192065-65d8-4010-8145-395f82d24ddf", // Green Hill Hedgehogs
    "258f6389-aac1-43d2-b30a-4b4dde90d5eb", // Kola Boar
    "b6b5df8f-5602-4883-b47d-07e77ed9d5af", // Laredo Excavators
    "1e04e5cc-80a6-41c0-af0d-7292817eed79", // Louisville Lobsters
    "d0762a7e-004b-48a9-a832-a993982b305b", // Mallorca Whales
    "3a094991-4cbc-4786-b74c-688876d243f4", // Maryland Squirrels
    "c19bb50b-9a22-4dd2-8200-bce639b1b239", // Minneapolis Truckers
    "cbd44c06-231a-4d1a-bb7d-4170b06e566a", // Oklahoma Heartthrobs
    "1a51664e-efec-45fa-b0ba-06d04c344628", // Oregon Psychics
    "4cd14d96-f817-41a3-af6c-2d3ed0dd20b7", // San Diego Saltines
];
