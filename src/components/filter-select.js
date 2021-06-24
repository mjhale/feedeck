import Select from "react-select";

const FilterSelect = (props) => {
  return (
    <Select
      options={props.filterOptions}
      onChange={(opt) => {
        props.setNewCard({
          name: opt.label,
          filters: opt.value,
        });
      }}
    />
  );
};

export default FilterSelect;
