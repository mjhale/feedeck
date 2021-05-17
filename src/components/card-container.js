import { connect } from "react-redux";
import Card from "./card";

const ContainerComp = (props) => {
  return (
    <div>
      {props.players.map(p => (
        <Card playerId={p} />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {players: state.players};
}

const CardContainer = connect(mapStateToProps)(ContainerComp);

export default CardContainer;
