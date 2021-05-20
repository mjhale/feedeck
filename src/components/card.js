import React from "react";
import { connect } from "react-redux";
import { removeCard } from "../redux/actions";

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
  constructor (props) {
    super(props);
    this.playerId = this.props.player.id;
    this.playerName = this.props.player.name;
    this.key = this.props.player.key;
  }

  render() {
    return (
      <div className="card">
        <h1>{this.playerName}</h1>
        <button onClick={() => removeCard(this.key)}>X</button>
        <ul className="feedList">
          {this.props.feed.filter(f => (
            f.playerTags.includes(this.playerId) ||
            f.description.includes(this.playerName)
          )).map(f => (
            <li key={f.id} className="feedEntry"><Entry season={f.season} day={f.day} description={f.description}/></li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {feed: state.feed};
}

const Card = connect(mapStateToProps)(CardComp);

export default Card;
