import codec from "json-url";
import { v4 as uuidv4 } from "uuid";

const toTinyColumn = (column) => {
  let tiny = {};
  if (column.title) {
    tiny.n = column.title;
  }
  if (column.playerIds) {
    tiny.p = column.playerIds;
  }
  if (column.teamIds) {
    tiny.t = column.teamIds;
  }
  if (column.eventTypes) {
    tiny.e = column.eventTypes;
  }
  if (column.beings) {
    tiny.b = column.beings;
  }
  if (column.categories) {
    tiny.c = column.categories;
  }
  return tiny;
};

const fromTinyColumn = (tiny) => {
  return {
    title: tiny.n || undefined,
    key: uuidv4(),
    playerIds: tiny.p || [],
    teamIds: tiny.t || [],
    eventTypes: tiny.e || [],
    beings: tiny.b || [],
    categories: tiny.c || []
  }
};

export const decompress = (hash) => {
  return codec("lzma").decompress(hash).then((json) => {
    return json.map(fromTinyColumn);
  });
};

export const compress = (columns) => {
  return codec("lzma").compress(columns.map(toTinyColumn)).then((s) => {
    return s;
  });
};
