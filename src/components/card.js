import React from "react";
import { useSelector } from "react-redux";
import { fetchFeed } from "../api/eventuallie";
import { feedsMe } from "../redux/actions";
import FilterSelect from "./filter-select";
import ballclark from "../ballclark.png";

const LoadingClark = () => (
  <div>
    <center>
      <div className="spinClark">
        <img src={ballclark} />
      </div>
    </center>
  </div>
);

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

const EntryCluster = ({ id, feedEntries }) => {
  const clustered = feedEntries.reduce((acc, f) => {
    let last = acc.pop();
    if (last.length === 0 || (last[0].season === f.season && last[0].day === f.day && last[0].phase === f.phase)) {
      last.push(f);
      acc.push(last)
      return acc;
    }
    acc.push(last);
    acc.push([f]);
    return acc;
  }, [[]]);

  return (
    <ul className="feedCluster">
      {clustered.map(c => (c.length > 0 &&
        <li key={id + c[0].season + c[0].day + c[0].phase} className="feedCluster">
          <ul className="feedList" key={"ul" + c[0].season + c[0].day + c[0].phase}>
            {c.map(e => (
              <li key={"e" + e.id} className="feedEntry">
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
    let cancelled = false;
    setLoading(true);
    fetchFeed({
      playerIds: filters.playerIds,
      teamIds: filters.teamIds,
      eventTypes: filters.eventTypes,
      beings: filters.beings,
      categories: filters.categories
    })
    .then(r => {
      if (!cancelled) {
        feedsMe(id, r, true);
        setLoading(false);
      }
    });
    return () => (cancelled = true);
  }, [filters, id]);
  const lastUpdate = useSelector((state) => state.lastUpdate);

  const [ loadingMore, setLoadingMore ] = React.useState(false);
  const loadMore = () => {
    setLoadingMore(true);
    let before = lastUpdate;
    if (feedEntries?.length > 0) {
      const last = feedEntries[feedEntries.length - 1];
      before = Date.parse(last.created);
    }
    fetchFeed({
      playerIds: filters.playerIds,
      teamIds: filters.teamIds,
      eventTypes: filters.eventTypes,
      beings: filters.beings,
      categories: filters.categories,
      before: before,
    })
    .then(r => {
      feedsMe(id, r, false, true);
      setLoadingMore(false);
    });
  };

  return (
    <>
    {loading && <LoadingClark />}
    {feedEntries && <EntryCluster id={id} feedEntries={feedEntries} />}
    {loadingMore ?
      <LoadingClark /> :
      !loading && (<div className="loadMore">
        <center>
          <button onClick={loadMore} >Load more</button>
        </center>
      </div>)
    }
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
