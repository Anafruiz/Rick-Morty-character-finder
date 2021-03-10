import FilterByName from "./FilterByName";
import FilterBySpecies from "./FilterBySpecies";
import FilterByOrigin from "./FilterByOrigin";

import FilterByGender from "./FilterByGender";

import PropTypes from "prop-types";
import ResetButton from "./ResetButton";

const Filters = (props) => {
  const handleInput = (ev) => {
    ev.preventDefault();
  };
  return (
    <section className="form">
      <form className="form__container" onSubmit={handleInput}>
        <FilterByName handleFilter={props.handleFilter} name={props.name} />
        <FilterBySpecies
          handleFilter={props.handleFilter}
          species={props.species}
        />
        <FilterByOrigin
          handleFilter={props.handleFilter}
          OriginList={props.OriginList}
        />
        <FilterByGender
          handleFilter={props.handleFilter}
          genderList={props.genderList}
        />
        <ResetButton resetInputs={props.resetInputs} />
      </form>
    </section>
  );
};
Filters.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};
export default Filters;
