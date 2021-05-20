import { connect } from "react-redux";
import Card from "./card";

const ContainerComp = (props) => {
  return (
    <div>
      {props.players.map(p => (
        <Card key={p.id} player={p} />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {players: state.players};
}

const CardContainer = connect(mapStateToProps)(ContainerComp);

export default CardContainer;
