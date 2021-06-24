import store from "./store";

export const feedMe = function(feed) {
  return store.dispatch({
    type: "player/feed",
    payload: feed
  });
};

export const addFilterOptions = function(filterOptions) {
  return store.dispatch({
    type: "filteroptions/append",
    payload: filterOptions,
  });
}
