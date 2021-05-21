import { getName } from "../api/blaseball";
import store from "./store";
import { v4 as uuidv4 } from "uuid";

export const addPlayerByUuid = async function(id) {
  var name = await getName(id);
  return addPlayer(id, name);
}

export const addPlayer = function(id, name) {
  return store.dispatch({
    type: "player/add",
    payload: {
      key: uuidv4(),
      id: id,
      name: name
    }
  });
};

export const removeCard = function(key) {
  return store.dispatch({
    type: "player/remove",
    payload: key
  })
};

export const feedMe = function(feed) {
  return store.dispatch({
    type: "player/feed",
    payload: feed
  });
};
