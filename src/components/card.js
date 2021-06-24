import React from "react";
import { connect } from "react-redux";

class Entry extends React.PureComponent {
  render() {
    const { season, day, description } = this.props;
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

class CardComp extends React.Component {
  render() {
    var {
      filters,
      name,
      feed,
      removeCard
    } = this.props;

    return (
      <div className="card">
        <h1>{name}</h1>
        <button onClick={() => removeCard(name)}>X</button>
        <ul className="feedList">
          {feed.filter(f => {
            return filters.filters.reduce((accumulator, currentFilter) => (
              accumulator ||
              f.playerTags.includes(currentFilter) ||
              f.description.includes(currentFilter) ||
              f.teamNames.includes(currentFilter)
            ), false
          )}).map(f => {
            return <li key={f.id} className="feedEntry"><Entry season={f.season} day={f.day} description={f.description}/></li>
          }
          )}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({feed: state.feed});

const Card = connect(mapStateToProps)(CardComp);

export default Card;
