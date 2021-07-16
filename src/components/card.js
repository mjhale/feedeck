import React from "react";
import { useSelector } from "react-redux";
import { fetchFeed } from "../api/eventuallie";
import { feedsMe } from "../redux/actions";
import FilterSelect from "./filter-select";
import ballclark from "../ballclark.png";

class Entry extends React.PureComponent {
  render() {
    const { season, day, description, metadata } = this.props.data;
    let entryText = "entryText";
    switch (metadata?.being) {
      case -1:
        entryText += " bigdeal";
        break;
      case 1:
        entryText += " monitor";
        break;
      case 2:
        entryText += " boss";
        break;
      case 3:
        entryText += " reader";
        break;
      case 5:
        entryText += " lootcrates";
        break;
      default:
        break;
    }
    return (
      <div className="entry">
        <div className="entrySeason">
          s{parseInt(season) + 1}
        </div>
        <div className="entryDay">
          d{parseInt(day) + 1}
        </div>
        <div className={entryText}>
          {description}
        </div>
      </div>
    );
  }
};

const EntryCluster = ({ feedEntries }) => {
  const clustered = feedEntries.reduce((acc, f) => {
    let last = acc.pop();
    if (last.length === 0) {
      last.push(f);
      acc.push(last);
      return acc;
    }
    if (last[0].season === f.season && last[0].day === f.day && last[0].phase === f.phase) {
      last.push(f);
      acc.push(last)
      return acc;
    }
    acc.push(last);
    acc.push([]);
    return acc;
  }, [[]]);

  return (
    <ul className="feedCluster">
      {clustered.map(c => (c.length > 0 &&
        <li key={c[0].season + c[0].day + c[0].phase} className="feedCluster">
          <ul className="feedList">
            {c.map(e => (
              <li key={e.id} className="feedEntry">
                <Entry data={e} />
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

const Entries = (props) => {
  const { filters, id } = props;
  const feedEntries = useSelector((state) => state.feeds[id]);
  const [ loading, setLoading ] = React.useState(false);
  React.useEffect(() => {
    setLoading(true);
    fetchFeed({
      playerIds: filters.playerIds,
      teamIds: filters.teamIds,
      eventTypes: filters.eventTypes,
      beings: filters.beings,
      categories: filters.categories
    })
    .then(r => {
      feedsMe(id, r, true);
      setLoading(false);
    });
  }, [filters, id]);

  return (
    <>
    {loading && (
      <div>
        <center>
          <div className="spinClark">
            <img src={ballclark}/>
          </div>
        </center>
      </div>
    )}
    {feedEntries && <EntryCluster feedEntries={feedEntries} />}
    {/*
    <ul className="feedList">
      {feedEntries && feedEntries.map(f => {
        return (
          <li key={f.id} className="feedEntry">
            <Entry data={f} />
          </li>
        );
      })}
    </ul>
    */}
    </>
  );
};

const Card = (props) => {
  const { filters, id } = props;

  return (
    <div className="card">
      <FilterSelect id={id} />
      <Entries filters={filters} id={id} />
    </div>
  );
}

export default Card;
