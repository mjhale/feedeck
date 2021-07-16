import { feedsMe, setLastUpdate } from '../redux/actions';
import { fetchFeed } from '../api/eventuallie';

const intersect = (a1, a2) => {
  return a1.filter(v => a2.includes(v));
};

const include = (a1, a2) => {
  return a1?.length === 0 || intersect(a1, a2).length > 0;
};

export const refreshFeeds = (updateFrom, columns) => {
  fetchFeed({after: updateFrom, limit: 1000})
  .then((updates) => {
    setLastUpdate();
    updates.reverse().map(f => {
      columns.map(c => {
        if (include(c.playerIds, f.playerTags) &&
            include(c.teamIds, f.teamTags) &&
            include(c.beings, f.metadata ? [f.metadata.being] : []) &&
            include(c.categories, [f.category]) &&
            include(c.eventTypes, [f.type])) {
          feedsMe(c.key, [f]);
        }
      });
    });
  });
};
