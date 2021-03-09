import FilterByName from "./FilterByName";
import FilterBySpecies from "./FilterBySpecies";
import PropTypes from "prop-types";
import ResetButton from "./ResetButton";
import FilterByEpisodes from "./FilterByEpisodes";
import FilterbyType from "./FilterByType";
import FilterByType from "./FilterByType";

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
        <FilterByEpisodes
          handleFilter={props.handleFilter}
          episodes={props.episodes}
        />
        <FilterByType handleFilter={props.handleFilter} type={props.type} />
        <ResetButton resetInputs={props.resetInputs} />
      </form>
    </section>
  );
};
Filters.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};
export default Filters;
