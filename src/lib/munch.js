import { feedsMe, setLastUpdate } from '../redux/actions';
import { fetchFeed } from '../api/eventuallie';

const intersect = (a1, a2) => {
  return a1.filter(v => a2.includes(v));
};

const include = (a1, a2) => {
  return a1?.length === 0 || intersect(a1, a2).length > 0;
};

export const refreshFeeds = (updateFrom, columns, limit, season) => {
  return fetchFeed({after: updateFrom, limit: 1000})
  .then((updates) => {
    setLastUpdate();
    updates.reverse().map(f => {
      return columns.map(c => {
        if (include(c.playerIds, f.playerTags) &&
            include(c.teamIds, f.teamTags) &&
            include(c.beings, f.metadata ? [f.metadata.being] : []) &&
            include(c.categories, [f.category]) &&
            include(c.eventTypes, [f.type])) {
          return feedsMe(c.key, [f], false, false, limit);
        }
        return undefined;
      });
    });
  });
};

export const refreshFeeds2 = (columns, feeds, limit, updateFrom) => {
  return Promise.all(columns.map(c => {
    const feed = feeds[c.key];
    if (!feed) {
      return Promise.resolve(undefined);
    }
    const last = feed[0]?.created;
    const from = last ? Date.parse(last) : updateFrom;
    return fetchFeed({
        playerIds: c.playerIds,
        teamIds: c.teamIds,
        eventTypes: c.eventTypes,
        beings: c.beings,
        categories: c.categories,
        after: from,
        limit: 1000
      })
      .then(r => {
        feedsMe(c.key, r, false, false, limit)
        setLastUpdate();
      });
  }));
};
