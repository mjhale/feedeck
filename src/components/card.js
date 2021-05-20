import React from "react";
import { connect } from "react-redux";

class Entry extends React.PureComponent {
  render() {
    const { season, day, description } = this.props;
    return <div>{parseInt(season) + 1} {parseInt(day) + 1} {description}</div>;
  }
}

class CardComp extends React.Component {
  constructor (props) {
    super(props);
    this.playerId = this.props.player.id;
    this.playerName = this.props.player.name;
  }

  render() {
    return (
      <div className="card">
        <h1>{this.playerName}</h1>
        <ul>
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
