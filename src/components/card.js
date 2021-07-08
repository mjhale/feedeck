import React from "react";
import { connect, useSelector } from "react-redux";
import { fetchFeed } from "../api/eventuallie";
import { removeColumn, feedsMe } from "../redux/actions";
import FilterSelect from "./filter-select";

class Entry extends React.PureComponent {
  render() {
    const { season, day, description } = this.props.data;
    return (
      <div className="entry">
        <div className="entrySeason">
          s{parseInt(season) + 1}
        </div>
        <div className="entryDay">
          d{parseInt(day) + 1}
        </div>
        <div className="entryText">
          {description}
        </div>
      </div>
    );
  }
}

const Entries = (props) => {
  const { filters, id } = props;
  const feedEntries = useSelector((state) => state.feeds[id]);
  React.useEffect(() => {
    fetchFeed({playerIds: filters.playerIds, teamIds: filters.teamIds, eventTypes: filters.eventTypes})
    .then(r => {
      feedsMe(id, r, true);
    });
  }, [filters]);

  return (
    <ul className="feedList">
      {feedEntries && feedEntries.map(f => {
        return (
          <li key={f.id} className="feedEntry">
            <Entry data={f} />
          </li>
        );
      })}
    </ul>
  );
}

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
