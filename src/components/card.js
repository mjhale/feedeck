import React from "react";
import { connect } from "react-redux";

class Entry extends React.PureComponent {
  render() {
    return <div>{this.props.season + 1} {this.props.day + 1} {this.props.description} {Date.now()}</div>;
  }
}

class CardComp extends React.Component {
  constructor (props) {
    super(props);
    this.playerId = this.props.playerId;
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.feed.filter(f => (
            f.playerTags.includes(this.playerId)
          )).map(f => (
            <li key={f.id}><Entry season={f.season} day={f.day} description={f.description}/></li>
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
