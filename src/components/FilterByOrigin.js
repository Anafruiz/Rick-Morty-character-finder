const FilterByOrigin = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "origin",
    });
  };
  const Origin = props.OriginList.map((user) => {
    return (
      <>
        <label className="origin">{user} </label>
        <input
          onChange={handleChange}
          type="checkbox"
          name="origin"
          value={user}
        />
      </>
    );
  });

  return <div>{Origin}</div>;
};

export default FilterByOrigin;
