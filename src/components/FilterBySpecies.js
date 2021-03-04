const FilterBySpecies = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "species",
    });
  };
  return (
    <>
      <label htmlFor="species">Especie:</label>
      <select
        className="form__input"
        name="species"
        id="species"
        onChange={handleChange}
      >
        <option value="all">Todos</option>
        <option value="Human">Human</option>
        <option value="Alien">Alien</option>
      </select>
    </>
  );
};
export default FilterBySpecies;
