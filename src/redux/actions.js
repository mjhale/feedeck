import { getName } from "../api/blaseball";
import store from "./store";

export const addPlayerByUuid = async function(uuid) {
  var name = await getName(uuid);
  return addPlayer(uuid, name);
}

export const addPlayer = function(uuid, name) {
  return store.dispatch({
    type: "player/add",
    payload: {
      id: uuid,
      name: name
    }
  });
}
