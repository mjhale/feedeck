import { createStore } from 'redux';

const initialState = {
  feed: [],
  columnDefs: [],
  lastUpdate: Date.now(),
  autoRefresh: false,
  feeds: {},
  teamOptions: [],
  playerOptions: []
};

function mainReducer(state = initialState, action) {
  switch (action.type) {
    case 'autoRefresh/toggle':
      return {
        ...state,
        autoRefresh: !state.autoRefresh
      };
    case 'setOptions/teams':
      return {
        ...state,
        teamOptions: action.payload
      };
    case 'setOptions/players':
      return {
        ...state,
        playerOptions: action.payload
      };
    case 'columnDefs/set':
      return {
        ...state,
        columnDefs: [...action.payload]
      };
    case 'columnDefs/add':
      return {
        ...state,
        columnDefs: [...state.columnDefs, action.payload]
      };
    case 'columnDefs/remove':
      return {
        ...state,
        columnDefs: state.columnDefs.filter((entry) => {
          return entry.key !== action.payload;
        })
      };
    case 'columnDefs/update':
      return {
        ...state,
        columnDefs: state.columnDefs.map((entry) => {
          if (entry.key !== action.payload.key) {
            return entry;
          }
          return {
            key: entry.key,
            title: action.payload.title === undefined ? entry.title : action.payload.title,
            playerIds: action.payload.playerIds === undefined ? entry.playerIds : action.payload.playerIds,
            teamIds: action.payload.teamIds === undefined ? entry.teamIds : action.payload.teamIds,
            eventTypes: action.payload.eventTypes === undefined ? entry.eventTypes : action.payload.eventTypes,
            beings: action.payload.beings === undefined ? entry.beings : action.payload.beings,
            categories: action.payload.categories === undefined ? entry.categories : action.payload.categories
          };
        })
      };
    case 'feeds/append':
      let copy = {
        ...state,
        feeds: {
          ...state.feeds
        }
      };
      let prev = [];
      if (!action.payload.reset) {
        prev = state.feeds[action.payload.id] || [];
      }
      let prepend = [];
      if (action.payload.prepend) {
        prepend = prev;
        prev = [];
      }
      copy.feeds[action.payload.id] = [
        ...prepend,
        ...action.payload.entries,
        ...prev
      ];
      return copy;
    case 'lastUpdate/set':
      return {
        ...state,
        lastUpdate: action.payload
      };
    default:
      return state;
  }
}

const store = createStore(mainReducer);

export default store;
