import { connect } from "react-redux";
import Card from "./card";
import { addColumn } from "../redux/actions";
import { v4 as uuidv4 } from "uuid";

const ContainerComp = (props) => {
  return (
    <div className="cardContainer">
      {props.columns.map(c => (
        <Card key={c.key} filters={c} id={c.key} />
      ))}
      <div className="card">
        <button onClick={() => addColumn({key: uuidv4()})}>Add Column</button>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {columns: state.columnDefs};
}

const CardContainer = connect(mapStateToProps)(ContainerComp);

export default CardContainer;
