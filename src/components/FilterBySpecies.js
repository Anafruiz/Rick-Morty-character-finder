import PropTypes from "prop-types";

const FilterBySpecies = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "species",
    });
  };
  return (
    <>
      <label className="form__label" htmlFor="species">
        Specie:
      </label>
      <select
        className="form__input"
        name="species"
        id="species"
        onChange={handleChange}
      >
        <option className="form__input--color" value="all">
          ALL
        </option>
        <option className="form__input--color" value="Human">
          Human
        </option>
        <option className="form__input--color" value="Alien">
          Alien
        </option>
      </select>
    </>
  );
};
FilterBySpecies.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};
export default FilterBySpecies;
