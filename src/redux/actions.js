import store from "./store";
import { v4 as uuidv4 } from "uuid";

export const addColumn = function({key, title, playerIds, teamIds, eventTypes, beings, categories}) {
  return store.dispatch({
    type: "columnDefs/add",
    payload: {
      key: key || uuidv4(),
      title: title,
      playerIds: playerIds || [],
      teamIds: teamIds || [],
      eventTypes: eventTypes || [],
      beings: beings || [],
      categories: categories || []
    }
  });
};

export const setColumns = function(columns) {
  return store.dispatch({
    type: 'columnDefs/set',
    payload: columns
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
      eventTypes: payload.eventTypes,
      beings: payload.beings,
      categories: payload.categories
    }
  });
};

export const moveColumn = function(key, direction) {
  return store.dispatch({
    type: 'columnDefs/move',
    payload: {
      id: key,
      delta: direction
    }
  });
}

export const feedsMe = function(id, entries, reset, prepend) {
  return store.dispatch({
    type: "feeds/append",
    payload: {
      id: id,
      entries: entries,
      reset: reset,
      prepend: prepend
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
};

export const setLastUpdate = () => {
  return store.dispatch({
    type: "lastUpdate/set",
    payload: Date.now()
  });
};

export const toggleAutoRefresh = () => {
  return store.dispatch({
    type: 'autoRefresh/toggle',
  });
};
