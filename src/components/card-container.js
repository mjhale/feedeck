import { useSelector } from "react-redux";
import Card from "./card";
import { addColumn } from "../redux/actions";
import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react";
import { JSONCrush, JSONUncrush } from "jsoncrush";
import { useHistory } from "react-router-dom";
import codec from "json-url";

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
  return tiny;
};

const compress = (columns) => {
  return JSONCrush(JSON.stringify(columns.map(toTinyColumn)));
};

const fromTinyColumn = (tiny) => {
  return {
    title: tiny.n || undefined,
    playerIds: tiny.p || [],
    teamIds: tiny.t || [],
    eventTypes: tiny.e || []
  }
};

const decompress = (hash) => {
  const uncrushed = JSONUncrush(decodeURI(hash));
  return JSON.parse(uncrushed).map(fromTinyColumn);
};

const CardContainer = (props) => {
  const columns = useSelector((state) => state.columnDefs);
  const history = useHistory();

  useEffect(() => {
    if (props.match?.params.hash) {
      /*
      const c = decompress(props.match.params.hash);
      c.map((col) => {
        addColumn(col);
      });
      */
      codec("lzma").decompress(props.match.params.hash).then((json) => json.map((j) => addColumn(fromTinyColumn(j))));
    }
  }, []);

  useEffect(() => {
    /*
    let crushed = compress(columns);
    history.push(`/${crushed}`);
    */
    codec("lzma").compress(columns.map(toTinyColumn)).then((s) => history.push(`/${s}`));
  }, [columns]);

  return (
    <div className="cardContainer">
      {columns.map(c => (
        <Card key={c.key} filters={c} id={c.key} />
      ))}
      <div className="card">
        <button onClick={() => addColumn({key: uuidv4()})}>Add Column</button>
      </div>
    </div>
  );
};

export default CardContainer;
