import { createStore } from 'redux';

const initialState = {
  filterOptions: [],
  feed: []
};

function playerReducer(state = initialState, action) {
  switch (action.type) {
    case 'player/feed':
      return reduceFeed(state, action.payload);
    case 'filteroptions/append':
      return {
        ...state,
        filterOptions: [...state.filterOptions, ...action.payload]
      };
    default:
      return state;
  }
}

function reduceFeed(prevState, payload) {
  let ids = new Set();
  let desc = new Set();
  for (var f of prevState.feed) {
    ids.add(f.id);
    desc.add(f.description);
  }
  return {
    ...prevState,
    feed: [
      ...payload.filter((f) => !(ids.has(f.id) || desc.has(f.description))),
      ...prevState.feed
    ]
  };

}

const store = createStore(playerReducer);

export default store;
