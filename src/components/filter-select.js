import Select from "react-select";
import { addColumn, updateColumn } from "../redux/actions";
import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';

const FilterSelect = (props) => {
  const teamOptions = useSelector((state) => state.teamOptions);
  const playerOptions = useSelector((state) => state.playerOptions);
  const defs = useSelector((state) => state.columnDefs.find((c) => {
    return c.key === props.id;
  }));

  const [expand, setExpand] = useState(props.expand || false);

  const checkTitle = (opt) => {
    if (!opt || defs?.title) {
      return undefined;
    }
    return opt[0].label;
  };

  return (
    <div>
    {expand ?
      <input
        type="text"
        placeholder={defs?.title}
        onBlur={(e) => updateColumn(props.id, {title: e.target.value})}
      /> :
      <h1>{defs?.title || "New Column"}</h1>
    }
    <button onClick={() => setExpand(!expand)} >{expand ? "hide" : "edit"}</button>
    {expand && (
      <div>
      <label>Teams</label>
      <Select
        options={teamOptions}
        defaultValue={defs && teamOptions.filter((t) => defs.teamIds.includes(t.value))}
        isMulti
        onChange={(opt) => {
          updateColumn(props.id, {
            title: checkTitle(opt),
            teamIds: opt.map((o) => o.value)
          })
        }} 
      />
      <label>Players</label>
      <Select
        options={playerOptions}
        defaultValue={defs && playerOptions.filter((p) => defs.playerIds.includes(p.value))}
        isMulti
        onChange={(opt) => {
          updateColumn(props.id, {
            title: checkTitle(opt),
            playerIds: opt.map((o) => o.value)
          })
        }}
      />
      </div>
    )}
    </div>
  );
};

export default FilterSelect;
