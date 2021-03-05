import FilterByName from "./FilterByName";
import FilterBySpecies from "./FilterBySpecies";
import PropTypes from "prop-types";

const Filters = (props) => {
  const handleInput = (ev) => {
    ev.preventDefault();
  };
  return (
    <section className="form">
      <form className="form__container" onSubmit={handleInput}>
        <FilterByName handleFilter={props.handleFilter} name={props.name} />
        <FilterBySpecies handleFilter={props.handleFilter} />
      </form>
    </section>
  );
};
Filters.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};
export default Filters;
