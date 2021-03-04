const FilterByName = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "name",
    });
  };
  return (
    <>
      <label htmlFor="name">
        Nombre:
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
export default FilterByName;
