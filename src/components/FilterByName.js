import PropTypes from "prop-types";

const FilterByName = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "name",
    });
  };
  return (
    <>
      <label className="form__label" htmlFor="name">
        Name:
        <input
          value={props.name}
          onChange={handleChange}
          className="form__input"
          type="text"
          name="name"
          id="name"
        />
      </label>
    </>
  );
};
FilterByName.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};
export default FilterByName;
