import { connect } from "react-redux";
import Card from "./card";
import FilterSelect from "./filter-select";

const ContainerComp = (props) => {
  return (
    <div className="cardContainer">
      {props.columns.map(c => (
        <Card key={c.key} filters={c} id={c.key} />
      ))}
      <div className="card">
        <FilterSelect expand={true}/>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {columns: state.columnDefs};
}

const CardContainer = connect(mapStateToProps)(ContainerComp);

export default CardContainer;
