import { getName } from "../api/blaseball";
import store from "./store";

export const addPlayer = async function(uuid) {
  var name = await getName(uuid);
  return store.dispatch({
    type: "player/add",
    payload: {
      id: uuid,
      name: name
    },
  });
}
