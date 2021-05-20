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
          return entry 
        }),
      };
    case 'player/feed':
      console.log(action.payload);
      return {
        ...state,
        feed: [...action.payload, ...state.feed]
      };
    default:
      return state;
  }
}

const store = createStore(playerReducer);

export default store;
