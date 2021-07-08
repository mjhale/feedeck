import store from "./store";
import { v4 as uuidv4 } from "uuid";

export const addColumn = function({key, title, playerIds, teamIds, eventTypes}) {
  return store.dispatch({
    type: "columnDefs/add",
    payload: {
      key: key || uuidv4(),
      title: title,
      playerIds: playerIds,
      teamIds: teamIds,
      eventTypes: eventTypes,
    }
  });
};

export const removeColumn = function(key) {
  return store.dispatch({
    type: "columnDefs/remove",
    payload: key
  })
};

export const updateColumn = function(key, payload) {
  return store.dispatch({
    type: "columnDefs/update",
    payload: {
      key: key,
      title: payload.title,
      playerIds: payload.playerIds,
      teamIds: payload.teamIds,
      eventTypes: payload.eventTypes
    }
  });
};

export const feedsMe = function(id, entries, reset) {
  return store.dispatch({
    type: "feeds/append",
    payload: {
      id: id,
      entries: entries,
      reset: reset
    }
  });
};

export const setTeamOptions = function(options) {
  return store.dispatch({
    type: "setOptions/teams",
    payload: options
  });
};

export const setPlayerOptions = function(options) {
  return store.dispatch({
    type: "setOptions/players",
    payload: options
  });
}
