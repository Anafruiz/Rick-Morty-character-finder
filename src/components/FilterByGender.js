const FilterByGender = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "gender",
    });
  };
  const Gender = props.genderList.map((user) => {
    return (
      <>
        <div className="checkbox">
          <label className="input">{user} </label>
          <input
            className="input"
            onChange={handleChange}
            type="checkbox"
            name="gender"
            value={user}
          />
        </div>
      </>
    );
  });

  return <div>{Gender}</div>;
};

export default FilterByGender;
