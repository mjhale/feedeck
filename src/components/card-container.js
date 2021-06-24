import { connect } from "react-redux";
import { useState } from "react";
import Card from "./card";
import FilterSelect from "./filter-select";

const FilterSelectContainer = connect(state => (
  {filterOptions: state.filterOptions}
))(FilterSelect);

const ContainerComp = (props) => {
  const [cardInfos, setCardInfos] = useState([]);
  return (
    <div className="cardContainer">
      {cardInfos.map(c => (
        <Card key={c.name} name={c.name} filters={c.filters} removeCard={(name) => {setCardInfos(cardInfos.filter(info => (info.name !== name)))}} />
      ))}
      <div className="card">
        <FilterSelectContainer setNewCard={(newCardInfo) => {setCardInfos([...cardInfos, newCardInfo])}} />
      </div>
    </div>
  );
};

export default ContainerComp;
