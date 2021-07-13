import Select from "react-select";
import { updateColumn, removeColumn } from "../redux/actions";
import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';

const TypeSelect = (props) => {
  const { colId } = props;
  const [ category, setCategory ] = useState(new Set());
  useEffect(() => {
    updateColumn(colId, {
      categories: [...category]
    });
  }, [category]);

  const categoryOptions = [
    {label: "Plays", value: 0},
    {label: "Changes", value: 1},
    {label: "Special", value: 2},
    {label: "Outcomes", value: 3}
  ];

  return (
    <>
    <label htmlFor="all">All</label>
    <input
      id="all"
      type="checkbox"
      checked={category.size === 0}
      onChange={() => {
        if (category.size !== 0) {
          setCategory(new Set());
        }
      }}
    />
    {categoryOptions.map((o) => {
      return (
        <>
        <label htmlFor={`cat${o.value}`}>{o.label}</label>
        <input
          id={`cat${o.value}`}
          type="checkbox"
          checked={category.has(o.value)}
          onChange={() => {
            if (category.has(o.value)) {
              category.delete(o.value);
            } else {
              category.add(o.value);
            }
            if (category.size === categoryOptions.length) {
              category.clear();
            }
            setCategory(new Set(category));
          }}
        />
        </>
      );
    })}
    </>
  );
};

const FilterSelect = (props) => {
  const teamOptions = useSelector((state) => state.teamOptions);
  const playerOptions = useSelector((state) => state.playerOptions);
  const defs = useSelector((state) => state.columnDefs.find((c) => {
    return c.key === props.id;
  }));

  const [expand, setExpand] = useState(props.expand || defs?.title === undefined ? true : false);

  const beingOptions = [
    {label: "Monitor", value: 1},
    {label: "Coin", value: 2},
    {label: "Reader", value: 3},
    {label: "Lootcrates", value: 5},
  ];

  const checkTitle = (opt) => {
    if (!opt || defs?.title) {
      return undefined;
    }
    return opt[0].label;
  };

  return (
    <div>
    <button onClick={() => setExpand(!expand)} >{expand ? "save" : "edit"}</button>
    {expand ?
      <input
        type="text"
        placeholder={defs?.title || "Title"}
        onBlur={(e) => updateColumn(props.id, {title: e.target.value})}
      /> :
      <h1>{defs?.title || "New Column"}</h1>
    }
    {expand && (
      <button onClick={() => removeColumn(props.id)}>
        remove
      </button>
    )}
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

      <label>Beings</label>
      <Select
        options={beingOptions}
        defaultValue={defs && beingOptions.filter((b) => defs.beings.includes(b.value))}
        isMulti
        onChange={(opt) => {
          updateColumn(props.id, {
            title: checkTitle(opt),
            beings: opt.map((o) => o.value)
          });
        }}
      />

      <TypeSelect colId={props.id} />
      </div>
    )}
    </div>
  );
};

export default FilterSelect;
