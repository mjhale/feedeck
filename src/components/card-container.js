import { useSelector } from "react-redux";
import Card from "./card";
import { addColumn } from "../redux/actions";
import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react";
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
    playerIds: tiny.p || [],
    teamIds: tiny.t || [],
    eventTypes: tiny.e || [],
    beings: tiny.b || [],
    categories: tiny.c || []
  }
};

const CardContainer = (props) => {
  const columns = useSelector((state) => state.columnDefs);
  const history = useHistory();

  useEffect(() => {
    const hash = props.match?.params.hash;
    if (hash) {
      codec("lzma").decompress(hash).then((json) => json.map((j) => addColumn(fromTinyColumn(j))));
    } else {
      addColumn({});
    }
  }, []);

  useEffect(() => {
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
