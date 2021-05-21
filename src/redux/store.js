import { createStore } from 'redux';

const initialState = {
  players: [],
  feed: []
};

function playerReducer(state = initialState, action) {
  switch (action.type) {
    case 'player/add':
      return {
        ...state,
        players: [...state.players, action.payload]
      };
    case 'player/remove':
      return {
        ...state,
        players: state.players.filter((entry) => {
          return entry.key !== action.payload; 
        }),
      };
    case 'player/feed':
      return reduceFeed(state, action.payload);
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
