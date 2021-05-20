import { connect } from "react-redux";
import Card from "./card";
import PlayerSelect from "./player-select";

const ContainerComp = (props) => {
  return (
    <div className="cardContainer">
      {props.players.map(p => (
        <Card key={p.id} player={p} />
      ))}
      <div className="card">
        <PlayerSelect />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {players: state.players};
}

const CardContainer = connect(mapStateToProps)(ContainerComp);

export default CardContainer;
