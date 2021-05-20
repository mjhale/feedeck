import { useState, useEffect } from "react";
import Select from "react-select";
import { getNames, getName } from "../api/blaseball";
import { addPlayer } from "../redux/actions";

const PlayerSelect = () => {
  const [ playerList, setPlayerList ] = useState();

  useEffect(() => {
    getNames()
      .then(names => {
        setPlayerList(names.map((n) => ({value: n.id, label: n.name})));
      });
  }, []);

  return (
    <Select
      options={playerList}
      onChange={(opt) => {
        addPlayer(opt.value, opt.label);
      }}
    />
  );
};

export default PlayerSelect;
