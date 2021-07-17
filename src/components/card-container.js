import { useSelector } from "react-redux";
import Card from "./card";
import { addColumn, setColumns } from "../redux/actions";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { SettingsColumn } from './settings';
import { compress, decompress } from '../lib/hashurl';

const CardContainer = (props) => {
  const columns = useSelector((state) => state.columnDefs);
  const history = useHistory();

  const hash = props.match?.params.hash;

  useEffect(() => {
    if (hash) {
      decompress(hash).then(cols => {
        setColumns(cols);
      });
    } else {
      addColumn({});
    }
  }, []);

  useEffect(() => {
    compress(columns).then(s => history.push(`/${s}`));
  }, [columns]);

  return (
    <div className="cardContainer">
      {columns.map(c => (
        <Card key={c.key} filters={c} id={c.key} />
      ))}
      <SettingsColumn hash={hash} />
    </div>
  );
};

export default CardContainer;
