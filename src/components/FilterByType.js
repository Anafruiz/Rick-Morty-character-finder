const FilterByType = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "type",
    });
  };
  return (
    <label className="form__label" htmlFor="type">
      Type:
      <input
        value={props.type}
        onChange={handleChange}
        className="form__input"
        type="text"
        placeholder="Search a type"
        name="type "
        id="type"
      />
    </label>
  );
};

export default FilterByType;
